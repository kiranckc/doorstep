-- Seed Sample Data for Street Food Vendor Supply Platform
-- Insert sample users, products, and orders for demonstration

-- Insert Sample Vendors
INSERT INTO users (id, name, email, phone, role, business_name, city, location_lat, location_lng, address, rating, total_orders, total_revenue, is_verified) VALUES
('vendor_001', 'Meena Devi', 'meena@rawmaterials.com', '+919876543210', 'vendor', 'Meena Raw Materials', 'vizag', 17.6868, 83.2185, 'MVP Colony, Visakhapatnam', 4.8, 156, 45000.00, TRUE),
('vendor_002', 'Ravi Kumar', 'ravi@wholesale.com', '+919876543211', 'vendor', 'Ravi Wholesale Supplies', 'vizag', 17.7231, 83.3044, 'Dwaraka Nagar, Visakhapatnam', 4.6, 134, 38500.00, TRUE),
('vendor_003', 'Shahid Ahmed', 'shahid@trading.com', '+919876543212', 'vendor', 'Shahid Trading Co.', 'vizag', 17.6599, 83.2454, 'Gajuwaka, Visakhapatnam', 4.7, 98, 28900.00, TRUE),
('vendor_004', 'Priya Sharma', 'priya@supplies.com', '+919876543213', 'vendor', 'Priya Fresh Supplies', 'hyderabad', 17.3850, 78.4867, 'Ameerpet, Hyderabad', 4.9, 203, 67800.00, TRUE),
('vendor_005', 'Mohan Reddy', 'mohan@grains.com', '+919876543214', 'vendor', 'Mohan Grain Center', 'hyderabad', 17.4399, 78.3489, 'Kukatpally, Hyderabad', 4.5, 87, 31200.00, TRUE);

-- Insert Sample Buyers
INSERT INTO users (id, name, email, phone, role, business_name, city, location_lat, location_lng, address, rating, total_orders, is_verified) VALUES
('buyer_001', 'Ankit Sharma', 'ankit@panipuri.com', '+919876543220', 'buyer', 'Ankit Panipuri Center', 'vizag', 17.6868, 83.2185, 'MVP Colony, Visakhapatnam', 4.2, 45, TRUE),
('buyer_002', 'Ramesh Gupta', 'ramesh@chats.com', '+919876543221', 'buyer', 'Ramesh Chat Corner', 'vizag', 17.7231, 83.3044, 'Dwaraka Nagar, Visakhapatnam', 4.0, 32, TRUE),
('buyer_003', 'Kavya Reddy', 'kavya@sweets.com', '+919876543222', 'buyer', 'Kavya Sweet Shop', 'vizag', 17.6599, 83.2454, 'Gajuwaka, Visakhapatnam', 4.5, 67, TRUE),
('buyer_004', 'Rohit Kumar', 'rohit@foods.com', '+919876543223', 'buyer', 'Rohit Street Foods', 'hyderabad', 17.3850, 78.4867, 'Ameerpet, Hyderabad', 3.8, 28, TRUE),
('buyer_005', 'Sunita Devi', 'sunita@snacks.com', '+919876543224', 'buyer', 'Sunita Snack Center', 'hyderabad', 17.4399, 78.3489, 'Kukatpally, Hyderabad', 4.3, 51, TRUE);

-- Insert Sample Products
INSERT INTO products (id, vendor_id, name, category, description, price, unit, stock_quantity, min_order_quantity, image_url, delivery_available, pickup_available) VALUES
-- Meena Raw Materials Products
('prod_001', 'vendor_001', 'Fresh Red Onions', 'vegetables', 'Premium quality red onions from local farms, perfect for street food preparation', 25.00, 'kg', 500, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_002', 'vendor_001', 'Quality Potatoes', 'vegetables', 'Fresh potatoes ideal for making various street food items', 20.00, 'kg', 300, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_003', 'vendor_001', 'Ripe Tomatoes', 'vegetables', 'Fresh ripe tomatoes for chutneys and gravies', 30.00, 'kg', 200, 3, '/placeholder.svg?height=200&width=200', TRUE, TRUE),

-- Ravi Wholesale Supplies Products
('prod_004', 'vendor_002', 'Wheat Flour', 'grains', 'High-quality wheat flour for making puris, rotis, and other items', 35.00, 'kg', 1000, 10, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_005', 'vendor_002', 'Basmati Rice', 'grains', 'Premium basmati rice for biryanis and rice dishes', 45.00, 'kg', 800, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_006', 'vendor_002', 'Cooking Oil', 'oil', 'Refined sunflower oil for deep frying and cooking', 120.00, 'liter', 150, 2, '/placeholder.svg?height=200&width=200', TRUE, TRUE),

-- Shahid Trading Co. Products
('prod_007', 'vendor_003', 'Green Chilies', 'spices', 'Fresh spicy green chilies for authentic taste', 40.00, 'kg', 100, 2, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_008', 'vendor_003', 'Fresh Ginger', 'spices', 'Premium quality ginger for flavoring', 60.00, 'kg', 75, 1, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_009', 'vendor_003', 'Coriander Leaves', 'spices', 'Fresh coriander leaves for garnishing', 80.00, 'kg', 50, 1, '/placeholder.svg?height=200&width=200', TRUE, TRUE),

-- Priya Fresh Supplies Products (Hyderabad)
('prod_010', 'vendor_004', 'Sweet Onions', 'vegetables', 'Mild sweet onions perfect for Hyderabadi cuisine', 28.00, 'kg', 400, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_011', 'vendor_004', 'Curry Leaves', 'spices', 'Fresh curry leaves for authentic South Indian flavor', 100.00, 'kg', 30, 1, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_012', 'vendor_004', 'Coconut Oil', 'oil', 'Pure coconut oil for traditional cooking', 180.00, 'liter', 80, 1, '/placeholder.svg?height=200&width=200', TRUE, TRUE),

-- Mohan Grain Center Products (Hyderabad)
('prod_013', 'vendor_005', 'Chickpea Flour', 'grains', 'Fine chickpea flour for making batter and snacks', 50.00, 'kg', 200, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_014', 'vendor_005', 'Semolina', 'grains', 'Coarse semolina for making upma and other dishes', 40.00, 'kg', 150, 5, '/placeholder.svg?height=200&width=200', TRUE, TRUE),
('prod_015', 'vendor_005', 'Black Gram Dal', 'grains', 'Premium black gram dal for making vada and dosa batter', 85.00, 'kg', 100, 2, '/placeholder.svg?height=200&width=200', TRUE, TRUE);

-- Insert Sample Orders
INSERT INTO orders (id, buyer_id, vendor_id, status, total_amount, delivery_fee, delivery_type, delivery_address, payment_status, payment_method, notes) VALUES
('order_001', 'buyer_001', 'vendor_001', 'delivered', 350.00, 50.00, 'delivery', 'MVP Colony, Visakhapatnam', 'paid', 'upi', 'Please deliver fresh onions'),
('order_002', 'buyer_002', 'vendor_002', 'processing', 1375.00, 0.00, 'pickup', NULL, 'paid', 'cash', 'Will pickup tomorrow morning'),
('order_003', 'buyer_003', 'vendor_001', 'pending', 375.00, 50.00, 'delivery', 'Gajuwaka, Visakhapatnam', 'pending', 'cash', 'Need by evening'),
('order_004', 'buyer_004', 'vendor_004', 'delivered', 560.00, 30.00, 'delivery', 'Ameerpet, Hyderabad', 'paid', 'upi', 'Regular customer'),
('order_005', 'buyer_005', 'vendor_005', 'accepted', 425.00, 0.00, 'pickup', NULL, 'pending', 'cash', 'Bulk order for festival');  'accepted', 425.00, 0.00, 'pickup', NULL, 'pending', 'cash', 'Bulk order for festival');

-- Insert Sample Order Items
INSERT INTO order_items (id, order_id, product_id, quantity, unit_price, total_price) VALUES
-- Order 1 items (Ankit's order)
('item_001', 'order_001', 'prod_001', 10, 25.00, 250.00),
('item_002', 'order_001', 'prod_002', 5, 20.00, 100.00),

-- Order 2 items (Ramesh's order)
('item_003', 'order_002', 'prod_004', 20, 35.00, 700.00),
('item_004', 'order_002', 'prod_005', 15, 45.00, 675.00),

-- Order 3 items (Kavya's order)
('item_005', 'order_003', 'prod_001', 15, 25.00, 375.00),

-- Order 4 items (Rohit's order)
('item_006', 'order_004', 'prod_010', 20, 28.00, 560.00),

-- Order 5 items (Sunita's order)
('item_007', 'order_005', 'prod_013', 5, 50.00, 250.00),
('item_008', 'order_005', 'prod_014', 5, 35.00, 175.00);

-- Insert Sample Reviews
INSERT INTO reviews (id, order_id, buyer_id, vendor_id, product_id, rating, comment) VALUES
('review_001', 'order_001', 'buyer_001', 'vendor_001', 'prod_001', 5, 'Excellent quality onions! Always fresh and reasonably priced. Will order again.'),
('review_002', 'order_001', 'buyer_001', 'vendor_001', 'prod_002', 4, 'Good potatoes, but delivery was slightly delayed. Overall satisfied.'),
('review_003', 'order_004', 'buyer_004', 'vendor_004', 'prod_010', 5, 'Best onions in Hyderabad! Perfect for our biryani preparation.'),
('review_004', 'order_002', 'buyer_002', 'vendor_002', NULL, 4, 'Good service and quality products. Pickup was convenient.');

-- Insert Sample Bulk Orders
INSERT INTO bulk_orders (id, product_name, target_quantity, current_quantity, regular_price, bulk_price, target_members, current_members, deadline, city, created_by) VALUES
('bulk_001', 'Wheat Flour', 500, 350, 35.00, 32.00, 12, 8, '2024-12-25', 'vizag', 'buyer_001'),
('bulk_002', 'Basmati Rice', 1000, 750, 45.00, 42.00, 20, 15, '2024-12-28', 'vizag', 'buyer_002'),
('bulk_003', 'Cooking Oil', 200, 120, 120.00, 115.00, 10, 6, '2024-12-30', 'hyderabad', 'buyer_004');

-- Insert Bulk Order Participants
INSERT INTO bulk_order_participants (id, bulk_order_id, buyer_id, quantity_requested) VALUES
('part_001', 'bulk_001', 'buyer_001', 50),
('part_002', 'bulk_001', 'buyer_002', 40),
('part_003', 'bulk_001', 'buyer_003', 60),
('part_004', 'bulk_002', 'buyer_001', 30),
('part_005', 'bulk_002', 'buyer_002', 50),
('part_006', 'bulk_002', 'buyer_003', 40),
('part_007', 'bulk_003', 'buyer_004', 20),
('part_008', 'bulk_003', 'buyer_005', 25);

-- Insert Sample Price Alerts
INSERT INTO price_alerts (id, product_name, current_price, predicted_price, prediction_type, confidence_level, reason, days_to_change, city) VALUES
('alert_001', 'Onions', 25.00, 30.00, 'increase', 85, 'Monsoon affecting supply from Maharashtra', 2, 'both'),
('alert_002', 'Tomatoes', 30.00, 25.00, 'decrease', 70, 'New harvest from Karnataka arriving', 5, 'both'),
('alert_003', 'Green Chilies', 40.00, 45.00, 'increase', 78, 'Seasonal demand increase during winter', 3, 'vizag'),
('alert_004', 'Wheat Flour', 35.00, 38.00, 'increase', 82, 'Export demand driving prices up', 4, 'hyderabad');

-- Insert Alert Subscriptions
INSERT INTO alert_subscriptions (id, user_id, product_name, alert_threshold, notification_method) VALUES
('sub_001', 'buyer_001', 'Onions', 10.00, 'app'),
('sub_002', 'buyer_001', 'Potatoes', 15.00, 'sms'),
('sub_003', 'buyer_002', 'Wheat Flour', 12.00, 'app'),
('sub_004', 'buyer_003', 'Tomatoes', 8.00, 'app'),
('sub_005', 'buyer_004', 'Cooking Oil', 5.00, 'email');

-- Insert Business Hours for Vendors
INSERT INTO business_hours (id, vendor_id, day_of_week, opening_time, closing_time) VALUES
-- Meena Raw Materials (Monday to Saturday)
('hours_001', 'vendor_001', 'monday', '06:00:00', '20:00:00'),
('hours_002', 'vendor_001', 'tuesday', '06:00:00', '20:00:00'),
('hours_003', 'vendor_001', 'wednesday', '06:00:00', '20:00:00'),
('hours_004', 'vendor_001', 'thursday', '06:00:00', '20:00:00'),
('hours_005', 'vendor_001', 'friday', '06:00:00', '20:00:00'),
('hours_006', 'vendor_001', 'saturday', '06:00:00', '18:00:00'),
('hours_007', 'vendor_001', 'sunday', NULL, NULL, TRUE),

-- Ravi Wholesale Supplies (All days)
('hours_008', 'vendor_002', 'monday', '05:30:00', '21:00:00'),
('hours_009', 'vendor_002', 'tuesday', '05:30:00', '21:00:00'),
('hours_010', 'vendor_002', 'wednesday', '05:30:00', '21:00:00'),
('hours_011', 'vendor_002', 'thursday', '05:30:00', '21:00:00'),
('hours_012', 'vendor_002', 'friday', '05:30:00', '21:00:00'),
('hours_013', 'vendor_002', 'saturday', '05:30:00', '21:00:00'),
('hours_014', 'vendor_002', 'sunday', '07:00:00', '19:00:00');

-- Insert Delivery Zones
INSERT INTO delivery_zones (id, vendor_id, zone_name, delivery_fee, min_order_amount, max_delivery_distance, estimated_delivery_time) VALUES
-- Meena Raw Materials delivery zones
('zone_001', 'vendor_001', 'MVP Colony Area', 30.00, 200.00, 5, 45),
('zone_002', 'vendor_001', 'Dwaraka Nagar Area', 50.00, 300.00, 8, 60),
('zone_003', 'vendor_001', 'Gajuwaka Area', 70.00, 400.00, 12, 90),

-- Ravi Wholesale Supplies delivery zones
('zone_004', 'vendor_002', 'Central Vizag', 40.00, 500.00, 10, 60),
('zone_005', 'vendor_002', 'North Vizag', 60.00, 600.00, 15, 90),

-- Priya Fresh Supplies delivery zones (Hyderabad)
('zone_006', 'vendor_004', 'Ameerpet Area', 25.00, 150.00, 5, 30),
('zone_007', 'vendor_004', 'Kukatpally Area', 40.00, 250.00, 8, 45),
('zone_008', 'vendor_004', 'Secunderabad Area', 50.00, 300.00, 12, 60);

-- Insert Sample Messages
INSERT INTO messages (id, sender_id, receiver_id, order_id, message, is_read) VALUES
('msg_001', 'buyer_001', 'vendor_001', 'order_001', 'Hi, when can you deliver the onions?', TRUE),
('msg_002', 'vendor_001', 'buyer_001', 'order_001', 'Hello! We can deliver by 4 PM today. Is that okay?', TRUE),
('msg_003', 'buyer_001', 'vendor_001', 'order_001', 'Perfect! Thank you.', TRUE),
('msg_004', 'buyer_002', 'vendor_002', 'order_002', 'I will come to pickup the flour and rice tomorrow at 10 AM', FALSE),
('msg_005', 'buyer_003', 'vendor_001', 'order_003', 'Please ensure the onions are fresh. Need them for evening preparation.', FALSE);

-- Update product stock after orders (simulate inventory management)
UPDATE products SET stock_quantity = stock_quantity - 10 WHERE id = 'prod_001'; -- Onions sold to Ankit
UPDATE products SET stock_quantity = stock_quantity - 5 WHERE id = 'prod_002';  -- Potatoes sold to Ankit
UPDATE products SET stock_quantity = stock_quantity - 20 WHERE id = 'prod_004'; -- Wheat flour sold to Ramesh
UPDATE products SET stock_quantity = stock_quantity - 15 WHERE id = 'prod_005'; -- Rice sold to Ramesh
UPDATE products SET stock_quantity = stock_quantity - 15 WHERE id = 'prod_001'; -- More onions sold to Kavya
UPDATE products SET stock_quantity = stock_quantity - 20 WHERE id = 'prod_010'; -- Sweet onions sold to Rohit
UPDATE products SET stock_quantity = stock_quantity - 5 WHERE id = 'prod_013';  -- Chickpea flour sold to Sunita
UPDATE products SET stock_quantity = stock_quantity - 5 WHERE id = 'prod_014';  -- Semolina sold to Sunita

-- Create some sample data verification queries
SELECT 'Database seeded successfully!' as status;
SELECT COUNT(*) as total_users FROM users;
SELECT COUNT(*) as total_products FROM products;
SELECT COUNT(*) as total_orders FROM orders;
SELECT COUNT(*) as total_reviews FROM reviews;
SELECT COUNT(*) as active_bulk_orders FROM bulk_orders WHERE status = 'active';
SELECT COUNT(*) as active_price_alerts FROM price_alerts WHERE is_active = TRUE;
