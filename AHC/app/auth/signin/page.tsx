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
import { Sprout, User, Shield } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const router = useRouter()

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    if (email && password && role) {
      // Redirect based on role
      if (role === "farmer") {
        router.push("/dashboard/farmer")
      } else if (role === "admin") {
        router.push("/dashboard/admin")
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
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300">Sign in to your AgriAI account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-300">
                  Role
                </Label>
                <Select value={role} onValueChange={setRole} required>
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
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-agri-accent hover:text-agri-neon">
                  Sign up
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
