import { GraduationCap, Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Currently pursuing B.Tech in Computer Science Engineering with a focus on modern software development practices.'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Proficient in multiple programming languages and frameworks, constantly learning and adapting to new technologies.'
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Passionate about solving complex problems through analytical thinking and innovative solutions.'
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Always exploring cutting-edge technologies and their practical applications in real-world scenarios.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and a passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              My Journey in Computer Science
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                As a B.Tech Computer Science Engineering student, I'm deeply passionate about 
                the transformative power of technology. My academic journey has equipped me with 
                a strong foundation in algorithms, data structures, software engineering principles, 
                and modern development methodologies.
              </p>
              <p className="leading-relaxed">
                Beyond the classroom, I actively engage in hands-on projects that challenge me 
                to apply theoretical knowledge to practical problems. I believe in continuous 
                learning and staying updated with the latest technological advancements in the 
                ever-evolving field of computer science.
              </p>
              <p className="leading-relaxed">
                My goal is to leverage technology to create innovative solutions that make a 
                meaningful impact. Whether it's developing web applications, exploring artificial 
                intelligence, or contributing to open-source projects, I'm always eager to push 
                the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-accent transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-primary bg-clip-text text-transparent mb-4">
                  <highlight.icon size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Details */}
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Bachelor of Technology - Computer Science Engineering
                </h4>
                <p className="text-primary font-medium">2021 - 2025 (Expected)</p>
                <p className="text-muted-foreground mt-2">
                  [University Name] • CGPA: [Your CGPA]
                </p>
                <div className="mt-4">
                  <h5 className="font-semibold text-foreground mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems',
                      'Computer Networks',
                      'Operating Systems',
                      'Software Engineering',
                      'Machine Learning',
                      'Web Development',
                      'Object-Oriented Programming'
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;