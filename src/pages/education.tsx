import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export function EducationPage() {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Delhi Technical Campus',
      year: '2022 - 2026',
      description: 'Specialized in AI and Machine Learning. Graduated with First Class Honours.',
      achievements: [
        'Published research paper on ML applications in healthcare',
        'Led the college coding club',
        'Won first place in hackthon'
      ],
      image: "https://i.postimg.cc/CKpJ8jVw/Delhi-Technical-Campus7-o.png"
    }
  ];

  const certifications = [
    {
      name: 'Advanced Python Programming',
      issuer: 'Coursera',
      date: '2020',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Udacity',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Summer Tranning Internship',
      issuer: 'CodSoft',
      date: 'Sep 2024',
      image: 'https://i.postimg.cc/Hn7SGtBj/Screenshot-2024-11-08-195312.png'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Section */}
          <section className="space-y-6">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h1>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-lg border overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold">{edu.degree}</h2>
                      <p className="text-primary">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Key Achievements:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Award className="w-6 h-6" />
              Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg border overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-primary">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
