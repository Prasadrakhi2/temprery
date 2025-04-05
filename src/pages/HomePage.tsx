import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typed from 'typed.js';
import { Code2, Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

function HomePage() {
    const typedRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    const companyTestimonials = [
      {
        company: "Akamai",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100",
        text: "The proctoring features of Coding Adda have a profound impact on the candidate experience. It reassures them that their skills and potential are what truly matter to us.",
        author: "K. Thomas",
        position: "Head of Talent Acquisition"
      },
      {
        company: "Microsoft",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100",
        text: "Coding Adda has revolutionized our hiring process. The platform's comprehensive assessment tools help us identify top talent efficiently.",
        author: "M. Johnson",
        position: "Technical Recruiting Manager"
      },
      {
        company: "Google",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100",
        text: "We've seen a significant improvement in our technical hiring success rate since partnering with Coding Adda. Their platform is exceptional.",
        author: "R. Smith",
        position: "Engineering Director"
      }
    ];
  
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ['Master the Art of Coding', 'Become a Tech Wizard', 'Code. Create. Conquer.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => 
        prev === companyTestimonials.length - 1 ? 0 : prev + 1
      );
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => 
        prev === 0 ? companyTestimonials.length - 1 : prev - 1
      );
    };
  
    const companyLogos = [
      'Google', 'Microsoft', 'Facebook', 'Amazon', 'GitHub', 'IBM', 'Oracle', 'Netflix'
    ];
  
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
  
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <motion.section
          style={{ opacity }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span ref={typedRef}></span>
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Start Coding
            </motion.button>
          </div>
        </motion.section>
  
        {/* Company Logos */}
        <div className="py-16 bg-gray-800/50">
          <div className="flex space-x-12 animate-scroll">
            {companyLogos.concat(companyLogos).map((logo, index) => (
              <span
                key={index}
                className="text-gray-400 whitespace-nowrap text-xl font-semibold"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
  
        {/* Developer Skills Platform */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUpVariants}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Developer Skills Platform
                </h2>
                <p className="text-gray-400 mb-8">
                  Over 26 million developers have joined Coding Adda to level up their skills and land their dream job!
                </p>
                <motion.button 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Coding Adda Community
                </motion.button>
              </motion.div>
              
              <motion.div
                variants={fadeInUpVariants}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
                  alt="Coding"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </section>
  
        {/* Company Testimonials */}
        <section className="py-24 bg-gray-900/80 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="container mx-auto px-6 relative">
            <motion.h2
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              Loved by companies of all sizes and<br />
              developers from all backgrounds
            </motion.h2>
  
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={currentTestimonial}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.img
                  src={companyTestimonials[currentTestimonial].logo}
                  alt={companyTestimonials[currentTestimonial].company}
                  className="h-16 mx-auto mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  "{companyTestimonials[currentTestimonial].text}"
                </motion.p>
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <span className="font-semibold">
                    {companyTestimonials[currentTestimonial].author}
                  </span>
                  <span className="text-gray-400">
                    {companyTestimonials[currentTestimonial].position}
                  </span>
                </motion.div>
              </motion.div>
  
              <motion.button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>
  
              <div className="flex justify-center space-x-2 mt-8">
                {companyTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="py-24 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <motion.h2
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              What Our Students Say
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeInUpVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "Coding Adda helped me master modern web development and land my dream job at a top tech company."
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
  
        {/* Footer */}
        {/* <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUpVariants}>
                <div className="flex items-center space-x-2 mb-6">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <span className="text-xl font-bold">Coding Adda</span>
                </div>
                <p className="text-gray-400">
                  Empowering developers worldwide to achieve their coding dreams.
                </p>
              </motion.div>
              
              {['Quick Links', 'Community', 'Resources'].map((section) => (
                <motion.div key={section} variants={fadeInUpVariants}>
                  <h3 className="font-semibold mb-4">{section}</h3>
                  <ul className="space-y-2">
                    {['Link 1', 'Link 2', 'Link 3'].map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gray-400">© 2024 Coding Adda. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </footer> */}
      </div>
    );
  }

  export default HomePage;