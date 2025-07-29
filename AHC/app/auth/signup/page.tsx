"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Chatbot } from "@/components/chatbot"
import { Sprout, User, Shield, Mail, Lock, UserPlus } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    if (formData.name && formData.email && formData.password && formData.role) {
      if (formData.password === formData.confirmPassword) {
        // Redirect based on role
        if (formData.role === "farmer") {
          router.push("/dashboard/farmer")
        } else if (formData.role === "admin") {
          router.push("/dashboard/admin")
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-agri-dark">
      <Navbar />

      <div className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md bg-gray-900/50 border-agri-accent/20 agri-glow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sprout className="h-12 w-12 text-agri-accent" />
            </div>
            <CardTitle className="text-2xl text-white">Join AgriAI</CardTitle>
            <CardDescription className="text-gray-300">Create your account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Full Name
                </Label>
                <div className="relative">
                  <UserPlus className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-300">
                  Role
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)} required>
                  <SelectTrigger className="bg-gray-800 border-agri-accent/30 text-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-agri-accent/30">
                    <SelectItem value="farmer" className="text-white hover:bg-agri-accent/20">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-agri-accent" />
                        Farmer
                      </div>
                    </SelectItem>
                    <SelectItem value="admin" className="text-white hover:bg-agri-accent/20">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-agri-neon" />
                        Administrator
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-agri-accent hover:text-agri-neon">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Chatbot />
    </div>
  )
}
