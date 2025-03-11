import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Code2, Brain, Briefcase, GraduationCap, Award, ExternalLink, ChevronDown, Mail, Download, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setPosition({ x: xPct, y: yPct });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered ? `rotateY(${position.x * 10}deg) rotateX(${position.y * -10}deg)` : "rotateY(0deg) rotateX(0deg)",
        transition: isHovered ? "none" : "transform 0.5s ease-out"
      }}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundPosition: `${(position.x + 0.5) * 100}% ${(position.y + 0.5) * 100}%`
          }}
        />
      )}
    </motion.div>
  );
};

// Animated section divider
const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-12 md:py-16">
    <motion.div 
      className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      initial={{ width: 0 }}
      whileInView={{ width: "50%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  </div>
);

// Interactive background grid
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] opacity-20" />
      
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(127,127,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3 + 0.1
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
            duration: Math.random() * 50 + 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: Math.random() * 400 + 100 + "px",
            height: Math.random() * 400 + 100 + "px",
            background: `radial-gradient(circle, ${
              ['rgba(96,165,250,0.03)', 'rgba(139,92,246,0.03)', 'rgba(219,39,119,0.03)'][Math.floor(Math.random() * 3)]
            } 0%, transparent 70%)`,
            filter: "blur(40px)"
          }}
        />
      ))}
    </div>
  );
};

const AnimatedCounter = ({ target, duration = 2, className }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const startValue = 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (target - startValue) + startValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);
  
  return <span ref={nodeRef} className={className}>{count}+</span>;
};

const TechSkillCard = ({ icon, name, level, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        type: "spring" 
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl"
    >
      <div className="mr-3 text-primary">{icon}</div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <div className="w-24 h-1.5 bg-white/10 rounded-full mt-1">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const GlowingButton = ({ children, className, ...props }) => (
  <motion.button
    className={`relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium overflow-hidden group ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      style={{ backgroundSize: '200% 200%' }}
    />
    <span className="relative z-10">{children}</span>
    <motion.div 
      className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
      style={{ 
        background: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)',
        filter: 'blur(20px)'
      }}
    />
  </motion.button>
);

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
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

  const techStack = [
    { icon: <Code2 className="w-5 h-5" />, name: "Python", level: 95 },
    { icon: <Brain className="w-5 h-5" />, name: "React", level: 90 },
    { icon: <Code2 className="w-5 h-5" />, name: "Django", level: 85 },
    { icon: <Brain className="w-5 h-5" />, name: "TensorFlow", level: 80 }
  ];

  // Loading animation variants
  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isLoaded ? (
        <motion.div
          className="relative min-h-screen bg-black text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background elements */}
          <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
          <BackgroundGrid />
          
          {/* Hero Section */}
          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <motion.div 
              className="container px-4 mx-auto relative"
              style={{ opacity, scale }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="w-full lg:w-2/5 flex justify-center"
                  >
                    <TiltCard className="w-full max-w-sm aspect-square rounded-2xl relative">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        {/* Profile image container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
                        <div className="absolute inset-0 backdrop-blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-purple-900/30 to-pink-900/30 opacity-70" />
                        <motion.div 
                          className="absolute inset-0"
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                          style={{
                            backgroundSize: '200% 200%',
                            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(129, 140, 248, 0.5) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.5) 0%, transparent 40%)'
                          }}
                        />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-white/10">
                          <motion.div 
                            className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-lg"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          />
                          <img
                            src="https://i.postimg.cc/7hHW2S05/Whats-App-Image-2025-01-29-at-20-22-31-37005f98.jpg"
                            alt="Irfan Ansari"
                            className="w-full h-full object-cover relative z-10 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Stats badges */}
                      <motion.div
                        className="absolute -bottom-2 -right-2 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="font-medium">
                            <AnimatedCounter target={15} duration={2} /> Projects
                          </span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute -top-2 -left-2 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-medium">
                            <AnimatedCounter target={2} duration={1.5} /> Years Exp
                          </span>
                        </div>
                      </motion.div>
                    </TiltCard>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="w-full lg:w-3/5 text-center lg:text-left"
                    variants={loadingVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Name */}
                    <motion.div variants={itemVariants} className="mb-2">
                      <motion.div 
                        className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-primary mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Welcome to my portfolio
                      </motion.div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="inline-block relative">
                          I'm{' '}
                          <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Irfan Ansari</span>
                            <motion.span 
                              className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/40 to-purple-500/40 -z-10"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                            />
                          </span>
                        </span>
                      </h1>
                    </motion.div>

                    {/* Typing Animation */}
                    <motion.div variants={itemVariants} className="mb-6">
                      <div className="text-xl sm:text-2xl font-light">
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
                          className="text-gray-300"
                        />
                      </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.p 
                      variants={itemVariants}
                      className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                    >
                      I build exceptional digital experiences with modern technologies. 
                      Specializing in Python development and AI solutions that help businesses 
                      solve complex problems with elegant code.
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div 
                      variants={itemVariants}
                      className="grid grid-cols-2 gap-3 mb-8"
                    >
                      {techStack.map((tech, index) => (
                        <TechSkillCard 
                          key={tech.name}
                          icon={tech.icon}
                          name={tech.name}
                          level={tech.level}
                          delay={0.5 + (index * 0.1)}
                        />
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <GlowingButton onClick={scrollToProjects}>
                        <span className="flex items-center gap-2">
                          View Projects <ExternalLink className="w-4 h-4" />
                        </span>
                      </GlowingButton>
                      
                      <motion.a
                        href="#contact"
                        className="px-6 py-3 rounded-xl border border-white/10 text-white font-medium bg-white/5 backdrop-blur-md flex items-center gap-2 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact Me <Mail className="w-4 h-4" />
                      </motion.a>

                      <motion.a
                        href="#resume"
                        className="px-6 py-3 rounded-xl border border-white/10 text-white font-medium bg-white/5 backdrop-blur-md flex items-center gap-2 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Resume <Download className="w-4 h-4" />
                      </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex gap-4 mt-8 justify-center lg:justify-start"
                    >
                      {[
                        { icon: <Github className="w-5 h-5" />, link: "https://github.com/TechWithIfn" },
                        { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/irfan-ansari04m/" },
                        { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/irfan_04m/" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1, rotate: [0, 10, 0, -10, 0] }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.9 + (index * 0.1),
                            rotate: { duration: 0.5, delay: 0.9 + (index * 0.1) + 0.5 }
                          }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1,
                y: [0, 10, 0]
              }}
              transition={{
                opacity: { delay: 1.5, duration: 1 },
                y: { delay: 1.5, duration: 2, repeat: Infinity }
              }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </section>

          <SectionDivider />

          {/* Journey Section */}
          <section ref={projectsRef} className="py-20 relative">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12 text-center"
                >
                  <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-primary inline-block mb-3">
                    EXPERIENCE & EDUCATION
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
                </motion.div>

                <div className="space-y-12">
                  {journeyItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-300">
                        {/* Animated gradient background */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                          style={{ 
                            backgroundSize: '200% 200%',
                            backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, purple 100%)' 
                          }}
                        />
                        
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                            <motion.div
                              animate={{ rotate: [0, 5, 0, -5, 0] }}
                              transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "loop"
                              }}
                            >
                              {item.icon}
                            </motion.div>
                          </div>
                          
                          <div className="space-y-2">
                            <span className="text-sm text-primary font-medium inline-block px-3 py-1 rounded-full bg-primary/10">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-lg text-primary/90">{item.subtitle}</p>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/30"
                animate={{ rotate: -180 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                IRFAN ANSARI
              </span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
