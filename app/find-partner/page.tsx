"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, ArrowLeft, Search, Clock, Star } from "lucide-react"

export default function FindPartnerPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [matchFound, setMatchFound] = useState(false)
  const [preferences, setPreferences] = useState({
    role: "",
    experience: "",
    type: "",
  })

  const handleSearch = () => {
    setIsSearching(true)
    // Simulate search process
    setTimeout(() => {
      setIsSearching(false)
      setMatchFound(true)
    }, 3000)
  }

  const mockPartner = {
    name: "Emily Zhang",
    role: "Senior Frontend Developer",
    experience: "5 years",
    rating: 4.8,
    completedSessions: 47,
    skills: ["React", "TypeScript", "System Design"],
    availability: "Available now",
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
              <span className="text-2xl font-bold text-gray-900">Find Partner</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!matchFound ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Interview Partner</h1>
              <p className="text-gray-600">
                Set your preferences and we'll match you with the perfect interview partner
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Interview Preferences</CardTitle>
                <CardDescription>Tell us what kind of interview practice you're looking for</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Interview Type</label>
                  <Select onValueChange={(value) => setPreferences({ ...preferences, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interview type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Interview</SelectItem>
                      <SelectItem value="behavioral">Behavioral Interview</SelectItem>
                      <SelectItem value="system-design">System Design</SelectItem>
                      <SelectItem value="coding">Coding Challenge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Role</label>
                  <Select onValueChange={(value) => setPreferences({ ...preferences, role: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Developer</SelectItem>
                      <SelectItem value="backend">Backend Developer</SelectItem>
                      <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                      <SelectItem value="mobile">Mobile Developer</SelectItem>
                      <SelectItem value="devops">DevOps Engineer</SelectItem>
                      <SelectItem value="product">Product Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience Level</label>
                  <Select onValueChange={(value) => setPreferences({ ...preferences, experience: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleSearch} className="w-full" disabled={isSearching}>
                  {isSearching ? (
                    <>
                      <Search className="mr-2 h-4 w-4 animate-spin" />
                      Searching for partner...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Find Interview Partner
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {isSearching && (
              <Card className="mt-6">
                <CardContent className="p-6 text-center">
                  <div className="animate-pulse">
                    <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Searching for the perfect match...</h3>
                    <p className="text-gray-600">This usually takes 30-60 seconds</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Match Found! 🎉</h1>
              <p className="text-gray-600">We found the perfect interview partner for you</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Interview Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-2xl">EZ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{mockPartner.name}</h3>
                    <p className="text-gray-600 mb-4">{mockPartner.role}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{mockPartner.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{mockPartner.rating} rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{mockPartner.completedSessions} sessions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">{mockPartner.availability}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mockPartner.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Link href="/interview-room" className="flex-1">
                        <Button className="w-full">Start Interview Now</Button>
                      </Link>
                      <Button variant="outline" onClick={() => setMatchFound(false)}>
                        Find Another Partner
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
