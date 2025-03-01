"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Code, BookOpen, Database, Cpu, Layers, Rocket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "GeniusTestHub",
    description:
      "🚀 GeniusTestHub is a comprehensive platform designed for Computer Science students and job seekers to prepare for aptitude and technical tests from top companies. It includes DSA, Aptitude, Logical Reasoning, and Coding Challenges to help users crack competitive exams.",
    image: "https://i.postimg.cc/Wpn3CKYq/Screenshot-2025-03-01-183144.png",
    tags: ["Python", "HTML/CSS", "JavaScript", "Node.js"],
    github: "https://github.com/TechWithIfn/GeniusTestHub",
    demo: "https://scintillating-pithivier-3debe4.netlify.app/",
    category: "AI",
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
  const [selectedCategory, setSelectedCategory] = React.useState("")

  // Updated categories, removed 'All'
  const categories = ["Web Development", "AI", "Web Scraping", "Data Analytics", "IoT"]

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects

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
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work and personal projects showcasing my skills and expertise.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              onClick={() => setSelectedCategory("")}
              className="flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1" asChild>
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
            <motion.div
              className="text-center py-16 bg-card rounded-lg border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-medium">No projects found</h3>
              <p className="text-muted-foreground mt-2 mb-4">There are no projects in this category yet.</p>
              <Button variant="outline" onClick={() => setSelectedCategory("")}>
                View all projects
              </Button>
            </motion.div>
          )}

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              More projects coming soon!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

