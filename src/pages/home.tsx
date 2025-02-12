import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Phone as Python, Database, Code2, Brain, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

const FloatingIcon = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
    }}
    className="absolute hidden md:block"
  >
    {children}
  </motion.div>
);

export function HomePage() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerOffset = 64;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const journeyItems = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      year: '2022 - 2026',
      title: 'B.Tech in Computer Science',
      subtitle: 'Delhi Technical Campus',
      description: 'Specializing in AI and Machine Learning'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      year: '2023 - Present',
      title: 'Python Developer',
      subtitle: 'Tech Solutions Inc.',
      description: 'Building scalable applications and automation tools'
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      year: '2023',
      title: 'Hackathon Winner',
      subtitle: 'National Tech Festival',
      description: 'First place for AI-based healthcare solution'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingIcon delay={0}>
              <Python className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-primary/20 absolute top-1/4 left-1/4" />
            </FloatingIcon>
            <FloatingIcon delay={1}>
              <Code2 className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-primary/20 absolute top-1/3 right-1/4" />
            </FloatingIcon>
            <FloatingIcon delay={2}>
              <Database className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-primary/20 absolute bottom-1/3 left-1/3" />
            </FloatingIcon>
            <FloatingIcon delay={3}>
              <Brain className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-primary/20 absolute bottom-1/4 right-1/3" />
            </FloatingIcon>
          </div>

          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1)_0%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
          </div>
          
          <div className="container px-4 mx-auto relative">
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6 lg:space-y-8">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl" />
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/10 transform hover:rotate-6 transition-transform duration-300">
                    <img
                      src="https://i.postimg.cc/7hHW2S05/Whats-App-Image-2025-01-29-at-20-22-31-37005f98.jpg"
                      alt="Irfan Ansari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Irfan Ansari
                </span>
              </motion.h1>

              {/* Typing Animation */}
              <motion.div
                className="text-base md:text-lg lg:text-2xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    'Python Developer',
                    2000,
                    'Full-Stack Engineer',
                    2000,
                    'AI & Data Enthusiast',
                    2000,
                    'Web Scraping Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-medium"
                />
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center gap-3 md:gap-4 lg:gap-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { icon: <Github className="w-4 md:w-5 h-4 md:h-5" />, color: "hover:bg-gray-700", link: "https://github.com/TechWithIfn" },
                  { icon: <Linkedin className="w-4 md:w-5 h-4 md:h-5" />, color: "hover:bg-blue-600", link: "https://www.linkedin.com/in/irfan-ansari04m/" },
                  { icon: <Instagram className="w-4 md:w-5 h-4 md:h-5" />, color: "hover:bg-pink-600", link: "https://www.instagram.com/irfan_04m/" }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 shadow-lg
                          hover:shadow-xl hover:border-white/40 transition-all duration-300 ${social.color}
                          hover:text-white group relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {social.icon}
                      </Button>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="px-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="rounded-full px-6 md:px-8 py-4 md:py-6 h-auto text-base md:text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                    hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl
                    hover:shadow-purple-500/20 transition-all duration-300 text-white border-0"
                >
                  View My Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-background border-t">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
              >
                My Journey
              </motion.h2>

              <div className="space-y-12">
                {journeyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 relative"
                  >
                    {/* Timeline line */}
                    {index !== journeyItems.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                    
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-lg text-primary">{item.subtitle}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}