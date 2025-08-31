import { Wallet, Coins, Heart, ArrowLeft, User, FileImage, Video, Receipt, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Mock data for the cause detail
const causeData = {
  id: 1,
  title: "Heart Surgery for 'Luna' in La Plata",
  creator: "salvemoscorazones.eth",
  image: "/heart-surgery-medical-equipment-hospital.png",
  raised: 37500,
  goal: 50000,
  progress: 75,
  description: `Luna is a 7-year-old girl from La Plata, Argentina, who was born with a congenital heart defect that requires immediate surgical intervention. Her family has been struggling to afford the specialized cardiac surgery that could save her life.

The procedure requires advanced medical equipment and a team of specialized cardiac surgeons. The estimated cost includes pre-operative care, the surgery itself, post-operative monitoring, and rehabilitation. Every donation brings Luna one step closer to a healthy future.

This cause has been verified by local medical professionals and the hospital administration. All funds will be directly transferred to the medical facility to ensure transparency and proper use of donations.`,
  recentDonations: [
    { donor: "A Satoshi", amount: 5000, timeAgo: "2 hours ago" },
    { donor: "Anonymous Benefactor", amount: 2500, timeAgo: "5 hours ago" },
    { donor: "Crypto Philanthropist", amount: 10000, timeAgo: "1 day ago" },
    { donor: "Heart Helper", amount: 1500, timeAgo: "1 day ago" },
    { donor: "Medical Supporter", amount: 3000, timeAgo: "2 days ago" },
    { donor: "Anonymous Donor", amount: 7500, timeAgo: "3 days ago" },
  ],
  proofOfImpact: [
    { type: "image", title: "Medical Records", thumbnail: "/medical-records-document.png" },
    { type: "image", title: "Hospital Verification", thumbnail: "/hospital-verification-letter.png" },
    { type: "video", title: "Doctor Interview", thumbnail: "/doctor-in-hospital-interview.png" },
    { type: "image", title: "Family Photo", thumbnail: "/young-girl-with-family-photo.png" },
    { type: "receipt", title: "Medical Expenses", thumbnail: "/medical-bill-receipt.png" },
    { type: "image", title: "Hospital Equipment", thumbnail: "/cardiac-surgery-equipment.png" },
  ],
}

export default function CauseDetailPage() {
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
            <a href="/explore" className="text-foreground hover:text-accent transition-colors font-medium">
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

      {/* Back Navigation */}
      <div className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore Causes
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Cause Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={causeData.image || "/placeholder.svg"}
                  alt={causeData.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Title and Creator */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-foreground text-balance leading-tight">{causeData.title}</h1>
                <p className="text-muted-foreground">
                  Created by: <span className="text-accent font-medium">{causeData.creator}</span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-4">
                <div className="relative">
                  <Progress
                    value={causeData.progress}
                    className="h-6 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-purple-600"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white drop-shadow-lg">
                      {causeData.progress}% • {causeData.raised.toLocaleString()} / {causeData.goal.toLocaleString()}{" "}
                      ITK
                    </span>
                  </div>
                </div>
              </div>

              {/* Donation Section */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Make a Donation</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="donation-amount" className="text-sm font-medium text-foreground">
                      Donation Amount (ITK)
                    </label>
                    <Input
                      id="donation-amount"
                      type="number"
                      placeholder="Enter amount..."
                      className="h-12 text-base"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground font-semibold h-12 text-base">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* About This Cause */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">About this Cause</h3>
                <div className="prose prose-sm prose-invert max-w-none">
                  {causeData.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Recent Donations */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Recent Donations</h3>
                <div className="space-y-3">
                  {causeData.recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {donation.donor} donated{" "}
                          <span className="text-accent font-semibold">{donation.amount.toLocaleString()} ITK</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{donation.timeAgo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proof of Impact */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Proof of Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Evidence and documentation stored on Filecoin for transparency
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {causeData.proofOfImpact.map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="aspect-square relative">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                        {/* Type Icon */}
                        <div className="absolute top-2 right-2 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center">
                          {item.type === "image" && <FileImage className="w-3 h-3 text-white" />}
                          {item.type === "video" && <Video className="w-3 h-3 text-white" />}
                          {item.type === "receipt" && <Receipt className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-medium text-foreground truncate">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
