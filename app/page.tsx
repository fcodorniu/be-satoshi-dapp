"use client"

import { Search, Coins, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import Link from "next/link"

const causes = [
  {
    id: 1,
    title: "Operación de corazón para Luna",
    description: "Ayuda a Luna de 8 años a recibir la cirugía cardíaca que necesita urgentemente",
    raised: "45,230",
    goal: "80,000",
    percentage: 57,
    image: "/heart-surgery-medical-equipment-hospital.png",
    creator: "medicos.eth",
  },
  {
    id: 2,
    title: "Agua limpia para comunidades rurales",
    description: "Construye pozos de agua potable en aldeas africanas sin acceso a agua limpia",
    raised: "23,450",
    goal: "50,000",
    percentage: 47,
    image: "/clean-water-well-rural-community-africa.png",
    creator: "wateraid.eth",
  },
  {
    id: 3,
    title: "Reforestación del Amazonas",
    description: "Planta 10,000 árboles nativos para restaurar áreas deforestadas del Amazonas",
    raised: "67,890",
    goal: "100,000",
    percentage: 68,
    image: "/amazon-rainforest-trees-reforestation.png",
    creator: "greenearth.eth",
  },
  {
    id: 4,
    title: "Becas educativas para niños",
    description: "Proporciona educación gratuita a niños en situación de vulnerabilidad",
    raised: "34,120",
    goal: "60,000",
    percentage: 57,
    image: "/students-studying-books-education-scholarship.png",
    creator: "education.eth",
  },
]

export default function HomePage() {
  const [currentCause, setCurrentCause] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCause((prev) => (prev + 1) % causes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextCause = () => {
    setCurrentCause((prev) => (prev + 1) % causes.length)
  }

  const prevCause = () => {
    setCurrentCause((prev) => (prev - 1 + causes.length) % causes.length)
  }

  const cause = causes[currentCause]

  return (
    <div className="min-h-screen bg-background flex flex-col">
  
        <Header />


      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        <div className="w-full max-w-2xl text-center space-y-8">
          {/* Logo */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">Be Satoshi</h1>
            <p className="text-xl text-muted-foreground font-medium">
              Turn your attention into transparent, anonymous, and real-world impact
            </p>
          </div>

          {/* Search Bar */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 w-full">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search the web and generate impact..."
                  className="w-full h-14 px-6 text-lg bg-input border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Impact Tokens Counter */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Coins className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                You have generated: <span className="text-accent font-semibold">1,250 Impact Tokens</span>
              </span>
            </div>
          </div>

          {/* Cause Banner */}
          <div className="w-full max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Cause Banner */}
              <div
                className="relative h-64 rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${cause.image})` }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Navigation arrows */}
                <button
                  onClick={prevCause}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextCause}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-400" />
                      <span className="text-sm font-medium">Causa destacada</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-80">por {cause.creator}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-balance">{cause.title}</h3>
                      <p className="text-sm opacity-90 text-pretty">{cause.description}</p>
                    </div>

                    <div className="space-y-2">
                      {/* Progress bar */}
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${cause.percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{cause.raised} ITK recaudados</span>
                        <span>Meta: {cause.goal} ITK</span>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                      Donar con tus tokens
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {causes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCause(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentCause ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Be Satoshi: Turn your attention into transparent, anonymous, and real-world impact.
          </p>
        </div>
      </footer>
    </div>
  )
}
