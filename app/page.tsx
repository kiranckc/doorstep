"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, ShoppingCart, TrendingUp, Star, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [stats, setStats] = useState({
    vendors: 150,
    buyers: 300,
    orders: 1200,
    cities: 2,
  })

  useEffect(() => {
    // Animate stats on load
    const timer = setTimeout(() => {
      setStats({
        vendors: 150,
        buyers: 300,
        orders: 1200,
        cities: 2,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">स्ट्रीट फूड सप्लाई</h1>
                <p className="text-sm text-gray-600">Street Food Vendor Supply Platform</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="/auth">
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Connect Street Food Vendors with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                {" "}
                Raw Material Suppliers
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From panipuri vendors to sweet shop owners - find the best deals on onions, potatoes, flour, and more from
              local suppliers in Vizag and Hyderabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth?role=buyer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3"
                >
                  <Users className="w-5 h-5 mr-2" />
                  I'm a Buyer
                </Button>
              </Link>
              <Link href="/auth?role=vendor">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  I'm a Vendor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{stats.vendors}+</div>
              <div className="text-gray-600">Active Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">{stats.buyers}+</div>
              <div className="text-gray-600">Happy Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">{stats.orders}+</div>
              <div className="text-gray-600">Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">{stats.cities}</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h3>
            <p className="text-xl text-gray-600">Built specifically for the Indian street food ecosystem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Location-Based Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Find vendors and buyers near you in Vizag and Hyderabad with our integrated maps. Filter by distance,
                  ratings, and product availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl">AI Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get intelligent price predictions based on mandi data. Know when onion prices might rise and plan your
                  purchases accordingly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-xl">Bulk Order Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with nearby buyers to place bulk orders together. Save money and build a community of street
                  food entrepreneurs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "This platform helped me find the best onion suppliers in Vizag. The price alerts saved me ₹2000 last
                  month!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">R</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ravi Kumar</div>
                    <div className="text-sm text-gray-500">Panipuri Vendor, Vizag</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "As a flour supplier, this platform connected me with 50+ sweet shop owners. My business has grown
                  3x!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold">Meena Devi</div>
                    <div className="text-sm text-gray-500">Raw Material Vendor, Hyderabad</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Street Food Business?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of vendors and buyers already using our platform</p>
          <Link href="/auth">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">स्ट्रीट फूड सप्लाई</span>
              </div>
              <p className="text-gray-400">Connecting street food vendors with raw material suppliers across India.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Find Vendors</li>
                <li>Price Alerts</li>
                <li>Bulk Orders</li>
                <li>Order History</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Vendors</h4>
              <ul className="space-y-2 text-gray-400">
                <li>List Products</li>
                <li>Manage Orders</li>
                <li>Analytics</li>
                <li>Customer Reviews</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>support@streetfoodsupply.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Street Food Vendor Supply Platform. Made with ❤️ for Indian Street Food Entrepreneurs.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
