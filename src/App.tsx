import React from 'react';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ProjectsPage } from './pages/projects';
import { EducationPage } from './pages/education';
import { SkillsPage } from './pages/skills';
import { BlogPage } from './pages/blog';
import { ContactPage } from './pages/contact';

function App() {
  const [currentSection, setCurrentSection] = React.useState('home');

  // Update current section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSectionId = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) { // 100px offset for better UX
          currentSectionId = section.id;
        }
      });

      setCurrentSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} />
      <main className="flex-1">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="education">
          <EducationPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="blog">
          <BlogPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;