
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cloud } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Full Stack Developer crafting digital experiences with modern technologies
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in">
              Passionate about building scalable web applications using React, Ruby on Rails, AWS, and more.
              Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-lg font-medium border-2 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What I Do</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I specialize in building end-to-end solutions using cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Code className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Frontend Development</h3>
              <p className="text-slate-600">React, TypeScript, Tailwind CSS</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Database className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Backend Development</h3>
              <p className="text-slate-600">Ruby on Rails, SQL, API Design</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Cloud className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cloud & DevOps</h3>
              <p className="text-slate-600">AWS, Appian, CI/CD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
