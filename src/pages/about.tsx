import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Database, Terminal } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Bio Section with Image */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-75 blur-lg animate-pulse" />
                  <img
                    src="https://i.postimg.cc/7hHW2S05/Whats-App-Image-2025-01-29-at-20-22-31-37005f98.jpg"
                    alt="About Me"
                    className="relative rounded-xl w-full aspect-square object-cover"
                  />
                </div>
              </motion.div>
              <div className="w-full md:w-2/3 space-y-6">
                <h1 className="text-4xl font-bold">About Me</h1>
                <div className="prose prose-lg">
                  <p className="text-lg text-muted-foreground">
                    Hi, I'm Irfan Ansari, a passionate Python Developer and Full-Stack Engineer with a deep interest in building scalable applications and solving complex problems. With expertise in Python, Django, React.js, and Data Analytics, I strive to create efficient and user-friendly solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <Code className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground">Building end-to-end web applications using modern technologies and best practices.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Terminal className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Python Development</h3>
                <p className="text-muted-foreground">Creating robust backend systems and automation scripts with Python.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Database className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                <p className="text-muted-foreground">Analyzing and visualizing data to derive meaningful insights.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Book className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Technical Writing</h3>
                <p className="text-muted-foreground">Sharing knowledge through detailed technical articles and documentation.</p>
              </div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  year: '2023 - Present',
                  title: 'Senior Python Developer',
                  company: 'Tech Solutions Inc.',
                  description: 'Leading backend development and mentoring junior developers.'
                },
                {
                  year: '2021 - 2023',
                  title: 'Full-Stack Developer',
                  company: 'Digital Innovations Ltd.',
                  description: 'Developed and maintained web applications using React and Django.'
                },
                {
                  year: '2019 - 2021',
                  title: 'Python Developer',
                  company: 'Data Systems Corp.',
                  description: 'Built data processing pipelines and automation tools.'
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-32 flex-shrink-0 text-muted-foreground">
                    {experience.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-primary">{experience.company}</p>
                    <p className="text-muted-foreground mt-2">{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}