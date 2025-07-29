"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Chatbot } from "@/components/chatbot"
import {
  Shield,
  MessageSquare,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Eye,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  Activity,
} from "lucide-react"

interface Query {
  id: string
  farmerName: string
  message: string
  timestamp: Date
  status: "pending" | "responded" | "escalated"
  priority: "low" | "medium" | "high"
}

interface XAIInsight {
  id: string
  farmerName: string
  crop: string
  prediction: string
  explanation: string
  confidence: number
  timestamp: Date
  status: "pending" | "approved" | "rejected"
  adminNotes?: string
}

export default function AdminDashboard() {
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null)
  const [response, setResponse] = useState("")
  const [selectedInsight, setSelectedInsight] = useState<XAIInsight | null>(null)
  const [adminNotes, setAdminNotes] = useState("")

  const mockQueries: Query[] = [
    {
      id: "1",
      farmerName: "John Farmer",
      message: "My rice crop is showing yellow leaves. What could be the cause and how should I treat it?",
      timestamp: new Date("2024-01-20T10:30:00"),
      status: "pending",
      priority: "high",
    },
    {
      id: "2",
      farmerName: "Sarah Green",
      message: "Which fertilizer is best for wheat cultivation in black soil during rabi season?",
      timestamp: new Date("2024-01-20T09:15:00"),
      status: "responded",
      priority: "medium",
    },
    {
      id: "3",
      farmerName: "Mike Johnson",
      message: "The AI predicted 45 tons/hectare for my cotton, but I only got 35. What went wrong?",
      timestamp: new Date("2024-01-19T16:45:00"),
      status: "escalated",
      priority: "high",
    },
  ]

  const mockInsights: XAIInsight[] = [
    {
      id: "1",
      farmerName: "John Farmer",
      crop: "Rice",
      prediction: "42 tons/hectare in 120 days",
      explanation:
        "Based on black soil composition and monsoon season conditions, rice shows optimal growth patterns. Historical data indicates 95% success rate for similar conditions.",
      confidence: 89,
      timestamp: new Date("2024-01-20T11:00:00"),
      status: "pending",
    },
    {
      id: "2",
      farmerName: "Sarah Green",
      crop: "Wheat",
      prediction: "38 tons/hectare in 110 days",
      explanation:
        "Alluvial soil provides excellent drainage for wheat. Winter season temperatures align perfectly with crop requirements.",
      confidence: 92,
      timestamp: new Date("2024-01-20T10:45:00"),
      status: "approved",
      adminNotes: "Prediction looks accurate based on regional data. Approved for farmer notification.",
    },
  ]

  const handleQueryResponse = () => {
    if (selectedQuery && response.trim()) {
      // Simulate sending response
      console.log("Response sent:", response)
      setResponse("")
      setSelectedQuery(null)
    }
  }

  const handleInsightReview = (action: "approve" | "reject") => {
    if (selectedInsight) {
      // Simulate review action
      console.log(`Insight ${action}ed:`, selectedInsight.id)
      setAdminNotes("")
      setSelectedInsight(null)
    }
  }

  return (
    <div className="min-h-screen bg-agri-dark">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-agri-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-agri-neon" />
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-400">System oversight and farmer support</p>
              </div>
            </div>
            <Badge className="bg-agri-neon/20 text-agri-neon border-agri-neon/30">🛡️ Administrator</Badge>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-agri-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Farmers</p>
                  <p className="text-2xl font-bold text-agri-accent">1,247</p>
                </div>
                <Users className="h-8 w-8 text-agri-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-agri-neon/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Pending Queries</p>
                  <p className="text-2xl font-bold text-agri-neon">23</p>
                </div>
                <MessageSquare className="h-8 w-8 text-agri-neon" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-agri-cyan/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">AI Predictions</p>
                  <p className="text-2xl font-bold text-agri-cyan">156</p>
                </div>
                <Brain className="h-8 w-8 text-agri-cyan" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-agri-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-agri-accent">94.2%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-agri-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="helpdesk" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-agri-accent/20">
            <TabsTrigger
              value="helpdesk"
              className="data-[state=active]:bg-agri-accent data-[state=active]:text-agri-dark"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Helpdesk
            </TabsTrigger>
            <TabsTrigger
              value="xai-review"
              className="data-[state=active]:bg-agri-accent data-[state=active]:text-agri-dark"
            >
              <Brain className="h-4 w-4 mr-2" />
              XAI Review
            </TabsTrigger>
            <TabsTrigger
              value="feedback"
              className="data-[state=active]:bg-agri-accent data-[state=active]:text-agri-dark"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Feedback Monitor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="helpdesk" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Query List */}
              <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-agri-accent" />
                    Farmer Queries
                  </CardTitle>
                  <CardDescription className="text-gray-300">Manage and respond to farmer inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {mockQueries.map((query) => (
                        <div
                          key={query.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedQuery?.id === query.id
                              ? "border-agri-accent bg-agri-accent/10"
                              : "border-gray-700 bg-gray-800/30 hover:border-agri-accent/50"
                          }`}
                          onClick={() => setSelectedQuery(query)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">{query.farmerName}</span>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={
                                  query.priority === "high"
                                    ? "bg-red-500/20 text-red-400 border-red-500/30"
                                    : query.priority === "medium"
                                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                      : "bg-green-500/20 text-green-400 border-green-500/30"
                                }
                              >
                                {query.priority}
                              </Badge>
                              <Badge
                                className={
                                  query.status === "pending"
                                    ? "bg-agri-cyan/20 text-agri-cyan border-agri-cyan/30"
                                    : query.status === "responded"
                                      ? "bg-agri-neon/20 text-agri-neon border-agri-neon/30"
                                      : "bg-red-500/20 text-red-400 border-red-500/30"
                                }
                              >
                                {query.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">{query.message}</p>
                          <p className="text-xs text-gray-500">{query.timestamp.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Response Panel */}
              <Card className="bg-gray-900/50 border-agri-neon/20 agri-cyan-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-agri-neon" />
                    Response Panel
                  </CardTitle>
                  <CardDescription className="text-gray-300">Provide expert guidance to farmers</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedQuery ? (
                    <div className="space-y-4">
                      <div className="bg-gray-800/30 p-4 rounded-lg border border-agri-accent/10">
                        <h4 className="font-semibold text-white mb-2">Query from {selectedQuery.farmerName}</h4>
                        <p className="text-gray-300 text-sm mb-2">{selectedQuery.message}</p>
                        <p className="text-xs text-gray-500">{selectedQuery.timestamp.toLocaleString()}</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Your Response</label>
                        <Textarea
                          value={response}
                          onChange={(e) => setResponse(e.target.value)}
                          placeholder="Provide detailed guidance and recommendations..."
                          className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400 min-h-32"
                        />
                      </div>

                      <Button
                        onClick={handleQueryResponse}
                        disabled={!response.trim()}
                        className="w-full bg-agri-neon text-agri-dark hover:bg-agri-accent agri-neon-glow"
                      >
                        Send Response
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                      <p>Select a query to respond</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="xai-review" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Insights List */}
              <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-agri-accent" />
                    AI Insights Review
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Review and approve AI-generated predictions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {mockInsights.map((insight) => (
                        <div
                          key={insight.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedInsight?.id === insight.id
                              ? "border-agri-accent bg-agri-accent/10"
                              : "border-gray-700 bg-gray-800/30 hover:border-agri-accent/50"
                          }`}
                          onClick={() => setSelectedInsight(insight)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-white">{insight.farmerName}</span>
                            <Badge
                              className={
                                insight.status === "pending"
                                  ? "bg-agri-cyan/20 text-agri-cyan border-agri-cyan/30"
                                  : insight.status === "approved"
                                    ? "bg-agri-neon/20 text-agri-neon border-agri-neon/30"
                                    : "bg-red-500/20 text-red-400 border-red-500/30"
                              }
                            >
                              {insight.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-agri-accent mb-1">
                            {insight.crop} - {insight.prediction}
                          </p>
                          <p className="text-xs text-gray-400">Confidence: {insight.confidence}%</p>
                          <p className="text-xs text-gray-500 mt-2">{insight.timestamp.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Review Panel */}
              <Card className="bg-gray-900/50 border-agri-neon/20 agri-cyan-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Eye className="h-5 w-5 text-agri-neon" />
                    Insight Review
                  </CardTitle>
                  <CardDescription className="text-gray-300">Validate AI predictions and explanations</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedInsight ? (
                    <div className="space-y-4">
                      <div className="bg-gray-800/30 p-4 rounded-lg border border-agri-accent/10">
                        <h4 className="font-semibold text-white mb-2">{selectedInsight.crop} Prediction</h4>
                        <p className="text-agri-accent mb-2">{selectedInsight.prediction}</p>
                        <p className="text-sm text-gray-300 mb-2">{selectedInsight.explanation}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Farmer: {selectedInsight.farmerName}</span>
                          <span>Confidence: {selectedInsight.confidence}%</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Admin Notes</label>
                        <Textarea
                          value={adminNotes}
                          onChange={(e) => setAdminNotes(e.target.value)}
                          placeholder="Add your review notes and feedback..."
                          className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleInsightReview("approve")}
                          className="flex-1 bg-agri-neon text-agri-dark hover:bg-agri-accent"
                        >
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button onClick={() => handleInsightReview("reject")} variant="destructive" className="flex-1">
                          <ThumbsDown className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <Brain className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                      <p>Select an insight to review</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-agri-accent" />
                  Feedback Loop Monitor
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Track prediction accuracy and model performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/30 p-6 rounded-lg border border-agri-accent/10">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="h-8 w-8 text-agri-accent" />
                      <div>
                        <h3 className="font-semibold text-white">Overall Accuracy</h3>
                        <p className="text-2xl font-bold text-agri-accent">94.2%</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">↑ 2.1% from last month</p>
                  </div>

                  <div className="bg-gray-800/30 p-6 rounded-lg border border-agri-neon/10">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-agri-neon" />
                      <div>
                        <h3 className="font-semibold text-white">Successful Predictions</h3>
                        <p className="text-2xl font-bold text-agri-neon">1,156</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">This month</p>
                  </div>

                  <div className="bg-gray-800/30 p-6 rounded-lg border border-agri-cyan/10">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="h-8 w-8 text-agri-cyan" />
                      <div>
                        <h3 className="font-semibold text-white">Needs Review</h3>
                        <p className="text-2xl font-bold text-agri-cyan">23</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">Pending validation</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Feedback</h3>
                  <div className="space-y-3">
                    {[
                      { farmer: "John Farmer", crop: "Rice", predicted: 45, actual: 42, variance: -6.7 },
                      { farmer: "Sarah Green", crop: "Wheat", predicted: 38, actual: 40, variance: +5.3 },
                      { farmer: "Mike Johnson", crop: "Cotton", predicted: 52, actual: 48, variance: -7.7 },
                    ].map((feedback, index) => (
                      <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-agri-accent/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-white">{feedback.farmer}</span>
                            <span className="text-gray-400 ml-2">- {feedback.crop}</span>
                          </div>
                          <Badge
                            className={
                              Math.abs(feedback.variance) < 5
                                ? "bg-agri-neon/20 text-agri-neon border-agri-neon/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }
                          >
                            {feedback.variance > 0 ? "+" : ""}
                            {feedback.variance}%
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                          <span>Predicted: {feedback.predicted} tons/ha</span>
                          <span>Actual: {feedback.actual} tons/ha</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Chatbot />
    </div>
  )
}
