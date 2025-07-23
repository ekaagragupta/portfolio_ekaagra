import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-CCP-123456',
      description: 'Demonstrated fundamental understanding of AWS Cloud services and architecture principles.',
      verifyUrl: 'https://aws.amazon.com/verification',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
      image: '/certificates/aws-ccp.png'
    },
    {
      title: 'Meta Front-End Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: 'February 2024',
      credentialId: 'META-FE-789012',
      description: 'Completed comprehensive program covering React, JavaScript, HTML/CSS, and modern frontend development.',
      verifyUrl: 'https://coursera.org/verify',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design'],
      image: '/certificates/meta-frontend.png'
    },
    {
      title: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: 'January 2024',
      credentialId: 'GOOGLE-DA-345678',
      description: 'Gained expertise in data analysis tools including SQL, R, Tableau, and data visualization techniques.',
      verifyUrl: 'https://coursera.org/verify',
      skills: ['SQL', 'R Programming', 'Tableau', 'Data Visualization'],
      image: '/certificates/google-analytics.png'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'December 2023',
      credentialId: 'MS-AZ-901234',
      description: 'Validated foundational knowledge of cloud services and Microsoft Azure platform.',
      verifyUrl: 'https://learn.microsoft.com/verify',
      skills: ['Azure', 'Cloud Computing', 'Microsoft Technologies'],
      image: '/certificates/azure-fundamentals.png'
    },
    {
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'freeCodeCamp',
      date: 'November 2023',
      credentialId: 'FCC-FS-567890',
      description: 'Completed 300-hour curriculum covering full-stack development with modern technologies.',
      verifyUrl: 'https://freecodecamp.org/certification',
      skills: ['Full Stack', 'MERN Stack', 'APIs', 'Database Design'],
      image: '/certificates/freecodecamp-fullstack.png'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'October 2023',
      credentialId: 'STANFORD-ML-234567',
      description: 'Comprehensive course on machine learning algorithms, supervised and unsupervised learning.',
      verifyUrl: 'https://coursera.org/verify',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      image: '/certificates/stanford-ml.png'
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificates & <span className="gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:glow-accent transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                    title="Verify Certificate"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Certificate Title and Issuer */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-primary font-medium mb-3">{cert.issuer}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Credential ID */}
              <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                <p className="text-sm font-mono text-foreground">{cert.credentialId}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Certificates Earned', value: '6+' },
            { label: 'Hours of Learning', value: '500+' },
            { label: 'Platforms', value: '5' },
            { label: 'Skills Validated', value: '20+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-4 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;