import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "February 2025",
      link: "https://drive.google.com/file/d/1anc6lww2wj2fsxsjqtTI2rLC2E1ndvCy/view?usp=drive_link",
      type: "Simulation",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Amazon Bedrock & Prompt Engineering",
      issuer: "AWS",
      date: "2024",
      link: "https://drive.google.com/file/d/1tc2L9PxulOqXnmhjhx298zd-AJMbp5hq/view?usp=drive_link",
      type: "AI/ML",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "Serverless Computing with AWS Lambda",
      issuer: "AWS",
      date: "2024",
      link: "https://drive.google.com/file/d/1JXXFIDLDbfwe20A71bIoOZ8J2xxqVxdF/view?usp=drive_link",
      type: "Serverless",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and practical assessments
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="tech-card group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Award className="w-8 h-8 text-primary" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${cert.color}`}>
                      {cert.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Issued by {cert.issuer}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="tech-card text-center">
            <h3 className="text-2xl font-bold mb-4">Complete Badge Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              Explore my full collection of technical badges and certifications
            </p>
            <Button 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              size="lg"
              asChild
            >
              <a 
                href="https://www.credly.com/users/naveen-rahul-roy/badges#credly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>View Credly Profile</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;