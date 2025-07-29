"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Chatbot } from "@/components/chatbot"
import { Sprout, Brain, BarChart3, FileText, TrendingUp, Calendar, Lightbulb, CheckCircle } from "lucide-react"

interface PredictionResult {
  crop: string
  soilType: string
  season: string
  predictedYield: number
  duration: number
  confidence: number
  explanation: string
  recommendations: string[]
}

export default function FarmerDashboard() {
  const [predictionData, setPredictionData] = useState({
    crop: "",
    soilType: "",
    season: "",
  })
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePredict = async () => {
    if (!predictionData.crop || !predictionData.soilType || !predictionData.season) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const mockPrediction: PredictionResult = {
        crop: predictionData.crop,
        soilType: predictionData.soilType,
        season: predictionData.season,
        predictedYield: Math.floor(Math.random() * 50) + 20,
        duration: Math.floor(Math.random() * 60) + 90,
        confidence: Math.floor(Math.random() * 20) + 80,
        explanation: `Based on historical data, ${predictionData.crop} performs exceptionally well in ${predictionData.soilType} during ${predictionData.season}. The soil's nutrient composition and water retention properties align perfectly with this crop's requirements. Weather patterns during this season provide optimal growing conditions.`,
        recommendations: [
          "Apply organic fertilizer 2 weeks before planting",
          "Ensure proper drainage to prevent waterlogging",
          "Monitor soil pH levels weekly",
          "Use drip irrigation for water efficiency",
          "Plant during the first week of the season for best results",
        ],
      }
      setPrediction(mockPrediction)
      setIsLoading(false)
    }, 2000)
  }

  const mockReports = [
    {
      id: 1,
      date: "2024-01-15",
      crop: "Rice",
      predictedYield: 45,
      actualYield: 42,
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-01-10",
      crop: "Wheat",
      predictedYield: 38,
      actualYield: null,
      status: "In Progress",
    },
    {
      id: 3,
      date: "2024-01-05",
      crop: "Cotton",
      predictedYield: 52,
      actualYield: 48,
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-agri-dark">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-agri-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="h-8 w-8 text-agri-accent" />
              <div>
                <h1 className="text-2xl font-bold text-white">Farmer Dashboard</h1>
                <p className="text-gray-400">Welcome back, John Farmer</p>
              </div>
            </div>
            <Badge className="bg-agri-accent/20 text-agri-accent border-agri-accent/30">🌱 Active Farmer</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="predictor" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-agri-accent/20">
            <TabsTrigger
              value="predictor"
              className="data-[state=active]:bg-agri-accent data-[state=active]:text-agri-dark"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Yield Predictor
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-agri-accent data-[state=active]:text-agri-dark"
            >
              <FileText className="h-4 w-4 mr-2" />
              My Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="predictor" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-agri-accent" />
                    Crop Prediction Input
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter your farming parameters for AI-powered yield prediction
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Crop Type</Label>
                    <Select
                      value={predictionData.crop}
                      onValueChange={(value) => setPredictionData((prev) => ({ ...prev, crop: value }))}
                    >
                      <SelectTrigger className="bg-gray-800 border-agri-accent/30 text-white">
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-agri-accent/30">
                        <SelectItem value="rice" className="text-white">
                          Rice
                        </SelectItem>
                        <SelectItem value="wheat" className="text-white">
                          Wheat
                        </SelectItem>
                        <SelectItem value="cotton" className="text-white">
                          Cotton
                        </SelectItem>
                        <SelectItem value="sugarcane" className="text-white">
                          Sugarcane
                        </SelectItem>
                        <SelectItem value="maize" className="text-white">
                          Maize
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">Soil Type</Label>
                    <Select
                      value={predictionData.soilType}
                      onValueChange={(value) => setPredictionData((prev) => ({ ...prev, soilType: value }))}
                    >
                      <SelectTrigger className="bg-gray-800 border-agri-accent/30 text-white">
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-agri-accent/30">
                        <SelectItem value="black" className="text-white">
                          Black Soil
                        </SelectItem>
                        <SelectItem value="red" className="text-white">
                          Red Soil
                        </SelectItem>
                        <SelectItem value="alluvial" className="text-white">
                          Alluvial Soil
                        </SelectItem>
                        <SelectItem value="clay" className="text-white">
                          Clay Soil
                        </SelectItem>
                        <SelectItem value="sandy" className="text-white">
                          Sandy Soil
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300">Season</Label>
                    <Select
                      value={predictionData.season}
                      onValueChange={(value) => setPredictionData((prev) => ({ ...prev, season: value }))}
                    >
                      <SelectTrigger className="bg-gray-800 border-agri-accent/30 text-white">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-agri-accent/30">
                        <SelectItem value="kharif" className="text-white">
                          Kharif (Monsoon)
                        </SelectItem>
                        <SelectItem value="rabi" className="text-white">
                          Rabi (Winter)
                        </SelectItem>
                        <SelectItem value="zaid" className="text-white">
                          Zaid (Summer)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={handlePredict}
                    disabled={isLoading || !predictionData.crop || !predictionData.soilType || !predictionData.season}
                    className="w-full bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow"
                  >
                    {isLoading ? "Analyzing..." : "Predict Yield"}
                  </Button>
                </CardContent>
              </Card>

              {/* Prediction Results */}
              <Card className="bg-gray-900/50 border-agri-accent/20 agri-cyan-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-agri-neon" />
                    AI Prediction Results
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Explainable AI insights for your farming decisions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-agri-accent">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-agri-accent"></div>
                        Analyzing your farming parameters...
                      </div>
                      <Progress value={60} className="bg-gray-800" />
                    </div>
                  ) : prediction ? (
                    <div className="space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-agri-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-agri-accent" />
                            <span className="text-sm text-gray-400">Predicted Yield</span>
                          </div>
                          <p className="text-2xl font-bold text-agri-accent">
                            {prediction.predictedYield} tons/hectare
                          </p>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-agri-neon/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-agri-neon" />
                            <span className="text-sm text-gray-400">Duration</span>
                          </div>
                          <p className="text-2xl font-bold text-agri-neon">{prediction.duration} days</p>
                        </div>
                      </div>

                      {/* Confidence Score */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Confidence Score</span>
                          <span className="text-agri-cyan font-semibold">{prediction.confidence}%</span>
                        </div>
                        <Progress value={prediction.confidence} className="bg-gray-800" />
                      </div>

                      {/* Explanation */}
                      <div className="bg-gray-800/30 p-4 rounded-lg border border-agri-accent/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="h-4 w-4 text-agri-accent" />
                          <span className="font-semibold text-agri-accent">AI Explanation</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{prediction.explanation}</p>
                      </div>

                      {/* Recommendations */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-agri-neon" />
                          Recommendations
                        </h4>
                        <ul className="space-y-2">
                          {prediction.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-agri-accent rounded-full mt-2 flex-shrink-0"></div>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <Brain className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                      <p>Enter your farming parameters to get AI-powered predictions</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-gray-900/50 border-agri-accent/20 agri-glow">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-agri-accent" />
                  My Farming Reports
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Track your prediction history and farming outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReports.map((report) => (
                    <div key={report.id} className="bg-gray-800/30 p-4 rounded-lg border border-agri-accent/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Sprout className="h-5 w-5 text-agri-accent" />
                          <div>
                            <h4 className="font-semibold text-white">{report.crop} Cultivation</h4>
                            <p className="text-sm text-gray-400">{report.date}</p>
                          </div>
                        </div>
                        <Badge
                          className={
                            report.status === "Completed"
                              ? "bg-agri-neon/20 text-agri-neon border-agri-neon/30"
                              : "bg-agri-cyan/20 text-agri-cyan border-agri-cyan/30"
                          }
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Predicted Yield:</span>
                          <span className="ml-2 text-agri-accent font-semibold">{report.predictedYield} tons/ha</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Actual Yield:</span>
                          <span className="ml-2 text-agri-neon font-semibold">
                            {report.actualYield ? `${report.actualYield} tons/ha` : "Pending"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
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
