import { Navbar } from "@/components/navbar"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Brain, Users, Target, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-agri-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-agri-accent/20 text-agri-accent border-agri-accent/30">🌾 About AgriAI</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionizing Agriculture Through <span className="text-agri-accent">AI-Human Collaboration</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            AgriAI bridges the gap between cutting-edge artificial intelligence and traditional farming wisdom, creating
            a sustainable future for agriculture through transparent, explainable AI solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
              <CardHeader>
                <Target className="h-12 w-12 text-agri-accent mb-4" />
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To empower farmers worldwide with AI-driven insights while maintaining human oversight and
                  decision-making authority. We believe that the future of agriculture lies in the perfect harmony
                  between artificial intelligence and human expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-neon/20 agri-cyan-glow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-agri-neon mb-4" />
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  A world where every farmer has access to intelligent, transparent, and sustainable farming solutions.
                  We envision agriculture that is both highly productive and environmentally responsible, powered by
                  explainable AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-agri-accent/5 to-agri-neon/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-300">The values that guide our AI-human collaboration framework</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-agri-accent/20 text-center">
              <CardHeader>
                <Brain className="h-16 w-16 text-agri-accent mx-auto mb-4" />
                <CardTitle className="text-white">Explainable AI</CardTitle>
                <CardDescription className="text-gray-300">
                  Every AI decision comes with clear, understandable explanations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  We believe farmers deserve to understand why AI makes certain recommendations. Our explainable AI
                  ensures transparency in every prediction and suggestion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-neon/20 text-center">
              <CardHeader>
                <Users className="h-16 w-16 text-agri-neon mx-auto mb-4" />
                <CardTitle className="text-white">Human-Centered</CardTitle>
                <CardDescription className="text-gray-300">
                  Farmers and experts remain at the center of all decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  AI augments human intelligence rather than replacing it. Our platform ensures that human expertise and
                  judgment guide every farming decision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-agri-cyan/20 text-center">
              <CardHeader>
                <Shield className="h-16 w-16 text-agri-cyan mx-auto mb-4" />
                <CardTitle className="text-white">Sustainable Focus</CardTitle>
                <CardDescription className="text-gray-300">
                  Promoting environmentally responsible farming practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Our AI models prioritize long-term sustainability, helping farmers make decisions that benefit both
                  productivity and environmental health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How AgriAI Works</h2>
            <p className="text-xl text-gray-300">Our collaborative framework in action</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Data Collection",
                description: "Farmers input their soil type, crop preferences, and seasonal information",
                icon: Sprout,
                color: "agri-accent",
              },
              {
                step: 2,
                title: "AI Analysis",
                description:
                  "Our machine learning models analyze the data against historical patterns and environmental factors",
                icon: Brain,
                color: "agri-neon",
              },
              {
                step: 3,
                title: "Explainable Output",
                description: "AI provides predictions with clear explanations in plain language",
                icon: Lightbulb,
                color: "agri-cyan",
              },
              {
                step: 4,
                title: "Human Oversight",
                description: "Agricultural experts review and validate AI recommendations",
                icon: Users,
                color: "agri-accent",
              },
              {
                step: 5,
                title: "Joint Decision",
                description: "Farmers make informed decisions combining AI insights with their experience",
                icon: Target,
                color: "agri-neon",
              },
              {
                step: 6,
                title: "Continuous Learning",
                description: "Real-world outcomes feed back into the system to improve future predictions",
                icon: Shield,
                color: "agri-cyan",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-${item.color}/20 border border-${item.color}/30 flex items-center justify-center`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge className={`bg-${item.color}/20 text-${item.color} border-${item.color}/30`}>
                      Step {item.step}
                    </Badge>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}
