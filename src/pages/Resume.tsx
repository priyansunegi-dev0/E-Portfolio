import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Mentored junior developers and established coding standards',
        'Improved application performance by 40% through optimization',
        'Collaborated with cross-functional teams to deliver features on time',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Built and maintained React applications with Node.js backends',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Developed RESTful APIs handling millions of requests daily',
        'Worked directly with clients to gather requirements and provide solutions',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Created responsive websites for various clients across industries',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized websites for SEO and performance',
        'Maintained and updated legacy codebases',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Graphic Era Hill University',
      location: 'Dehradun, Uttarakhand',
      period: '2021 - 2028',
      details: 'Currently pursuing B.Tech in Computer Science and Engineering'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Rainbow Public School',
      location: 'Dehradun, Uttarakhand',
      period: '2018 - 2019',
      details: 'CBSE Board with distinction'
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Rainbow Public School',
      location: 'Dehradun, Uttarakhand',
      period: '2020 - 2021',
      details: 'Science Stream with Physics, Chemistry, Mathematics'
    },
  ];

  const certifications = [
    'Solution Challenge by Google Developer Groups On Campus',
    'Java Programming',
    'MERN Stack Developer',
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey and achievements
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </motion.button>
        </motion.div>

        {/* Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Priyansu Negi</h2>
            <p className="text-xl text-blue-400 mb-4">Aspiring Full Stack Developer</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail size={16} />
              <span>priyansunegi0000@gmnail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone size={16} />
              <span>+91 8979452055</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>Dehradun, India</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
       

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-500 mr-4"></div>
            Education
          </h2>
          
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          ))}
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 mr-4"></div>
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <span className="text-gray-300">{cert}</span>
                <ExternalLink size={16} className="text-green-400" />
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}