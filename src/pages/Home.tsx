import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import VideoIntroBox from '../components/VideoIntroBox';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Priyansu Negi
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
               
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                A Computer Science and Engineering student at Graphic Era Hill
                University. I'm passionate about technology and curious to
                explore opportunities in full stack development
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/prriiyansu"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" />
              </a>
            </div>

          </div>

           
          {/* Right Content - Video Intro */}
          <div className="flex justify-center lg:justify-end">
            <VideoIntroBox />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-blue-500/8 to-purple-500/3 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Home;