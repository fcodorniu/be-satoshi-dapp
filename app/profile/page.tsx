"use client"

import { ArrowLeft, Settings, Trophy, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const achievements = [
  {
    name: "Frecuente Gold",
    level: "2020/25",
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20",
  },
  {
    name: "Benefactor Plata",
    level: "2400/25",
    icon: Star,
    color: "text-gray-300",
    bgColor: "bg-gray-300/20",
  },
  {
    name: "Filántropo de Ciencias",
    level: "2400/25",
    icon: Heart,
    color: "text-gray-300",
    bgColor: "bg-gray-300/20",
  },
]

const recentDonations = [
  {
    id: 1,
    title: "Heart Surgery for Luna in La Plata",
    creator: "saveheartoperations.eth",
    raised: "37,500",
    goal: "60,000",
    image: "/heart-surgery-medical-equipment-hospital.png",
  },
  {
    id: 2,
    title: "Clean Water Wells for Rural Communities",
    creator: "waterforall.eth",
    raised: "28,000",
    goal: "40,000",
    image: "/clean-water-well-rural-community-africa.png",
  },
  {
    id: 3,
    title: "Medical Equipment for Rural Clinics",
    creator: "healthforall.eth",
    raised: "33,000",
    goal: "45,000",
    image: "/medical-equipment-rural-clinic-healthcare.png",
  },
  {
    id: 4,
    title: "Medical Equipment",
    creator: "healthforall.eth",
    raised: "33,000",
    goal: "45,000",
    image: "/medical-equipment-rural-clinic-healthcare.png",
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-semibold">Be Satoshi</span>
          </Link>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Purple gradient banner */}
        <div className="w-full h-32 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 rounded-2xl" />

        {/* User section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">USUARIO</h2>
              <h1 className="text-2xl font-bold text-primary">@pAToVica</h1>
            </div>
          </div>

          {/* Achievements */}
          <div className="flex gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className={`w-16 h-16 rounded-full ${achievement.bgColor} flex items-center justify-center`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{achievement.name}</p>
                  <p className="text-xs text-muted-foreground">{achievement.level}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Puntos Donados Totales</h3>
              <p className="text-4xl font-bold text-primary">70,021</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">521</span> Puntos de esta semana
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">15</span> Causas beneficiadas
              </p>
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Donaciones recientes</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">visibles</span>
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentDonations.map((donation) => (
              <div
                key={donation.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video relative">
                  <img
                    src={donation.image || "/placeholder.svg"}
                    alt={donation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-medium text-foreground text-sm line-clamp-2">{donation.title}</h3>
                  <p className="text-xs text-muted-foreground">Created by {donation.creator}</p>
                  <p className="text-xs text-primary font-medium">
                    Raised: {donation.raised} / {donation.goal} ITK
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Balance */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Balance actual</h2>
            <p className="text-sm text-muted-foreground">esta sección solo la podés ver vos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium text-foreground">Puntos Totales</h3>
              <p className="text-4xl font-bold text-primary">77,021</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-primary font-semibold text-lg">0,521</p>
              <p className="text-sm text-muted-foreground">Puntos de hoy</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-primary font-semibold text-lg">3,521</p>
              <p className="text-sm text-muted-foreground">Puntos de esta semana</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/points">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Gestionar puntos</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
