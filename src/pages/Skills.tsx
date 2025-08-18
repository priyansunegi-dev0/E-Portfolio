import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 15 },
        { name: 'JavaScript', level: 30 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 40 },
       
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 40 },
        { name: 'Express.js', level: 48 },
        { name: 'MongoDB', level: 60 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 50 },
        { name: 'Firebase', level: 40 },
        { name: 'Linux', level: 65 },
      ],
    },
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
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">{category.title}</h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What I Bring to the Table</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Problem Solving',
                description: 'I love tackling complex challenges and finding elegant solutions.',
              },
              {
                title: 'Team Collaboration',
                description: 'Strong communication skills and experience working in agile teams.',
              },
              {
                title: 'Continuous Learning',
                description: 'Always staying updated with the latest technologies and best practices.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}