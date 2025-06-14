"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Users, ArrowLeft, ThumbsUp, MessageSquare } from "lucide-react"

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const mockPartner = {
    name: "Emily Zhang",
    role: "Senior Frontend Developer",
  }

  const sessionDetails = {
    duration: "45 minutes",
    type: "Technical Interview",
    questions: [
      "Explain React hooks and their benefits",
      "Implement a debounce function",
      "Design a component architecture for a todo app",
      "Discuss performance optimization techniques",
    ],
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Feedback Submitted</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <ThumbsUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Feedback!</h1>
              <p className="text-gray-600">
                Your feedback helps us improve the platform and helps other users have better interview experiences.
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/find-partner">
                <Button className="w-full">Start Another Interview</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Interview Feedback</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">How was your interview session?</h1>
            <p className="text-gray-600">Your feedback helps improve the platform for everyone</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Session Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Session Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-xl bg-blue-600">EZ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{mockPartner.name}</h3>
                      <p className="text-gray-600">{mockPartner.role}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{sessionDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <Badge variant="secondary">{sessionDetails.type}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Questions Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sessionDetails.questions.map((question, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{question}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Feedback Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rate Your Experience</CardTitle>
                  <CardDescription>How would you rate your interview partner?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 ${
                          star <= rating ? "text-yellow-500" : "text-gray-300"
                        } hover:text-yellow-500 transition-colors`}
                      >
                        <Star className="h-8 w-8 fill-current" />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-sm text-gray-600">
                      {rating === 5 && "Excellent! 🌟"}
                      {rating === 4 && "Very Good! 👍"}
                      {rating === 3 && "Good 👌"}
                      {rating === 2 && "Fair 😐"}
                      {rating === 1 && "Needs Improvement 😕"}
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Written Feedback</CardTitle>
                  <CardDescription>Share your thoughts about the interview session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="What went well? What could be improved? Any specific feedback for your interview partner?"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </CardContent>
              </Card>

              <Button onClick={handleSubmit} className="w-full" disabled={rating === 0}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Submit Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
