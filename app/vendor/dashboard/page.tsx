"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Star,
  TrendingUp,
  Users,
  ShoppingCart,
  Menu,
  Home,
  BarChart3,
  MapPin,
  Phone,
  IndianRupee,
} from "lucide-react"

// Sample data
const vendorProfile = {
  name: "Meena Raw Materials",
  owner: "Meena Devi",
  phone: "+91 98765 43210",
  location: "MVP Colony, Vizag",
  rating: 4.8,
  totalOrders: 156,
  totalRevenue: 45000,
  joinedDate: "March 2024",
}

const products = [
  {
    id: 1,
    name: "Onions",
    price: 25,
    unit: "kg",
    stock: 500,
    sold: 120,
    image: "/placeholder.svg?height=80&width=80",
    category: "Vegetables",
    description: "Fresh red onions from local farms",
  },
  {
    id: 2,
    name: "Potatoes",
    price: 20,
    unit: "kg",
    stock: 300,
    sold: 85,
    image: "/placeholder.svg?height=80&width=80",
    category: "Vegetables",
    description: "Quality potatoes perfect for street food",
  },
  {
    id: 3,
    name: "Tomatoes",
    price: 30,
    unit: "kg",
    stock: 200,
    sold: 65,
    image: "/placeholder.svg?height=80&width=80",
    category: "Vegetables",
    description: "Fresh ripe tomatoes",
  },
  {
    id: 4,
    name: "Green Chilies",
    price: 40,
    unit: "kg",
    stock: 100,
    sold: 45,
    image: "/placeholder.svg?height=80&width=80",
    category: "Spices",
    description: "Spicy green chilies",
  },
]

const orders = [
  {
    id: "ORD-001",
    buyer: "Ankit Panipuri Center",
    items: [
      { name: "Onions", quantity: 10, price: 25 },
      { name: "Potatoes", quantity: 5, price: 20 },
    ],
    total: 350,
    status: "delivered",
    date: "2024-12-15",
    phone: "+91 98765 43220",
  },
  {
    id: "ORD-002",
    buyer: "Ramesh Chat Corner",
    items: [
      { name: "Tomatoes", quantity: 8, price: 30 },
      { name: "Green Chilies", quantity: 2, price: 40 },
    ],
    total: 320,
    status: "pending",
    date: "2024-12-18",
    phone: "+91 98765 43221",
  },
  {
    id: "ORD-003",
    buyer: "Kavya Sweet Shop",
    items: [{ name: "Onions", quantity: 15, price: 25 }],
    total: 375,
    status: "processing",
    date: "2024-12-19",
    phone: "+91 98765 43222",
  },
]

const reviews = [
  {
    id: 1,
    buyer: "Ankit Sharma",
    rating: 5,
    comment: "Excellent quality onions! Always fresh and reasonably priced.",
    date: "2024-12-15",
    product: "Onions",
  },
  {
    id: 2,
    buyer: "Ramesh Gupta",
    rating: 4,
    comment: "Good service, but delivery was a bit delayed.",
    date: "2024-12-10",
    product: "Potatoes",
  },
]

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    unit: "kg",
    stock: "",
    category: "Vegetables",
    description: "",
  })

  const handleAddProduct = () => {
    // Add product logic here
    setShowAddProduct(false)
    setNewProduct({
      name: "",
      price: "",
      unit: "kg",
      stock: "",
      category: "Vegetables",
      description: "",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700"
      case "processing":
        return "bg-blue-100 text-blue-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">Vendor Dashboard</h1>
              <p className="text-xs text-gray-600">{vendorProfile.name}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${showMobileMenu ? "block" : "hidden"} lg:block w-64 bg-white shadow-sm border-r min-h-screen`}
        >
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Vendor Panel</h1>
                <p className="text-sm text-gray-600">{vendorProfile.name}</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <Home className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={activeTab === "products" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("products")}
              >
                <Package className="w-4 h-4 mr-2" />
                Products
              </Button>
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("orders")}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Orders
              </Button>
              <Button
                variant={activeTab === "analytics" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("analytics")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button
                variant={activeTab === "reviews" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("reviews")}
              >
                <Star className="w-4 h-4 mr-2" />
                Reviews
              </Button>
            </nav>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-sm font-semibold text-orange-800">Your Store</span>
              </div>
              <p className="text-sm text-orange-700">{vendorProfile.location}</p>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                <span className="text-sm font-semibold">{vendorProfile.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                <p className="text-gray-600">Welcome back, {vendorProfile.owner}!</p>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-green-600">
                          ₹{vendorProfile.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                      <IndianRupee className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-blue-600">{vendorProfile.totalOrders}</p>
                      </div>
                      <ShoppingCart className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Products Listed</p>
                        <p className="text-2xl font-bold text-purple-600">{products.length}</p>
                      </div>
                      <Package className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Rating</p>
                        <p className="text-2xl font-bold text-yellow-600">{vendorProfile.rating}</p>
                      </div>
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest orders from your customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{order.buyer}</h4>
                          <p className="text-sm text-gray-600">
                            {order.items
                              .map((item) => `${item.name} (${item.quantity}${item.name === "Oil" ? "L" : "kg"})`)
                              .join(", ")}
                          </p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₹{order.total}</p>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>Your best performing products this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {products.slice(0, 4).map((product) => (
                      <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-gray-600">
                            ₹{product.price}/{product.unit}
                          </p>
                          <p className="text-sm text-green-600">{product.sold} sold</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Stock</p>
                          <p className="font-semibold">{product.stock}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
                  <p className="text-gray-600">Manage your raw material inventory</p>
                </div>
                <Button onClick={() => setShowAddProduct(true)} className="bg-gradient-to-r from-orange-500 to-red-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>

              {/* Add Product Modal */}
              {showAddProduct && (
                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle>Add New Product</CardTitle>
                    <CardDescription>Add a new raw material to your inventory</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="productName">Product Name</Label>
                        <Input
                          id="productName"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                          placeholder="e.g., Fresh Onions"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          value={newProduct.category}
                          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="Vegetables">Vegetables</option>
                          <option value="Grains">Grains</option>
                          <option value="Spices">Spices</option>
                          <option value="Oil">Oil & Ghee</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newProduct.price}
                          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <Label htmlFor="unit">Unit</Label>
                        <select
                          id="unit"
                          value={newProduct.unit}
                          onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="kg">Kilogram (kg)</option>
                          <option value="liter">Liter</option>
                          <option value="piece">Piece</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="stock">Stock Quantity</Label>
                        <Input
                          id="stock"
                          type="number"
                          value={newProduct.stock}
                          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                          placeholder="500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        placeholder="Brief description of the product quality and source"
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button onClick={handleAddProduct} className="bg-green-500 hover:bg-green-600">
                        Add Product
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500 bg-transparent">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <Badge variant="secondary">{product.category}</Badge>
                        </div>

                        <p className="text-sm text-gray-600">{product.description}</p>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <p className="text-sm text-gray-500">Price</p>
                            <p className="font-semibold text-green-600">
                              ₹{product.price}/{product.unit}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Stock</p>
                            <p className="font-semibold">
                              {product.stock} {product.unit}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Sold</p>
                            <p className="font-semibold text-blue-600">
                              {product.sold} {product.unit}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Revenue</p>
                            <p className="font-semibold">₹{product.sold * product.price}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
                <p className="text-gray-600">Track and manage customer orders</p>
              </div>

              <div className="grid gap-4">
                {orders.map((order) => (
                  <Card key={order.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-gray-600">{order.buyer}</p>
                          <div className="flex items-center mt-1">
                            <Phone className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{order.phone}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>
                              {item.name} × {item.quantity}
                            </span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="font-semibold text-lg">Total: ₹{order.total}</div>
                        <div className="flex space-x-2">
                          {order.status === "pending" && (
                            <>
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                Accept
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-500 bg-transparent">
                                Decline
                              </Button>
                            </>
                          )}
                          {order.status === "processing" && (
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                              Mark as Ready
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Sales Analytics</h2>
                <p className="text-gray-600">Track your business performance</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Revenue Chart</p>
                        <p className="text-sm text-gray-500">Integration with Chart.js</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Product Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {products.map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{product.sold} sold</p>
                            <p className="text-sm text-gray-500">₹{product.sold * product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Growth Rate</h3>
                      <p className="text-2xl font-bold text-green-600">+23%</p>
                      <p className="text-sm text-gray-500">vs last month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Regular Customers</h3>
                      <p className="text-2xl font-bold text-blue-600">45</p>
                      <p className="text-sm text-gray-500">repeat buyers</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Package className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Avg Order Value</h3>
                      <p className="text-2xl font-bold text-purple-600">₹288</p>
                      <p className="text-sm text-gray-500">per order</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
                <p className="text-gray-600">See what your customers are saying</p>
              </div>

              <div className="grid gap-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{review.buyer}</h3>
                          <p className="text-sm text-gray-600">Purchased: {review.product}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 font-semibold">{review.rating}/5</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Overall Rating: {vendorProfile.rating}/5
                    </h3>
                    <p className="text-yellow-700">
                      Based on {vendorProfile.totalOrders} orders from satisfied customers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
