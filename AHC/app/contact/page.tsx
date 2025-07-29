"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-agri-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-agri-accent/20 text-agri-accent border-agri-accent/30">📞 Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-agri-accent">AgriAI</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have questions about our AI-powered agriculture platform? We're here to help you grow smarter.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-agri-accent" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-agri-neon/20 agri-cyan-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-300">Multiple ways to reach our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-agri-accent/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-agri-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">support@agriai.com</p>
                      <p className="text-sm text-gray-400">For general inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-agri-neon/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-agri-neon" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-agri-cyan/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-agri-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Agriculture Tech Blvd</p>
                      <p className="text-gray-300">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-agri-accent/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-agri-accent" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-agri-accent">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-agri-neon">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-agri-accent/10 rounded-lg border border-agri-accent/20">
                    <p className="text-sm text-agri-accent">
                      💬 Our AI chatbot is available 24/7 for instant assistance!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-agri-neon/20">
                <CardHeader>
                  <CardTitle className="text-white">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">For urgent farming emergencies or critical system issues:</p>
                  <div className="space-y-2">
                    <p className="text-agri-neon font-semibold">📞 Emergency Hotline: +1 (555) 911-FARM</p>
                    <p className="text-sm text-gray-400">Available 24/7 for premium subscribers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}
