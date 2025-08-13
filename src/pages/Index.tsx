import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 Naveen Rahul Roy Unnamatla. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
