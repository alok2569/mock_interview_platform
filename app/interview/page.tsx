"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Users, ArrowLeft, Clock, Play, Code, CheckCircle, XCircle, Timer, Video, Monitor } from "lucide-react"

export default function InterviewPage() {
  const [timeLeft, setTimeLeft] = useState(45 * 60) // 45 minutes in seconds
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const interviewDetails = {
    id: "INT-2024-001",
    type: "Technical Interview",
    role: "Frontend Developer",
    difficulty: "Medium",
    duration: "45 minutes",
    scheduledTime: "2:00 PM - 2:45 PM",
    date: "January 20, 2024",
  }

  const participants = [
    {
      name: "Alex Chen",
      role: "Interviewer",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      experience: "6 years",
      avatar: "AC",
      status: "online",
    },
    {
      name: "You",
      role: "Interviewee",
      title: "Frontend Developer",
      company: "Seeking opportunities",
      experience: "3 years",
      avatar: "YU",
      status: "online",
    },
  ]

  const currentQuestion = {
    title: "Implement a Debounce Function",
    description:
      "Create a debounce function that delays the execution of a function until after a specified delay has elapsed since the last time it was invoked.",
    difficulty: "Medium",
    topics: ["JavaScript", "Functions", "Closures"],
    timeLimit: "20 minutes",
    examples: [
      {
        input: "debounce(() => console.log('Hello'), 1000)",
        output: "Function that waits 1 second before executing",
      },
    ],
  }

  const testCases = [
    {
      id: 1,
      input: "debounce(fn, 100); call immediately",
      expected: "No execution",
      status: "pending",
    },
    {
      id: 2,
      input: "debounce(fn, 100); call after 150ms",
      expected: "Function executes once",
      status: "pending",
    },
    {
      id: 3,
      input: "debounce(fn, 100); multiple rapid calls",
      expected: "Function executes only once after delay",
      status: "pending",
    },
    {
      id: 4,
      input: "debounce(fn, 100); call, wait, call again",
      expected: "Function executes twice",
      status: "pending",
    },
  ]

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
              <div>
                <span className="text-2xl font-bold text-gray-900">Interview Session</span>
                <div className="text-sm text-gray-600">{interviewDetails.id}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-600">Scheduled</div>
              <div className="font-medium">{interviewDetails.scheduledTime}</div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Ready to Start
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Timer and Controls */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{formatTime(timeLeft)}</div>
                      <div className="text-sm text-gray-600">Time Remaining</div>
                    </div>
                    <Separator orientation="vertical" className="h-12" />
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={() => setIsActive(!isActive)}
                        variant={isActive ? "destructive" : "default"}
                        className="px-6"
                      >
                        {isActive ? (
                          <>
                            <Timer className="mr-2 h-4 w-4" />
                            Pause Timer
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Start Timer
                          </>
                        )}
                      </Button>
                      <Link href="/interview-room">
                        <Button className="px-6">
                          <Video className="mr-2 h-4 w-4" />
                          Join Interview
                        </Button>
                      </Link>
                      <Button variant="outline" className="px-6">
                        <Code className="mr-2 h-4 w-4" />
                        Open IDE
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Question and Test Cases */}
            <Tabs defaultValue="question" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="question">Question</TabsTrigger>
                <TabsTrigger value="testcases">Test Cases</TabsTrigger>
              </TabsList>

              <TabsContent value="question">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{currentQuestion.difficulty}</Badge>
                          <Badge variant="secondary">{currentQuestion.timeLimit}</Badge>
                          {currentQuestion.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-gray-700 leading-relaxed">{currentQuestion.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Example</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        {currentQuestion.examples.map((example, index) => (
                          <div key={index} className="space-y-2">
                            <div>
                              <span className="text-sm font-medium text-gray-600">Input:</span>
                              <code className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded">{example.input}</code>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-600">Output:</span>
                              <code className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded">{example.output}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">💡 Hints</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Consider using closures to maintain state</li>
                        <li>• Use setTimeout to implement the delay</li>
                        <li>• Remember to clear previous timeouts</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testcases">
                <Card>
                  <CardHeader>
                    <CardTitle>Test Cases</CardTitle>
                    <CardDescription>Your solution will be tested against these cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {testCases.map((testCase) => (
                        <div key={testCase.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium mb-1">Test Case {testCase.id}</div>
                            <div className="text-sm text-gray-600 mb-2">{testCase.input}</div>
                            <div className="text-sm">
                              <span className="text-gray-600">Expected: </span>
                              <code className="bg-gray-100 px-2 py-1 rounded text-xs">{testCase.expected}</code>
                            </div>
                          </div>
                          <div className="ml-4">
                            {testCase.status === "passed" && <CheckCircle className="h-6 w-6 text-green-500" />}
                            {testCase.status === "failed" && <XCircle className="h-6 w-6 text-red-500" />}
                            {testCase.status === "pending" && (
                              <div className="h-6 w-6 border-2 border-gray-300 rounded-full" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Interview Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Type</div>
                  <div className="font-medium">{interviewDetails.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Role</div>
                  <div className="font-medium">{interviewDetails.role}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <Badge variant="outline">{interviewDetails.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-medium">{interviewDetails.duration}</div>
                </div>
              </CardContent>
            </Card>

            {/* Participants */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Participants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className={participant.role === "Interviewer" ? "bg-blue-600" : "bg-green-600"}>
                          {participant.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          participant.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{participant.name}</div>
                      <div className="text-sm text-gray-600">{participant.title}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {participant.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Monitor className="mr-2 h-4 w-4" />
                  Screen Share
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="mr-2 h-4 w-4" />
                  Code Editor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  Request More Time
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
