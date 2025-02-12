import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Laptop, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Laptop className="w-6 h-6" />,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Linux', level: 85 }
    ]
  }
];

export function SkillsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Code className="w-8 h-8" />
              Skills & Expertise
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}