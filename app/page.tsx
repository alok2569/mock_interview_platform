import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Video, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MockInterview</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Practice Interviews with
          <span className="text-blue-600"> Real People</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with interview partners worldwide. Practice technical interviews, behavioral questions, and get
          real-time feedback to ace your next job interview.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/signup">
            <Button size="lg" className="px-8 py-3">
              Start Practicing Now
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button variant="outline" size="lg" className="px-8 py-3">
              How It Works
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose MockInterview?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Random Matching</CardTitle>
              <CardDescription>
                Get matched with interview partners based on your experience level and preferred roles
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Video className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Live Video Sessions</CardTitle>
              <CardDescription>
                Conduct real-time video interviews with screen sharing and collaborative coding
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Star className="h-12 w-12 text-yellow-600 mb-4" />
              <CardTitle>Instant Feedback</CardTitle>
              <CardDescription>
                Receive detailed feedback after each session to improve your interview skills
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Mock Interviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-6 w-6" />
            <span className="text-xl font-bold">MockInterview</span>
          </div>
          <p className="text-gray-400">© 2024 MockInterview. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
