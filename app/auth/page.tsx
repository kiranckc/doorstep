"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [selectedRole, setSelectedRole] = useState<"buyer" | "vendor" | null>(null)
  const [authMethod, setAuthMethod] = useState<"phone" | "email">("phone")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
    businessName: "",
    city: "vizag",
  })
  const [step, setStep] = useState<"auth" | "otp" | "profile">("auth")
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const role = searchParams.get("role")
    if (role === "buyer" || role === "vendor") {
      setSelectedRole(role)
    }
  }, [searchParams])

  const handleSendOTP = async () => {
    setLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setStep("otp")
      setLoading(false)
    }, 1500)
  }

  const handleVerifyOTP = async () => {
    setLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      if (!isLogin) {
        setStep("profile")
      } else {
        // Redirect to dashboard
        router.push(selectedRole === "vendor" ? "/vendor/dashboard" : "/buyer/dashboard")
      }
      setLoading(false)
    }, 1500)
  }

  const handleCompleteSignup = async () => {
    setLoading(true)
    // Simulate profile creation
    setTimeout(() => {
      router.push(selectedRole === "vendor" ? "/vendor/dashboard" : "/buyer/dashboard")
      setLoading(false)
    }, 2000)
  }

  const sampleUsers = {
    buyers: ["Ankit Sharma", "Ramesh Gupta", "Kavya Reddy", "Priya Singh", "Rohit Kumar"],
    vendors: [
      "Mohan PaniPuri Center",
      "Sweet Treats Hyderabad",
      "Ravi Raw Materials",
      "Meena Suppliers",
      "Shahid Trading Co.",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">स्ट्रीट फूड सप्लाई</h1>
            </div>
          </div>
        </div>

        {step === "auth" && (
          <Card className="border-2 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome!</CardTitle>
              <CardDescription>{isLogin ? "Sign in to your account" : "Create your account"}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Role Selection */}
              {!selectedRole && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">I am a:</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 bg-transparent"
                      onClick={() => setSelectedRole("buyer")}
                    >
                      <Users className="w-6 h-6 text-blue-500 mb-2" />
                      <span className="text-blue-600 font-semibold">Buyer</span>
                      <span className="text-xs text-gray-500">Street Food Vendor</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 bg-transparent"
                      onClick={() => setSelectedRole("vendor")}
                    >
                      <ShoppingCart className="w-6 h-6 text-orange-500 mb-2" />
                      <span className="text-orange-600 font-semibold">Vendor</span>
                      <span className="text-xs text-gray-500">Raw Material Supplier</span>
                    </Button>
                  </div>
                </div>
              )}

              {selectedRole && (
                <>
                  <div className="flex items-center justify-center">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700"
                    >
                      {selectedRole === "buyer" ? "🛒 Buyer Account" : "🏪 Vendor Account"}
                    </Badge>
                  </div>

                  {/* Auth Method Selection */}
                  <Tabs value={authMethod} onValueChange={(value) => setAuthMethod(value as "phone" | "email")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="phone">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone
                      </TabsTrigger>
                      <TabsTrigger value="email">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="phone" className="space-y-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-orange-200 focus:border-orange-400"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="email" className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-orange-200 focus:border-orange-400"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button
                    onClick={handleSendOTP}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    {loading ? "Sending OTP..." : `Send OTP via ${authMethod === "phone" ? "SMS" : "Email"}`}
                  </Button>

                  <div className="text-center">
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm text-orange-600 hover:text-orange-700"
                    >
                      {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                  </div>

                  {/* Sample Users */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Sample {selectedRole === "buyer" ? "Buyers" : "Vendors"}:
                    </p>
                    <div className="text-xs text-gray-600 space-y-1">
                      {(selectedRole === "buyer" ? sampleUsers.buyers : sampleUsers.vendors)
                        .slice(0, 3)
                        .map((name, index) => (
                          <div key={index}>• {name}</div>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {step === "otp" && (
          <Card className="border-2 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle>Verify OTP</CardTitle>
              <CardDescription>Enter the 6-digit code sent to your {authMethod}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="otp">OTP Code</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  maxLength={6}
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  className="border-orange-200 focus:border-orange-400 text-center text-lg tracking-widest"
                />
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || formData.otp.length !== 6}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <button onClick={() => setStep("auth")} className="text-sm text-orange-600 hover:text-orange-700">
                  ← Back to login
                </button>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <p className="text-sm text-blue-700">
                  💡 Demo OTP: <strong>123456</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "profile" && (
          <Card className="border-2 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle>Complete Your Profile</CardTitle>
              <CardDescription>
                Tell us more about your {selectedRole === "buyer" ? "business" : "supply business"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={selectedRole === "buyer" ? "Ankit Sharma" : "Meena Devi"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-orange-200 focus:border-orange-400"
                />
              </div>

              <div>
                <Label htmlFor="businessName">
                  {selectedRole === "buyer" ? "Business/Stall Name" : "Supply Business Name"}
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder={selectedRole === "buyer" ? "Ankit Panipuri Center" : "Meena Raw Materials"}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="border-orange-200 focus:border-orange-400"
                />
              </div>

              <div>
                <Label htmlFor="city">City</Label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2 border border-orange-200 rounded-md focus:border-orange-400 focus:outline-none"
                >
                  <option value="vizag">Visakhapatnam (Vizag)</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>

              <Button
                onClick={handleCompleteSignup}
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                {loading ? "Creating Account..." : "Complete Setup"}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
