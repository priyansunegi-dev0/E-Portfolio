import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Users, Coffee } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        {/* Profile Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Profile Summary</h2>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-gray-300 leading-relaxed text-lg text-center">
             Aspiring full-stack developer and Computer Science and Engineering student at Graphic Era Hill University, currently diving deep into the MERN stack (MongoDB, Express.js, React, Node.js). Passionate about building real-world web applications and eager to apply technical skills and creative problem-solving to impactful software projects. Actively learning, contributing to open-source, and sharing insights through blogs and mentoring peers. Committed to continuous growth and staying updated with the latest trends in the ever-evolving tech landscape.


            </p>
          </div>
        </motion.div>

        {/* Learnings Section - Commented out for future use */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Current Learnings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'React',
                description: 'Learning advanced React concepts including custom hooks, context patterns, and performance optimization',
                progress: 30
              },
              {
                title: 'Node.js & Express',
                description: 'Building robust backend APIs with Node.js, Express, and database integration',
                progress: 60
              },
              {
                title: 'MongoDB & Database Design',
                description: 'Understanding NoSQL databases, schema design, and data modeling best practices',
                progress: 75
              },
               
            ].map((learning, index) => (
              <div key={learning.title} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{learning.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{learning.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Progress</span>
                    <span className="text-blue-400">{learning.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${learning.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Courses and Certifications - Commented out for future use */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Courses & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Completed Courses</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Full Stack Web Development',
                    provider: 'Apna College',
                    status: 'In Progress',
                    year: '2025'
                  },
                  {
                    title: 'React - The Complete Guide',
                    provider: 'Apna College',
                    status: 'In Progress',
                    date: '2025'
                  },
                  {
                    title: 'Java Algorithms and Data Structures',
                    provider: 'freeCodeCamp',
                    status: 'In Progress',
                    date: '2024'
                  },
                  {
                    title: 'Responsive Web Design',
                    provider: 'freeCodeCamp',
                    status: 'Completed',
                    date: '2023'
                  }
                ].map((course, index) => (
                  <div key={course.title} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{course.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{course.provider} • {course.date}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Basic Java Programming Fundamentals',
                    provider: 'LetsUpgrade',
                    year: '2024',
                    verified: true
                  },
                  {
                    title: 'Solutions Challenge Participation',
                    provider: 'Google Developers Groups on Campus',
                    year: '2025',
                    verified: true
                  },
                  {
                    title: 'Certificate of Recognition',
                    provider: 'Shiksha',
                    date: '2025',
                    verified: true
                  },
                  {
                    title: 'Interenship of Java Programming',
                    provider: 'CODTECH IT SOLUTIONS',
                    date: '2024',
                    verified: true
                  }
                ].map((cert, index) => (
                  <div key={cert.title} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{cert.title}</h4>
                      {cert.verified && (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{cert.provider} • {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Achievements - Commented out for future use */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Speaker Panelist',
                description: 'Honored to have been a speaker panelist in the live webinar hosted by Shiksha.com , streamed on Zoom and Instagram Live.It was a fantastic opportunity to connect with an engaging audience and discuss academics, courses, and campus life.',
                icon: '🎓',
                category: 'Professional'
              },
              {
                title: 'Innovation',
                description: 'Selected for pitiching our idea infront of angel investors under the guidance of mentors ',
                icon: '🚀',
                category: 'Technical'
              },
              {
                title: 'Featured on Shiksha.com',
                description: 'Featured on shiksha platform along with my story',
                icon: '💡',
                category: 'Proessional'
              },
              {
                title: 'Team Collaboration',
                description: 'Successfully collaborated on multiple group projects and presentations',
                icon: '🤝',
                category: 'Teamwork'
              },
              {
                title: 'Connectify',
                description: 'real-time video conferencing and collaboration platform',
                icon: '🎓',
                category: 'Programming'
              }
            ].map((achievement, index) => (
              <div key={achievement.title} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 p-1">
              <div className="aspect-square rounded-[20px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                  YN
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm an aspiring full-stack developer with a strong passion for building digital experiences that are both functional and impactful. My journey into web development started with a curiosity for how the web works, and it's quickly grown into a dedication to mastering the craft of creating user-centric applications.
              </p>
              <p>
                I'm currently focused on learning the MERN stack (MongoDB, Express.js, React, Node.js) and sharpening my skills in JavaScript, TypeScript, and modern web development practices. I enjoy building real-world projects to apply what I learn and often contribute to open-source whenever I can
              </p>
              <p>
               Beyond coding, I love diving into new technologies, collaborating with other developers, and sharing my learning through blogs, tutorials, and community discussions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
       
      </div>
    </div>
  );
}