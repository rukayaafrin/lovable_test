
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cloud, Heart, Flower, Sparkles, Star, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in flex items-center justify-center gap-2">
              <Sparkles className="text-pink-500" size={24} />
              Full Stack Developer crafting beautiful digital experiences ✨
              <Star className="text-purple-500" size={20} />
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in">
              Passionate about building elegant web applications using React, Ruby on Rails, AWS, and more.
              Let's create something magical together! 💫
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Code className="mr-2" size={20} />
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-full font-medium border-2 border-pink-300 hover:border-pink-500 hover:text-pink-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2" size={20} />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-200 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <Heart className="absolute top-32 right-1/4 text-pink-300 animate-pulse" size={24} />
        <Flower className="absolute bottom-32 left-1/3 text-purple-300 animate-pulse" size={20} />
        <Sparkles className="absolute top-1/3 right-1/3 text-rose-300 animate-pulse" size={18} />
        <Star className="absolute bottom-1/3 right-1/4 text-pink-400 animate-pulse" size={16} />
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
              <Zap className="text-pink-500" size={32} />
              What I Do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I specialize in building end-to-end solutions with a touch of creativity and elegance 🌸
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-pink-200 group-hover:to-rose-200 transition-colors shadow-lg">
                <Code className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Frontend Development</h3>
              <p className="text-slate-600">React, TypeScript, Tailwind CSS</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors shadow-lg">
                <Database className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Backend Development</h3>
              <p className="text-slate-600">Ruby on Rails, SQL, API Design</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-rose-200 group-hover:to-purple-200 transition-colors shadow-lg">
                <Cloud className="text-rose-600" size={32} />
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
