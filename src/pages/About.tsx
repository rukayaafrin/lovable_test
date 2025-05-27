
import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Ruby on Rails', level: 88 },
    { name: 'AWS', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'Appian', level: 75 },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">My Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building 
                  scalable web applications. My journey started with a curiosity about how things 
                  work under the hood, which led me to dive deep into both frontend and backend technologies.
                </p>
                <p>
                  I specialize in React and Ruby on Rails, with extensive experience in cloud 
                  technologies, particularly AWS. I'm also skilled in working with Appian for 
                  business process management and have a strong foundation in database design and SQL.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through technical blog posts.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} />
                  <span>Your City, Country</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="mb-6 opacity-90">
                Get a detailed overview of my experience, education, and skills.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                <Download className="mr-2" size={20} />
                Download PDF
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Technical Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-4">Other Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'PostgreSQL', 'Redis', 'GraphQL', 'Jest', 'Webpack', 'Linux'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
