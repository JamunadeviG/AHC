import { Navbar } from "@/components/navbar"
import { Chatbot } from "@/components/chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Brain, Users, BarChart3, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-agri-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-agri-accent/10 to-agri-neon/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-agri-accent/20 text-agri-accent border-agri-accent/30">
            🌾 AI-Powered Agriculture Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bridging <span className="text-agri-accent">AI</span> with{" "}
            <span className="text-agri-neon">Human Wisdom</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enhance agricultural productivity through intelligent collaboration between artificial intelligence and
            human expertise. Get explainable insights, predictive analytics, and sustainable farming solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-agri-accent text-agri-accent hover:bg-agri-accent hover:text-agri-dark bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intelligent Agriculture Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Combining cutting-edge AI with human expertise for sustainable farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <Brain className="h-12 w-12 text-agri-accent mb-4" />
                <CardTitle className="text-white">Explainable AI</CardTitle>
                <CardDescription className="text-gray-300">
                  Get clear, understandable explanations for every AI prediction and recommendation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Plain-language insights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Reasoning transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Decision confidence scores
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-agri-neon mb-4" />
                <CardTitle className="text-white">Yield Prediction</CardTitle>
                <CardDescription className="text-gray-300">
                  Accurate crop yield and duration predictions based on soil and seasonal data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    ML-powered forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Soil type analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Seasonal optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <Users className="h-12 w-12 text-agri-cyan mb-4" />
                <CardTitle className="text-white">Human Oversight</CardTitle>
                <CardDescription className="text-gray-300">
                  Expert review and feedback loops ensure AI recommendations align with reality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Admin review panel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Feedback integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Continuous improvement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <Zap className="h-12 w-12 text-agri-accent mb-4" />
                <CardTitle className="text-white">Smart Chatbot</CardTitle>
                <CardDescription className="text-gray-300">
                  24/7 AI assistant for crop advice, weather insights, and farming guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Instant responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Contextual advice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Multi-language support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <Shield className="h-12 w-12 text-agri-neon mb-4" />
                <CardTitle className="text-white">Sustainability Focus</CardTitle>
                <CardDescription className="text-gray-300">
                  Promote eco-friendly practices with environmental impact tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Carbon footprint tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Resource optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Sustainable recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow hover:border-agri-accent/40 transition-all">
              <CardHeader>
                <Sprout className="h-12 w-12 text-agri-cyan mb-4" />
                <CardTitle className="text-white">Comprehensive Reports</CardTitle>
                <CardDescription className="text-gray-300">
                  Detailed analytics and insights to track your farming progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Historical data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-agri-neon" />
                    Trend analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-agri-accent/10 to-agri-neon/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of farmers already using AI-powered insights to increase productivity and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-agri-accent text-agri-accent hover:bg-agri-accent hover:text-agri-dark bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}
