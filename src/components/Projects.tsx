import { ExternalLink, Github, Calendar, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Features include product management, order tracking, and real-time notifications.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      type: 'Full Stack',
      duration: '3 months',
      teamSize: '3 developers',
      features: [
        'User authentication & authorization',
        'Payment gateway integration',
        'Real-time order tracking',
        'Admin dashboard with analytics',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Intelligent task management application that uses machine learning to prioritize tasks, predict completion times, and provide productivity insights.',
      image: '/projects/task-manager.jpg',
      technologies: ['Python', 'FastAPI', 'React', 'TensorFlow', 'PostgreSQL'],
      githubUrl: 'https://github.com/johndoe/ai-task-manager',
      liveUrl: 'https://ai-tasks.netlify.app',
      type: 'AI/ML',
      duration: '4 months',
      teamSize: 'Solo project',
      features: [
        'Smart task prioritization',
        'Completion time prediction',
        'Productivity analytics dashboard',
        'Natural language task creation',
        'Integration with calendar apps'
      ]
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, group chats, and video calling capabilities built with WebRTC and Socket.io.',
      image: '/projects/chat-app.jpg',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express.js', 'Redis'],
      githubUrl: 'https://github.com/johndoe/realtime-chat',
      liveUrl: 'https://chat-app-demo.herokuapp.com',
      type: 'Real-time',
      duration: '2 months',
      teamSize: '2 developers',
      features: [
        'Real-time messaging',
        'File and image sharing',
        'Group chat functionality',
        'Video/audio calling',
        'Message encryption'
      ]
    },
    {
      title: 'Cryptocurrency Portfolio Tracker',
      description: 'Comprehensive portfolio tracking application for cryptocurrency investments with real-time price updates, profit/loss calculations, and market analytics.',
      image: '/projects/crypto-tracker.jpg',
      technologies: ['Vue.js', 'Chart.js', 'CoinGecko API', 'Vuex', 'Tailwind CSS'],
      githubUrl: 'https://github.com/johndoe/crypto-tracker',
      liveUrl: 'https://crypto-portfolio-tracker.netlify.app',
      type: 'Web App',
      duration: '6 weeks',
      teamSize: 'Solo project',
      features: [
        'Real-time price tracking',
        'Portfolio performance analytics',
        'Interactive charts and graphs',
        'Price alerts and notifications',
        'Historical data analysis'
      ]
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with post scheduling, engagement tracking, and performance insights.',
      image: '/projects/social-dashboard.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js', 'Vercel'],
      githubUrl: 'https://github.com/johndoe/social-dashboard',
      liveUrl: 'https://social-media-dashboard.vercel.app',
      type: 'Dashboard',
      duration: '10 weeks',
      teamSize: '4 developers',
      features: [
        'Multi-platform integration',
        'Post scheduling and automation',
        'Engagement analytics',
        'Content calendar',
        'Team collaboration tools'
      ]
    },
    {
      title: 'Weather Forecast PWA',
      description: 'Progressive Web Application providing detailed weather forecasts with location-based services, offline functionality, and push notifications.',
      image: '/projects/weather-app.jpg',
      technologies: ['React', 'PWA', 'Service Workers', 'OpenWeather API', 'Workbox'],
      githubUrl: 'https://github.com/johndoe/weather-pwa',
      liveUrl: 'https://weather-forecast-pwa.netlify.app',
      type: 'PWA',
      duration: '4 weeks',
      teamSize: 'Solo project',
      features: [
        'Offline functionality',
        'Push notifications',
        'Location-based weather',
        '7-day forecast',
        'Weather maps and radar'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development projects and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={48} className="text-primary/50" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {project.teamSize}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1.5 block w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      className="flex-1 gradient-primary text-primary-foreground hover:opacity-90"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Want to see more projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for additional projects and contributions to open source
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90"
            >
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;