import { Wallet, Coins, Heart, Users, TreePine, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ExploreCausesPage() {
  const causes = [
    {
      id: 1,
      title: "Heart Surgery for 'Luna' in La Plata",
      creator: "salvemoscorazones.eth",
      image: "/heart-surgery-medical-equipment-hospital.png",
      raised: 37500,
      goal: 50000,
      progress: 75,
      icon: Heart,
    },
    {
      id: 2,
      title: "Clean Water Wells for Rural Communities",
      creator: "waterforall.eth",
      image: "/clean-water-well-rural-community-africa.png",
      raised: 28000,
      goal: 40000,
      progress: 70,
      icon: Users,
    },
    {
      id: 3,
      title: "Reforestation Project in Amazon Basin",
      creator: "greenearth.eth",
      image: "/amazon-rainforest-trees-reforestation.png",
      raised: 15750,
      goal: 25000,
      progress: 63,
      icon: TreePine,
    },
    {
      id: 4,
      title: "Education Scholarships for Underprivileged Youth",
      creator: "educateall.eth",
      image: "/students-studying-books-education-scholarship.png",
      raised: 42000,
      goal: 60000,
      progress: 70,
      icon: GraduationCap,
    },
    {
      id: 5,
      title: "Emergency Food Relief for Disaster Areas",
      creator: "reliefnow.eth",
      image: "/food-relief-disaster-emergency-aid.png",
      raised: 18500,
      goal: 30000,
      progress: 62,
      icon: Heart,
    },
    {
      id: 6,
      title: "Medical Equipment for Rural Clinics",
      creator: "healthforall.eth",
      image: "/medical-equipment-rural-clinic-healthcare.png",
      raised: 33000,
      goal: 45000,
      progress: 73,
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-border/50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-lg font-semibold text-foreground">Be Satoshi</div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-accent transition-colors font-medium">
              Search
            </a>
            <a
              href="/explore"
              className="text-foreground hover:text-accent transition-colors font-medium border-b-2 border-primary pb-1"
            >
              Explore Causes
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground font-semibold">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Coins className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                Impact Tokens: <span className="text-accent font-semibold">1,250 ITK</span>
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full px-6 py-16 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            Become an Anonymous Benefactor
          </h1>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto text-pretty">
            Fund causes you believe in with the Impact Tokens you've generated.
          </p>
        </div>
      </section>

      {/* Main Content - Causes Grid */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cause.image || "/placeholder.svg"}
                    alt={cause.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground text-balance leading-tight">{cause.title}</h3>

                  {/* Creator */}
                  <p className="text-sm text-muted-foreground">
                    Created by: <span className="text-accent font-medium">{cause.creator}</span>
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Progress
                      value={cause.progress}
                      className="h-3 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-purple-600"
                    />
                  </div>

                  {/* Statistics */}
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Raised: </span>
                    <span className="text-accent font-semibold">{cause.raised.toLocaleString()}</span>
                    <span> / </span>
                    <span className="font-semibold">{cause.goal.toLocaleString()} ITK</span>
                  </div>

                  {/* Donate Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base">
                    <a href={`/cause/${cause.id}`} className="w-full h-full flex items-center justify-center">
                      Donate
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Be Satoshi: Turn your attention into transparent, anonymous, and real-world impact.
          </p>
        </div>
      </footer>
    </div>
  )
}
