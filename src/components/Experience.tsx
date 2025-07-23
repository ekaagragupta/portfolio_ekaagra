import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Developed responsive web applications using React.js and TypeScript',
        'Collaborated with cross-functional teams to implement new features',
        'Optimized application performance resulting in 30% faster load times',
        'Participated in code reviews and maintained coding standards'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      website: 'https://techsolutions.com'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      duration: 'Jan 2024 - Present',
      type: 'Part-time',
      description: [
        'Built modern, responsive user interfaces for web applications',
        'Implemented pixel-perfect designs from Figma mockups',
        'Integrated RESTful APIs and managed application state',
        'Mentored junior developers and conducted technical interviews'
      ],
      technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
      website: 'https://startupxyz.com'
    },
    {
      title: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'Remote',
      duration: 'Oct 2023 - Present',
      type: 'Volunteer',
      description: [
        'Contributed to multiple open-source projects on GitHub',
        'Fixed bugs and implemented new features for popular libraries',
        'Improved documentation and wrote comprehensive test cases',
        'Engaged with the developer community through issue discussions'
      ],
      technologies: ['Python', 'JavaScript', 'Git', 'GitHub Actions'],
      website: 'https://github.com/johndoe'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building experience through internships, projects, and contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Experience card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="glass-card p-6 rounded-xl hover:glow-accent transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium gradient-primary bg-clip-text text-transparent mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' ? 'bg-accent/20 text-accent' :
                          exp.type === 'Part-time' ? 'bg-primary/20 text-primary' :
                          'bg-secondary text-secondary-foreground'
                        }`}>
                          {exp.type}
                        </span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                          <span className="text-primary mr-2 mt-1.5 block w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;