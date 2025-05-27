import React, { useState } from 'react';
import { ExternalLink, Github, X, Star, Zap, Rocket } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Rails API backend.',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard. Implemented real-time inventory management and order tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Ruby on Rails', 'PostgreSQL', 'AWS S3', 'Stripe API'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      longDescription: 'Developed a Trello-like task management app with drag-and-drop functionality, real-time collaboration using WebSockets, team management, and advanced filtering options. Deployed on AWS with auto-scaling capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts and real-time data.',
      longDescription: 'Created a comprehensive analytics dashboard for business metrics visualization. Features include interactive charts, real-time data updates, custom report generation, and role-based access control.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Ruby on Rails', 'Redis', 'PostgreSQL'],
      github: 'https://github.com/yourusername/analytics-dashboard',
      demo: 'https://your-analytics-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Appian Process Automation',
      description: 'Business process automation solution using Appian platform.',
      longDescription: 'Designed and implemented automated workflows for document approval processes, reducing processing time by 60%. Integrated with external APIs and created custom UI components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Appian', 'SQL', 'REST APIs', 'JavaScript'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with video calling capabilities.',
      longDescription: 'Built a real-time messaging platform with support for text, images, and video calls. Implemented message encryption, user presence indicators, and mobile-responsive design.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Express.js', 'MongoDB'],
      github: 'https://github.com/yourusername/chat-app',
      demo: 'https://your-chat-demo.com',
      featured: true
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'Microservices architecture with centralized API gateway.',
      longDescription: 'Developed a scalable API gateway service to manage microservices communication, implement rate limiting, authentication, and request routing. Deployed using Docker containers on AWS ECS.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Docker', 'AWS ECS', 'Redis', 'PostgreSQL'],
      github: 'https://github.com/yourusername/api-gateway',
      demo: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium">
              <Star size={14} />
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <button
              onClick={() => setSelectedProject(project)}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              <Zap size={16} />
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Rocket className="text-pink-500" size={40} />
            My Projects
            <Rocket className="text-pink-500" size={40} />
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Star className="text-pink-500" size={24} />
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Zap className="text-pink-500" size={24} />
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <Rocket className="text-pink-500" size={32} />
                  {selectedProject.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Zap className="text-pink-500" size={18} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
