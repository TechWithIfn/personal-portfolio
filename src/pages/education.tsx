"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, ExternalLink, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EducationPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Delhi Technical Campus",
      year: "2022 - 2026",
      description: "Specialized in AI and Machine Learning. Graduated with First Class Honours.",
      achievements: [
        "Published research paper on ML applications in healthcare",
        "Led the college coding club",
        "Won first place in hackthon",
      ],
      image: "https://i.postimg.cc/CKpJ8jVw/Delhi-Technical-Campus7-o.png",
    },
  ]

  const certifications = [
    {
      name: "Advanced Python Programming",
      issuer: "Coursera",
      date: "2020",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2021",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Summer Tranning Internship",
      issuer: "CodSoft",
      date: "Sep 2024",
      image: "https://i.postimg.cc/Hn7SGtBj/Screenshot-2024-11-08-195312.png",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "Jan 2023",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
  ]

  const openImageDialog = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setIsDialogOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0.1)" },
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Education Section */}
          <motion.section
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="flex items-center gap-3 pb-2 border-b" variants={itemVariants}>
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Education</h1>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="bg-card rounded-lg border overflow-hidden shadow-sm"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <motion.img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => openImageDialog(edu.image)}
                    />
                  </div>
                  <motion.div
                    className="p-6 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="space-y-2">
                      <motion.h2
                        className="text-2xl font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {edu.degree}
                      </motion.h2>
                      <motion.p
                        className="text-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <Badge variant="outline" className="text-muted-foreground">
                          {edu.year}
                        </Badge>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {edu.description}
                    </motion.p>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="font-semibold">Key Achievements:</h3>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="flex items-center gap-3 pb-2 border-b" variants={itemVariants}>
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Certifications</h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial="rest"
                  className="bg-card rounded-lg border overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => openImageDialog(cert.image)}
                >
                  <div className="aspect-video w-full overflow-hidden relative group">
                    <motion.img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <motion.div
                    className="p-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-primary">{cert.issuer}</p>
                    <Badge variant="outline" className="text-sm text-muted-foreground">
                      {cert.date}
                    </Badge>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-full">
            <DialogClose className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
            <div className="w-full h-full flex items-center justify-center bg-black/90 p-4">
              <img src={selectedImage || ""} alt="Certificate" className="max-w-full max-h-[80vh] object-contain" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

