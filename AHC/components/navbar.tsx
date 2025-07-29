"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sprout } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-agri-dark/95 backdrop-blur-sm border-b border-agri-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-agri-accent" />
            <span className="text-xl font-bold text-white">AgriAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-agri-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-agri-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-agri-accent transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button
                  variant="outline"
                  className="border-agri-accent text-agri-accent hover:bg-agri-accent hover:text-agri-dark bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-agri-accent text-agri-dark hover:bg-agri-neon agri-glow">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-agri-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-agri-dark/95 backdrop-blur-sm">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-agri-accent">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-agri-accent">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-agri-accent">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link href="/auth/signin">
                  <Button
                    variant="outline"
                    className="w-full border-agri-accent text-agri-accent hover:bg-agri-accent hover:text-agri-dark bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="w-full bg-agri-accent text-agri-dark hover:bg-agri-neon">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
