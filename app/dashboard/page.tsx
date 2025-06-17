"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, Search, Calendar, Star, LogOut, Settings, Trophy, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const upcomingInterviews = [
    {
      id: 1,
      partner: "Alex Chen",
      role: "Senior Backend Developer",
      date: "2024-01-20",
      time: "14:00",
      type: "Technical",
      difficulty: "Medium",
      status: "confirmed",
    },
    {
      id: 2,
      partner: "Sarah Wilson",
      role: "Product Manager",
      date: "2024-01-22",
      time: "16:30",
      type: "Behavioral",
      difficulty: "Easy",
      status: "pending",
    },
  ]

  const recentFeedback = [
    {
      id: 1,
      partner: "Mike Johnson",
      rating: 4.8,
      comment: "Great technical knowledge and clear communication. Well prepared for system design questions.",
      date: "2024-01-15",
      type: "Technical",
    },
    {
      id: 2,
      partner: "Lisa Zhang",
      rating: 4.5,
      comment: "Good problem-solving approach. Could improve on explaining thought process more clearly.",
      date: "2024-01-12",
      type: "Coding",
    },
  ]

  const achievements = [
    { name: "First Interview", icon: "🎯", completed: true },
    { name: "5 Sessions", icon: "🔥", completed: true },
    { name: "High Rated", icon: "⭐", completed: true },
    { name: "10 Sessions", icon: "💪", completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MockInterview</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name || "User"}!</h1>
          <p className="text-gray-600">Ready to ace your next interview?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/find-partner">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Random Match</CardTitle>
                    <CardDescription>Get instantly matched with an interview partner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average wait time: 2-3 minutes</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/schedule">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Schedule Interview</CardTitle>
                    <CardDescription>Plan a structured interview session</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Choose date, time & difficulty</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Flexible
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">4.6</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Total Time</div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Interviews */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Upcoming Interviews
                    </CardTitle>
                    <CardDescription>Your scheduled interview sessions</CardDescription>
                  </div>
                  <Link href="/schedule">
                    <Button variant="outline" size="sm">
                      Schedule New
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {upcomingInterviews.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{interview.partner.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{interview.partner}</div>
                            <div className="text-sm text-gray-600">{interview.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">{interview.date}</div>
                            <div className="text-sm text-gray-600">{interview.time}</div>
                          </div>
                          <Badge variant="secondary">{interview.type}</Badge>
                          <Badge
                            variant={interview.status === "confirmed" ? "default" : "outline"}
                            className={interview.status === "confirmed" ? "bg-green-100 text-green-700" : ""}
                          >
                            {interview.status}
                          </Badge>
                          <Link href="/interview">
                            <Button size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No upcoming interviews scheduled</p>
                    <Link href="/schedule">
                      <Button className="mt-4">Schedule Your First Interview</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Recent Feedback
                </CardTitle>
                <CardDescription>What your interview partners said about you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-sm">{feedback.partner.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{feedback.partner}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{feedback.rating}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {feedback.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{feedback.comment}</p>
                      <div className="text-xs text-gray-500">{feedback.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Interview Skills</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Technical Knowledge</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Communication</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg text-center ${
                        achievement.completed
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div
                        className={`text-xs font-medium ${achievement.completed ? "text-green-700" : "text-gray-500"}`}
                      >
                        {achievement.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sessions completed</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Hours practiced</span>
                  <span className="font-medium">2.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average rating</span>
                  <span className="font-medium">4.7 ⭐</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
