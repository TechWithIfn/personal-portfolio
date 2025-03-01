"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Search, Code, BookOpen, Database, Cpu, Layers, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "GeniusTestHub",
    description:
      "🚀 GeniusTestHub is a comprehensive platform designed for Computer Science students and job seekers to prepare for aptitude and technical tests from top companies. It includes DSA, Aptitude, Logical Reasoning, and Coding Challenges to help users crack competitive exams.",
    image: "https://i.postimg.cc/Wpn3CKYq/Screenshot-2025-03-01-183144.png",
    tags: ["Python", "HTML/CSS", "JavaScript", "Node.js"],
    github: "https://github.com/TechWithIfn/GeniusTestHub",
    demo: "https://scintillating-pithivier-3debe4.netlify.app/",
   
  },
  {
    title: "E-commerce Price Tracker",
    description:
      "A web scraping tool that tracks product prices across multiple e-commerce platforms and notifies users of price drops.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "BeautifulSoup", "Django", "Celery"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web Scraping",
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with price alerts and portfolio management.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "WebSocket", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web Development",
  },
  {
    title: "Task Manager App",
    description: "A full-featured task management application with real-time updates and team collaboration.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Django", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web Development",
  },
  // New projects added below
  {
    title: "AI Image Generator",
    description:
      "A machine learning application that generates unique images based on text prompts using stable diffusion models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "PyTorch", "React", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "AI",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with customizable charts and real-time filtering capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["D3.js", "React", "TypeScript", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Data Analytics",
  },
  {
    title: "Smart Home IoT Hub",
    description:
      "A centralized system for managing and monitoring IoT devices in a smart home environment with automation capabilities.",
    image: "https://images.unsplash.com/photo-1558002038-bb0237f4e204?auto=format&fit=crop&w=800&q=80",
    tags: ["Raspberry Pi", "MQTT", "Node.js", "React Native"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "IoT",
  },
]

export function ProjectsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  // Updated categories to include IoT
  const categories = ["All", "Web Development", "AI", "Web Scraping", "Data Analytics", "IoT"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Function to get appropriate icon for a category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return <Code className="w-4 h-4" />
      case "AI":
        return <Cpu className="w-4 h-4" />
      case "Web Scraping":
        return <BookOpen className="w-4 h-4" />
      case "Data Analytics":
        return <Database className="w-4 h-4" />
      case "IoT":
        return <Layers className="w-4 h-4" />
      default:
        return <Rocket className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-lg text-muted-foreground">A collection of my recent work and personal projects.</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center gap-2"
                >
                  {category !== "All" && getCategoryIcon(category)}
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

