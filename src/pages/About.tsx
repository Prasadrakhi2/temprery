import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, Target, Users, Trophy } from 'lucide-react';

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const features = [
    {
      icon: Code2,
      title: "Expert-Led Curriculum",
      description: "Learn from industry experts with years of experience in top tech companies."
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your skill level and goals."
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Build real-world projects that showcase your skills to potential employers."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of developers helping each other grow."
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Earn certificates recognized by leading tech companies worldwide."
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Get personalized career guidance and job placement support."
    }
  ];


  const stats = [
    { number: "1M+", label: "Active Students" },
    { number: "500+", label: "Expert Instructors" },
    { number: "2000+", label: "Courses Available" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 relative h-[300px]">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center md:mt-12 mb-6"
            variants={fadeInUpVariants}
          >
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Coding Adda</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Empowering the next generation of developers with cutting-edge education and hands-on experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gray-800/50"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section 
        className="py-20"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeInUpVariants}
          >
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Coding Adda</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Icon className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-20 bg-gray-800/50"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeInUpVariants}
          >
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Team</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUpVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={`https://i.pravatar.cc/128?img=${i + 10}`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-400">Technical Lead</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;