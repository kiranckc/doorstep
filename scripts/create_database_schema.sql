-- Street Food Vendor Supply Platform Database Schema
-- MongoDB-style collections represented as SQL for reference

-- Users Collection (Vendors and Buyers)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15) UNIQUE NOT NULL,
    role ENUM('vendor', 'buyer') NOT NULL,
    business_name VARCHAR(150),
    city ENUM('vizag', 'hyderabad') NOT NULL,
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    address TEXT,
    rating DECIMAL(3, 2) DEFAULT 0.00,
    total_orders INT DEFAULT 0,
    total_revenue DECIMAL(10, 2) DEFAULT 0.00,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products Collection (Raw Materials)
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    vendor_id VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    category ENUM('vegetables', 'grains', 'spices', 'oil', 'dairy') NOT NULL,
    description TEXT,
    price DECIMAL(8, 2) NOT NULL,
    unit ENUM('kg', 'liter', 'piece', 'quintal') NOT NULL,
    stock_quantity INT NOT NULL,
    min_order_quantity INT DEFAULT 1,
    image_url VARCHAR(255),
    is_available BOOLEAN DEFAULT TRUE,
    delivery_available BOOLEAN DEFAULT TRUE,
    pickup_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Orders Collection
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(50) PRIMARY KEY,
    buyer_id VARCHAR(50) NOT NULL,
    vendor_id VARCHAR(50) NOT NULL,
    status ENUM('pending', 'accepted', 'processing', 'ready', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10, 2) NOT NULL,
    delivery_fee DECIMAL(6, 2) DEFAULT 0.00,
    delivery_type ENUM('pickup', 'delivery') NOT NULL,
    delivery_address TEXT,
    delivery_date DATE,
    delivery_time TIME,
    payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
    payment_method ENUM('cash', 'upi', 'card') DEFAULT 'cash',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order Items Collection
CREATE TABLE IF NOT EXISTS order_items (
    id VARCHAR(50) PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    product_id VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(8, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Reviews Collection
CREATE TABLE IF NOT EXISTS reviews (
    id VARCHAR(50) PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    buyer_id VARCHAR(50) NOT NULL,
    vendor_id VARCHAR(50) NOT NULL,
    product_id VARCHAR(50),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

-- Bulk Orders Collection
CREATE TABLE IF NOT EXISTS bulk_orders (
    id VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    target_quantity INT NOT NULL,
    current_quantity INT DEFAULT 0,
    regular_price DECIMAL(8, 2) NOT NULL,
    bulk_price DECIMAL(8, 2) NOT NULL,
    target_members INT NOT NULL,
    current_members INT DEFAULT 0,
    deadline DATE NOT NULL,
    city ENUM('vizag', 'hyderabad') NOT NULL,
    status ENUM('active', 'completed', 'expired') DEFAULT 'active',
    created_by VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Bulk Order Participants Collection
CREATE TABLE IF NOT EXISTS bulk_order_participants (
    id VARCHAR(50) PRIMARY KEY,
    bulk_order_id VARCHAR(50) NOT NULL,
    buyer_id VARCHAR(50) NOT NULL,
    quantity_requested INT NOT NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bulk_order_id) REFERENCES bulk_orders(id) ON DELETE CASCADE,
    FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_participation (bulk_order_id, buyer_id)
);

-- Price Alerts Collection
CREATE TABLE IF NOT EXISTS price_alerts (
    id VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    current_price DECIMAL(8, 2) NOT NULL,
    predicted_price DECIMAL(8, 2) NOT NULL,
    prediction_type ENUM('increase', 'decrease') NOT NULL,
    confidence_level INT CHECK (confidence_level >= 0 AND confidence_level <= 100),
    reason TEXT,
    days_to_change INT,
    city ENUM('vizag', 'hyderabad', 'both') DEFAULT 'both',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);

-- User Subscriptions for Price Alerts
CREATE TABLE IF NOT EXISTS alert_subscriptions (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    alert_threshold DECIMAL(5, 2), -- Percentage change threshold
    notification_method ENUM('app', 'sms', 'email') DEFAULT 'app',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_subscription (user_id, product_name)
);

-- Chat Messages Collection (for buyer-vendor communication)
CREATE TABLE IF NOT EXISTS messages (
    id VARCHAR(50) PRIMARY KEY,
    sender_id VARCHAR(50) NOT NULL,
    receiver_id VARCHAR(50) NOT NULL,
    order_id VARCHAR(50),
    message TEXT NOT NULL,
    message_type ENUM('text', 'image', 'location') DEFAULT 'text',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL
);

-- Vendor Business Hours
CREATE TABLE IF NOT EXISTS business_hours (
    id VARCHAR(50) PRIMARY KEY,
    vendor_id VARCHAR(50) NOT NULL,
    day_of_week ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday') NOT NULL,
    opening_time TIME,
    closing_time TIME,
    is_closed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_vendor_day (vendor_id, day_of_week)
);

-- Delivery Zones for Vendors
CREATE TABLE IF NOT EXISTS delivery_zones (
    id VARCHAR(50) PRIMARY KEY,
    vendor_id VARCHAR(50) NOT NULL,
    zone_name VARCHAR(100) NOT NULL,
    delivery_fee DECIMAL(6, 2) NOT NULL,
    min_order_amount DECIMAL(8, 2) DEFAULT 0.00,
    max_delivery_distance INT, -- in kilometers
    estimated_delivery_time INT, -- in minutes
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_users_city ON users(city);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_products_vendor ON products(vendor_id);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_available ON products(is_available);
CREATE INDEX idx_orders_buyer ON orders(buyer_id);
CREATE INDEX idx_orders_vendor ON orders(vendor_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(created_at);
CREATE INDEX idx_reviews_vendor ON reviews(vendor_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_bulk_orders_city ON bulk_orders(city);
CREATE INDEX idx_bulk_orders_status ON bulk_orders(status);
CREATE INDEX idx_price_alerts_active ON price_alerts(is_active);
CREATE INDEX idx_messages_participants ON messages(sender_id, receiver_id);
