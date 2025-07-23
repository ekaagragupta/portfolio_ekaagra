import { Code, Database, Globe, Server, Smartphone, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'from-yellow-400 to-blue-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-300 to-yellow-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Java', level: 75, color: 'from-red-400 to-orange-500' },
        { name: 'C++', level: 70, color: 'from-blue-500 to-purple-600' },
        { name: 'Go', level: 65, color: 'from-cyan-400 to-blue-500' },
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-300 to-blue-500' },
        { name: 'SASS/SCSS', level: 75, color: 'from-pink-400 to-pink-600' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-700' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-400 to-blue-700' },
        { name: 'Redis', level: 70, color: 'from-red-400 to-red-600' },
        { name: 'GraphQL', level: 75, color: 'from-pink-400 to-purple-600' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Server,
      skills: [
        { name: 'AWS', level: 80, color: 'from-orange-400 to-yellow-500' },
        { name: 'Docker', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Kubernetes', level: 70, color: 'from-blue-500 to-purple-600' },
        { name: 'Git/GitHub', level: 95, color: 'from-gray-700 to-gray-900' },
        { name: 'CI/CD', level: 75, color: 'from-green-400 to-blue-500' },
        { name: 'Linux', level: 80, color: 'from-yellow-500 to-orange-600' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 75, color: 'from-cyan-400 to-blue-500' },
        { name: 'Flutter', level: 70, color: 'from-blue-400 to-cyan-500' },
        { name: 'Android (Java)', level: 65, color: 'from-green-400 to-green-600' },
        { name: 'iOS (Swift)', level: 60, color: 'from-orange-400 to-red-500' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', level: 75, color: 'from-orange-400 to-red-500' },
        { name: 'PyTorch', level: 70, color: 'from-red-400 to-orange-600' },
        { name: 'Scikit-learn', level: 80, color: 'from-blue-400 to-orange-500' },
        { name: 'Pandas', level: 85, color: 'from-purple-400 to-blue-500' },
        { name: 'NumPy', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'OpenCV', level: 70, color: 'from-green-400 to-blue-500' },
      ]
    }
  ];

  // Tech stack icons with animations
  const techIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📚' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Flutter', icon: '💙' },
    { name: 'TensorFlow', icon: '🧠' },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks
          </p>
        </div>

        {/* Animated Tech Icons */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="skill-icon flex flex-col items-center p-4 glass-card rounded-xl hover:glow-accent transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <span className="text-sm text-muted-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Programming Languages', value: '6+' },
            { label: 'Frameworks & Libraries', value: '15+' },
            { label: 'Years of Experience', value: '3+' },
            { label: 'Projects Completed', value: '20+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-4 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
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

export default Skills;