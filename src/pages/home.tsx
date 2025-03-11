import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Phone as Python, Database, Code2, Brain, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

// Background particle animation component
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary/10"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            x: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
            y: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

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

// Scroll indicator component
const ScrollIndicator = () => (
  <motion.div 
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      y: [0, 10, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 3
    }}
  >
    <span className="text-sm text-primary/70 mb-2">Scroll Down</span>
    <ChevronDown className="w-6 h-6 text-primary/70" />
  </motion.div>
);

const TechBadge = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
  >
    {name}
  </motion.div>
);

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  useEffect(() => {
    // Simulate a page loading effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
      year: '2025',
      title: 'Foss Hack 2025',
      subtitle: 'Delhi Technical Campus',
      description: 'Project: GeniusTestHub'
    }
  ];

  const techSkills = ["Python", "React", "Node.js", "TensorFlow", "Django", "SQL", "AWS", "Docker"];

  // Page entry animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoaded ? (
        <motion.div
          className="min-h-screen flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <main className="flex-1">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0">
              {/* Particle Background */}
              <ParticleBackground />
              
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
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_100%)]"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1)_0%,transparent_100%)]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1)_0%,transparent_100%)]"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                />
              </div>
              
              <motion.div 
                className="container px-4 mx-auto relative"
                style={{ opacity }}
              >
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
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative mx-auto"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto relative">
                      <motion.div 
                        className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg" 
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
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
                    <motion.span 
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                      animate={{
                        backgroundPosition: ["0% center", "100% center", "0% center"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        backgroundSize: "200% auto"
                      }}
                    >
                      Irfan Ansari
                    </motion.span>
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

                  {/* Tech Skills */}
                  <motion.div
                    className="flex flex-wrap justify-center gap-2 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {techSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.5 + (index * 0.1),
                          type: "spring"
                        }}
                      >
                        <TechBadge name={skill} />
                      </motion.div>
                    ))}
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
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotate: [0, 10, 0, -10, 0]
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.7 + (index * 0.1),
                          rotate: {
                            duration: 1,
                            delay: 0.7 + (index * 0.1) + 0.5
                          }
                        }}
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        onClick={scrollToProjects}
                        className="rounded-full px-6 md:px-8 py-4 md:py-6 h-auto text-base md:text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                          hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl
                          hover:shadow-purple-500/20 transition-all duration-300 text-white border-0 relative overflow-hidden group"
                      >
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1 }}
                        />
                        View My Work
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <ScrollIndicator />
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
                    className="text-3xl font-bold text-center mb-12"
                  >
                    <motion.span
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
                      animate={{
                        backgroundPosition: ["0% center", "100% center", "0% center"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        backgroundSize: "200% auto"
                      }}
                    >
                      My Journey
                    </motion.span>
                  </motion.h2>

                  <div className="space-y-12">
                    {journeyItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex gap-6 relative"
                      >
                        {/* Timeline line */}
                        {index !== journeyItems.length - 1 && (
                          <motion.div 
                            className="absolute left-6 top-12 bottom-0 w-px"
                            style={{
                              background: "linear-gradient(to bottom, var(--color-primary) 50%, transparent 100%)"
                            }}
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: "100%", opacity: 0.2 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        )}
                        
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--color-primary), 0.2)" }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ 
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            {item.icon}
                          </motion.div>
                        </motion.div>
                        <div className="space-y-2">
                          <motion.span 
                            className="text-sm text-primary font-medium inline-block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          >
                            {item.year}
                          </motion.span>
                          <motion.h3 
                            className="text-xl font-semibold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p 
                            className="text-lg text-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            {item.subtitle}
                          </motion.p>
                          <motion.p 
                            className="text-muted-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                            viewport={{ once: true }}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </motion.div>
      ) : (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
