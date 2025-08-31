"use client"

import { ArrowLeft, Wallet, Settings, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PointsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/profile" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-semibold">volver</span>
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Points Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">tienes 115 puntos</h1>
          <p className="text-xl text-muted-foreground">Que te gustaria hacer con tus puntos?</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Send to Wallet Card */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Wallet className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Enviar a mi billetera</h3>
                <p className="text-sm text-muted-foreground">
                  Convierte tus puntos en tokens y envíalos directamente a tu wallet
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              elegí tu token
            </Button>
          </div>

          {/* Auto-donate Card */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground text-balance">
                  Seguir donando mis puntos a mis preferentes
                </h3>
                <p className="text-sm text-muted-foreground">Configura donaciones automáticas a tus causas favoritas</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              configurar
            </Button>
          </div>

          {/* Donate to Cause Card */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Donar a una causa</h3>
                <p className="text-sm text-muted-foreground">
                  Elige una causa específica y dona tus puntos directamente
                </p>
              </div>
            </div>
            <Link href="/explore">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">explorar causas</Button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Tus puntos se generan automáticamente mientras navegas y buscas
          </p>
          <p className="text-xs text-muted-foreground">1 punto = 0.001 ETH aproximadamente</p>
        </div>
      </main>
    </div>
  )
}
