import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  FileJson, 
  Terminal, 
  Trophy, 
  Users, 
  BookOpen,
  Rocket,
  Brain,
  Target,
  Sparkles
} from 'lucide-react';

interface Language {
  name: string;
  icon: React.ReactNode;
  problems: number;
  level: string;
  description: string;
  color: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const languages: Language[] = [
  {
    name: 'C++',
    icon: <Code2 className="w-8 h-8" />,
    problems: 206,
    level: 'Beginner level',
    description: 'Solve C++ Practice problems online with the Practice C++ path. Answer MCQs, coding challenges, and more.',
    color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700'
  },
  {
    name: 'Python',
    icon: <Terminal className="w-8 h-8" />,
    problems: 180,
    level: 'All levels',
    description: 'Master Python programming through interactive exercises, projects, and real-world applications.',
    color: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600'
  },
  {
    name: 'SQL',
    icon: <Database className="w-8 h-8" />,
    problems: 150,
    level: 'Intermediate level',
    description: 'Learn database management and SQL queries through practical exercises and challenges.',
    color: 'bg-gradient-to-br from-green-400 via-green-500 to-emerald-600'
  },
  {
    name: 'JavaScript',
    icon: <FileJson className="w-8 h-8" />,
    problems: 190,
    level: 'All levels',
    description: 'Build modern web applications with JavaScript through interactive coding challenges.',
    color: 'bg-gradient-to-br from-purple-400 via-purple-500 to-violet-600'
  }
];

const features: Feature[] = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    title: 'Earn Certificates',
    description: 'Get recognized for your achievements with industry-recognized certificates.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: 'Community Support',
    description: 'Join a thriving community of developers to learn and grow together.'
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-400" />,
    title: 'Structured Learning',
    description: 'Follow carefully crafted learning paths designed by industry experts.'
  }
];

const stats = [
  { number: '500K+', label: 'Active Learners', icon: <Users className="w-6 h-6" /> },
  { number: '1000+', label: 'Practice Problems', icon: <Code2 className="w-6 h-6" /> },
  { number: '50+', label: 'Expert Instructors', icon: <Brain className="w-6 h-6" /> },
  { number: '100%', label: 'Job Relevant', icon: <Target className="w-6 h-6" /> }
];

function LanguageCard({ language, index }: { language: Language; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: 45 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 45 }}
      transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transform perspective-1000 hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-white/10"
    >
      <div className={`${language.color} p-8 relative overflow-hidden group`}>
        <motion.div 
          className="text-white relative z-10"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {language.icon}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
      <div className="p-6 bg-white/5">
        <motion.h3 
          className="text-2xl font-bold mb-3 text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {language.name}
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-4 min-h-[80px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          {language.description}
        </motion.p>
        <motion.div 
          className="flex items-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          <div className="flex items-center gap-1">
            <Terminal className="w-4 h-4" />
            <span>{language.problems} Problems</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            <span>{language.level}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
      animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: 45 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center transform perspective-1000 hover:shadow-xl transition-all duration-300 border border-white/10"
    >
      <motion.div 
        className="mb-6"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: { number: string; label: string; icon: React.ReactNode }; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
    >
      <motion.div 
        className="text-blue-400 mb-4 flex justify-center"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {stat.icon}
      </motion.div>
      <motion.div 
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        {stat.number}
      </motion.div>
      <motion.div 
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
}

function Learning() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 py-24">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: -50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="mb-8 relative"
            >
              <Rocket className="w-20 h-20 text-blue-400 mx-auto" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 text-blue-400/30"
              >
                <Sparkles className="w-20 h-20 mx-auto" />
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              Master Your Programming Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Choose from a wide range of programming languages and start your learning adventure with interactive exercises and real-world projects.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Learning Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Popular Programming Languages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((language, index) => (
            <LanguageCard key={language.name} language={language} index={index} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10"
          >
            Ready to Start Your Coding Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10"
          >
            Join thousands of learners who have transformed their careers through our platform.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 relative z-10"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Learning;