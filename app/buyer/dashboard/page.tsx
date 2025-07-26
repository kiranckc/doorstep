"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Search,
  Filter,
  ShoppingCart,
  Star,
  Phone,
  TrendingUp,
  Users,
  Bell,
  Menu,
  Home,
  Package,
  AlertTriangle,
} from "lucide-react"

// Sample data
const vendors = [
  {
    id: 1,
    name: "Meena Raw Materials",
    owner: "Meena Devi",
    rating: 4.8,
    distance: "0.8 km",
    location: "MVP Colony, Vizag",
    phone: "+91 98765 43210",
    products: [
      { name: "Onions", price: 25, unit: "kg", stock: 500, image: "/placeholder.svg?height=60&width=60" },
      { name: "Potatoes", price: 20, unit: "kg", stock: 300, image: "/placeholder.svg?height=60&width=60" },
      { name: "Tomatoes", price: 30, unit: "kg", stock: 200, image: "/placeholder.svg?height=60&width=60" },
    ],
    delivery: true,
    pickup: true,
  },
  {
    id: 2,
    name: "Ravi Wholesale Supplies",
    owner: "Ravi Kumar",
    rating: 4.6,
    distance: "1.2 km",
    location: "Dwaraka Nagar, Vizag",
    phone: "+91 98765 43211",
    products: [
      { name: "Wheat Flour", price: 35, unit: "kg", stock: 1000, image: "/placeholder.svg?height=60&width=60" },
      { name: "Rice", price: 45, unit: "kg", stock: 800, image: "/placeholder.svg?height=60&width=60" },
      { name: "Oil", price: 120, unit: "liter", stock: 150, image: "/placeholder.svg?height=60&width=60" },
    ],
    delivery: true,
    pickup: true,
  },
  {
    id: 3,
    name: "Shahid Trading Co.",
    owner: "Shahid Ahmed",
    rating: 4.7,
    distance: "2.1 km",
    location: "Gajuwaka, Vizag",
    phone: "+91 98765 43212",
    products: [
      { name: "Green Chilies", price: 40, unit: "kg", stock: 100, image: "/placeholder.svg?height=60&width=60" },
      { name: "Coriander", price: 80, unit: "kg", stock: 50, image: "/placeholder.svg?height=60&width=60" },
      { name: "Ginger", price: 60, unit: "kg", stock: 75, image: "/placeholder.svg?height=60&width=60" },
    ],
    delivery: false,
    pickup: true,
  },
]

const priceAlerts = [
  {
    id: 1,
    product: "Onions",
    currentPrice: 25,
    prediction: "increase",
    expectedPrice: 30,
    confidence: 85,
    reason: "Monsoon affecting supply from Maharashtra",
    daysToIncrease: 2,
  },
  {
    id: 2,
    product: "Tomatoes",
    currentPrice: 30,
    prediction: "decrease",
    expectedPrice: 25,
    confidence: 70,
    reason: "New harvest from Karnataka arriving",
    daysToIncrease: 5,
  },
]

const bulkOrders = [
  {
    id: 1,
    product: "Wheat Flour",
    quantity: "500 kg",
    currentMembers: 8,
    targetMembers: 12,
    pricePerKg: 35,
    bulkPricePerKg: 32,
    savings: "₹1,500",
    deadline: "2 days left",
  },
  {
    id: 2,
    product: "Rice",
    quantity: "1000 kg",
    currentMembers: 15,
    targetMembers: 20,
    pricePerKg: 45,
    bulkPricePerKg: 42,
    savings: "₹3,000",
    deadline: "5 days left",
  },
]

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("vendors")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVendor, setSelectedVendor] = useState<number | null>(null)
  const [cart, setCart] = useState<any[]>([])
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const addToCart = (vendor: any, product: any, quantity = 1) => {
    const cartItem = {
      id: `${vendor.id}-${product.name}`,
      vendorId: vendor.id,
      vendorName: vendor.name,
      product: product.name,
      price: product.price,
      quantity,
      unit: product.unit,
      image: product.image,
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItem.id)
      if (existing) {
        return prev.map((item) => (item.id === cartItem.id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, cartItem]
    })
  }

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.products.some((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">Buyer Dashboard</h1>
              <p className="text-xs text-gray-600">Ankit Panipuri Center</p>
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Buyer Panel</h1>
                <p className="text-sm text-gray-600">Ankit Panipuri Center</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Button
                variant={activeTab === "vendors" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("vendors")}
              >
                <Home className="w-4 h-4 mr-2" />
                Find Vendors
              </Button>
              <Button
                variant={activeTab === "alerts" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("alerts")}
              >
                <Bell className="w-4 h-4 mr-2" />
                Price Alerts
              </Button>
              <Button
                variant={activeTab === "bulk" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("bulk")}
              >
                <Users className="w-4 h-4 mr-2" />
                Bulk Orders
              </Button>
              <Button
                variant={activeTab === "cart" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("cart")}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart ({cart.length})
              </Button>
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("orders")}
              >
                <Package className="w-4 h-4 mr-2" />
                Order History
              </Button>
            </nav>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800">Your Location</span>
              </div>
              <p className="text-sm text-blue-700">MVP Colony, Vizag</p>
              <Button size="sm" variant="outline" className="mt-2 text-xs bg-transparent">
                Change Location
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "vendors" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Find Raw Material Vendors</h2>
                  <p className="text-gray-600">Discover the best suppliers near you in Vizag</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search vendors or products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="h-64 bg-gradient-to-br from-green-100 to-blue-100 border-2 border-dashed border-gray-300">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Interactive Map View</h3>
                    <p className="text-gray-500">Google Maps integration showing vendor locations</p>
                    <div className="mt-4 flex justify-center space-x-2">
                      {filteredVendors.map((vendor, index) => (
                        <div key={vendor.id} className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vendors List */}
              <div className="grid gap-6">
                {filteredVendors.map((vendor) => (
                  <Card key={vendor.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{vendor.name}</CardTitle>
                          <CardDescription className="text-base">
                            Owner: {vendor.owner} • {vendor.location}
                          </CardDescription>
                          <div className="flex items-center mt-2 space-x-4">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-semibold">{vendor.rating}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{vendor.distance}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Phone className="w-4 h-4 mr-1" />
                              <span>{vendor.phone}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {vendor.delivery && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              🚚 Delivery
                            </Badge>
                          )}
                          {vendor.pickup && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              🏪 Pickup
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {vendor.products.map((product, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{product.name}</h4>
                                <p className="text-lg font-bold text-green-600">
                                  ₹{product.price}/{product.unit}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Stock: {product.stock} {product.unit}
                                </p>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-600"
                              onClick={() => addToCart(vendor, product)}
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Price Alerts</h2>
                <p className="text-gray-600">Smart predictions based on mandi data and market trends</p>
              </div>

              <div className="grid gap-4">
                {priceAlerts.map((alert) => (
                  <Card
                    key={alert.id}
                    className={`border-l-4 ${
                      alert.prediction === "increase" ? "border-l-red-500" : "border-l-green-500"
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <AlertTriangle
                              className={`w-5 h-5 mr-2 ${
                                alert.prediction === "increase" ? "text-red-500" : "text-green-500"
                              }`}
                            />
                            <h3 className="text-lg font-semibold">{alert.product}</h3>
                            <Badge
                              variant="secondary"
                              className={`ml-2 ${
                                alert.prediction === "increase"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {alert.prediction === "increase" ? "📈 Price Rise" : "📉 Price Drop"}
                            </Badge>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600">Current Price</p>
                              <p className="text-xl font-bold">₹{alert.currentPrice}/kg</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Expected Price</p>
                              <p
                                className={`text-xl font-bold ${
                                  alert.prediction === "increase" ? "text-red-600" : "text-green-600"
                                }`}
                              >
                                ₹{alert.expectedPrice}/kg
                              </p>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-3 rounded-lg mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Reason:</p>
                            <p className="text-sm text-gray-600">{alert.reason}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-sm text-gray-600">Confidence</p>
                                <p className="font-semibold">{alert.confidence}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Timeline</p>
                                <p className="font-semibold">{alert.daysToIncrease} days</p>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className={
                                alert.prediction === "increase"
                                  ? "bg-red-500 hover:bg-red-600"
                                  : "bg-green-500 hover:bg-green-600"
                              }
                            >
                              {alert.prediction === "increase" ? "Buy Now" : "Wait & Save"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-800">How Our AI Works</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">📊 Data Sources</h4>
                      <p className="text-blue-600">Mandi prices, weather data, seasonal trends, transportation costs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">🤖 ML Models</h4>
                      <p className="text-blue-600">Linear regression, time series analysis, demand forecasting</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">⚡ Real-time</h4>
                      <p className="text-blue-600">Updated every 6 hours with latest market conditions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "bulk" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Bulk Order Groups</h2>
                <p className="text-gray-600">Join with nearby buyers to get better prices</p>
              </div>

              <div className="grid gap-4">
                {bulkOrders.map((order) => (
                  <Card key={order.id} className="border-2 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{order.product}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Target: {order.quantity}</span>
                            <span>•</span>
                            <span>{order.deadline}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Save {order.savings}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Regular Price</p>
                          <p className="text-lg font-semibold">₹{order.pricePerKg}/kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Bulk Price</p>
                          <p className="text-lg font-semibold text-green-600">₹{order.bulkPricePerKg}/kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Your Savings</p>
                          <p className="text-lg font-semibold text-green-600">{order.savings}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold">Progress</span>
                          <span className="text-sm text-gray-600">
                            {order.currentMembers}/{order.targetMembers} members
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(order.currentMembers / order.targetMembers) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {order.targetMembers - order.currentMembers} more needed
                          </span>
                        </div>
                        <Button className="bg-green-500 hover:bg-green-600">Join Group</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-yellow-800">Create New Bulk Order</h3>
                  </div>
                  <p className="text-yellow-700 mb-4">
                    Can't find what you need? Start your own bulk order group and invite nearby buyers!
                  </p>
                  <Button
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 bg-transparent"
                  >
                    + Create Bulk Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "cart" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Shopping Cart</h2>
                <p className="text-gray-600">Review your items before placing order</p>
              </div>

              {cart.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-4">Add some products from vendors to get started</p>
                    <Button onClick={() => setActiveTab("vendors")}>Browse Vendors</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                      <Card key={item.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.product}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold">{item.product}</h3>
                              <p className="text-sm text-gray-600">{item.vendorName}</p>
                              <p className="text-lg font-bold text-green-600">
                                ₹{item.price}/{item.unit}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline">
                                -
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button size="sm" variant="outline">
                                +
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">₹{item.price * item.quantity}</p>
                              <Button size="sm" variant="ghost" className="text-red-500">
                                Remove
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div>
                    <Card className="sticky top-6">
                      <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>₹50</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 50}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">Place Order</Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            Save for Later
                          </Button>
                        </div>

                        <div className="text-sm text-gray-600 space-y-1">
                          <p>📦 Delivery Options:</p>
                          <p>• Home Delivery (2-4 hours)</p>
                          <p>• Pickup from Vendor</p>
                          <p>• Express Delivery (+₹20)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Order History</h2>
                <p className="text-gray-600">Track your past and current orders</p>
              </div>

              <div className="grid gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">Order #ORD-001</h3>
                        <p className="text-sm text-gray-600">Placed on Dec 15, 2024</p>
                        <p className="text-sm text-gray-600">Meena Raw Materials</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Delivered</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Onions (10 kg)</span>
                        <span>₹250</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Potatoes (5 kg)</span>
                        <span>₹100</span>
                      </div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹350</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">Order #ORD-002</h3>
                        <p className="text-sm text-gray-600">Placed on Dec 18, 2024</p>
                        <p className="text-sm text-gray-600">Ravi Wholesale Supplies</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">In Transit</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Wheat Flour (20 kg)</span>
                        <span>₹700</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rice (15 kg)</span>
                        <span>₹675</span>
                      </div>
                    </div>
                    <div className="flex justify-between font-semibold mb-4">
                      <span>Total</span>
                      <span>₹1,375</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Track Order
                      </Button>
                      <Button size="sm" variant="outline">
                        Contact Vendor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
