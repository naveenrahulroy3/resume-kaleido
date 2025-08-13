import { CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "CI/CD Pipeline Development",
      description: "Built and managed CI/CD pipelines for Java applications using Jenkins",
      category: "DevOps"
    },
    {
      title: "Infrastructure Automation",
      description: "Automated infrastructure provisioning with AWS CloudFormation for dev environments",
      category: "Cloud"
    },
    {
      title: "Container Orchestration",
      description: "Deployed applications in Docker containers and managed EC2-based deployments",
      category: "Containers"
    },
    {
      title: "Testing & Quality Assurance",
      description: "Performed functional, integration, and performance testing for deployments",
      category: "Testing"
    },
    {
      title: "AWS Services Management",
      description: "Managed AWS services: ALB, EC2, S3, IAM, ASG, Route53, EBS, RDS",
      category: "Cloud"
    },
    {
      title: "Serverless Architecture",
      description: "Implemented serverless file processing with Lambda, secured via IAM and API Gateway",
      category: "Serverless"
    },
    {
      title: "Network Architecture",
      description: "Designed multi-tier VPC with NAT Gateways, private/public subnets, and security groups",
      category: "Networking"
    },
    {
      title: "Kubernetes Exploration",
      description: "Explored Kubernetes to deploy and orchestrate containers using pods and jobs",
      category: "Containers"
    },
    {
      title: "Version Control Management",
      description: "Used Git extensively for collaborative development and release versioning",
      category: "DevOps"
    },
    {
      title: "Documentation & Testing",
      description: "Created test cases and technical documentation for infrastructure workflows",
      category: "Documentation"
    }
  ];

  const categoryColors = {
    DevOps: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Containers: "bg-green-500/20 text-green-400 border-green-500/30",
    Testing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Serverless: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Networking: "bg-red-500/20 text-red-400 border-red-500/30",
    Documentation: "bg-gray-500/20 text-gray-400 border-gray-500/30"
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Relevant <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience with modern DevOps practices and cloud technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="tech-card flex items-start gap-4 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span 
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        categoryColors[exp.category as keyof typeof categoryColors]
                      }`}
                    >
                      {exp.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;