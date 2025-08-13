import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    cloud: {
      title: "Cloud & Infrastructure",
      skills: ["AWS EC2", "S3", "ALB", "Lambda", "Route53", "IAM", "VPC", "CloudWatch", "RDS", "EBS", "ASG"]
    },
    devops: {
      title: "DevOps Tools",
      skills: ["Jenkins", "Docker", "Kubernetes", "JFrog", "Maven", "PuTTY", "MobaXterm"]
    },
    scripting: {
      title: "Scripting & Programming",
      skills: ["Python", "Bash", "Shell Scripting", "Git", "Linux", "UNIX"]
    },
    iac: {
      title: "Infrastructure as Code",
      skills: ["AWS CLI", "CloudFormation", "Terraform", "AWS CloudFormation", "API Gateway"]
    },
    monitoring: {
      title: "Monitoring & Security",
      skills: ["CloudWatch", "IAM", "MFA", "Encryption", "SNS", "Security Groups"]
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure practices
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card text-card-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="tech-card max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill}
                className="skill-pill text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Learning</div>
          </div>
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">AWS Services</div>
          </div>
          <div className="tech-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;