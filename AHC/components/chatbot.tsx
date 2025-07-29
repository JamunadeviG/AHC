"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// TODO: For production, move this to a backend API route to keep your key secret!
const GEMINI_API_KEY = "AIzaSyCsSydfOGvGxwV1ZVY8Z8Ytj4KSTe_WN8E" // <-- Replace with your Gemini API key
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AgriAI assistant. I can help you with crop recommendations, weather insights, and farming best practices. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isBotLoading, setIsBotLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsBotLoading(true)

    // Call Gemini API for bot response
    try {
      const botText = await getGeminiBotResponse(inputValue)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Sorry, I couldn't get a response from the AI right now.",
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsBotLoading(false)
    }
  }

  // Gemini API call
  const getGeminiBotResponse = async (userInput: string): Promise<string> => {
    const payload = {
      contents: [
        {
          parts: [
            { text: userInput },
          ],
        },
      ],
    }
    const res = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error("Failed to fetch from Gemini API")
    const data = await res.json()
    // Gemini returns: data.candidates[0].content.parts[0].text
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that."
    )
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow z-50 ${isOpen ? "hidden" : "flex"} items-center justify-center`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] bg-agri-dark border-agri-accent/30 agri-glow z-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-agri-accent/20">
            <CardTitle className="text-agri-accent flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AgriAI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-agri-accent"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[420px]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-agri-accent text-agri-dark"
                          : "bg-gray-800 text-gray-100 border border-agri-accent/20"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-agri-accent" />}
                        {message.sender === "user" && <User className="h-4 w-4 mt-0.5" />}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isBotLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-gray-800 text-gray-100 border border-agri-accent/20 flex items-center gap-2">
                      <Bot className="h-4 w-4 mt-0.5 text-agri-accent animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-agri-accent/20">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about crops, weather, fertilizers..."
                  className="bg-gray-800 border-agri-accent/30 text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  disabled={isBotLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-agri-accent text-agri-dark hover:bg-agri-neon"
                  disabled={isBotLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
