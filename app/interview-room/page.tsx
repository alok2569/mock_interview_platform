"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Video, VideoOff, Mic, MicOff, Monitor, MessageSquare, Phone, Users, ArrowLeft, Clock } from "lucide-react"

export default function InterviewRoomPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [chatMessage, setChatMessage] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const mockPartner = {
    name: "Emily Zhang",
    role: "Senior Frontend Developer",
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">Interview Session</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>{formatTime(sessionTime)}</span>
            </div>
            <Badge variant="secondary" className="bg-green-600">
              Live
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Video Section */}
          <div className="lg:col-span-3 space-y-4">
            {/* Main Video */}
            <Card className="bg-gray-800 border-gray-700 h-2/3">
              <CardContent className="p-0 h-full relative">
                <div className="bg-gray-700 h-full rounded-lg flex items-center justify-center relative">
                  <div className="text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-blue-600">EZ</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{mockPartner.name}</h3>
                    <p className="text-gray-400">{mockPartner.role}</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">Interviewer</Badge>
                  </div>
                  {!isVideoOn && (
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                      <VideoOff className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Your Video (Picture-in-Picture) */}
            <Card className="bg-gray-800 border-gray-700 h-1/3">
              <CardContent className="p-0 h-full relative">
                <div className="bg-gray-700 h-full rounded-lg flex items-center justify-center relative">
                  <div className="text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarFallback className="bg-green-600">You</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-gray-400">You (Interviewee)</p>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      You
                    </Badge>
                  </div>
                  {!isVideoOn && (
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                      <VideoOff className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-4">
            {/* Interview Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Session Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-gray-400">Type</div>
                  <div className="font-medium">Technical Interview</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Role</div>
                  <div className="font-medium">Frontend Developer</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="font-medium">{formatTime(sessionTime)}</div>
                </div>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="bg-gray-800 border-gray-700 flex-1">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  <div className="text-sm">
                    <span className="text-blue-400 font-medium">Emily:</span>
                    <span className="ml-2">Hi! Ready to start the interview?</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-green-400 font-medium">You:</span>
                    <span className="ml-2">Yes, I'm ready!</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Type a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white resize-none"
                    rows={2}
                  />
                  <Button size="sm" className="w-full">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Controls */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant={isVideoOn ? "default" : "destructive"}
                  size="icon"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>

                <Button
                  variant={isAudioOn ? "default" : "destructive"}
                  size="icon"
                  onClick={() => setIsAudioOn(!isAudioOn)}
                >
                  {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>

                <Button
                  variant={isScreenSharing ? "secondary" : "outline"}
                  size="icon"
                  onClick={() => setIsScreenSharing(!isScreenSharing)}
                >
                  <Monitor className="h-5 w-5" />
                </Button>

                <Button variant="outline" size="icon" onClick={() => setShowChat(!showChat)}>
                  <MessageSquare className="h-5 w-5" />
                </Button>

                <Link href="/feedback">
                  <Button variant="destructive" className="px-6">
                    <Phone className="h-4 w-4 mr-2" />
                    End Interview
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
