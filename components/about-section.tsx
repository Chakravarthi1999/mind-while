"use client";
import { motion } from "framer-motion";
import { Eye, Target, Code, Paintbrush, Settings } from "lucide-react";
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* About Content */}
          <motion.div className="space-y-8" variants={slideInFromLeft}>
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeInUp}
              >
                <span className="gradient-text">About MindWhile Enhanced</span>
              </motion.h2>
              <motion.p
                className="text-xl text-slate-300 leading-relaxed"
                variants={fadeInUp}
              >
                We are a forward-thinking software development company passionate about creating
                innovative solutions that transform businesses and improve lives through technology.
              </motion.p>
            </div>

            {/* Mission & Vision */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="glass-card rounded-2xl p-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Our Vision</h3>
                    <p className="text-slate-300">
                      To be the leading technology partner that empowers businesses to achieve
                      digital transformation through innovative, scalable, and sustainable solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Our Mission</h3>
                    <p className="text-slate-300">
                      To deliver exceptional software solutions that exceed client expectations
                      while fostering innovation, quality, and long-term partnerships.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Core Values */}
            <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
              <motion.div
                className="text-center p-4 glass-card rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                <div className="text-slate-300 font-medium">Innovation Focus</div>
              </motion.div>
              <motion.div
                className="text-center p-4 glass-card rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
                <div className="text-slate-300 font-medium">Quality Assurance</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Team Showcase */}
          <motion.div className="space-y-8" variants={slideInFromRight}>
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Modern software development team collaborating in workspace"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Team Stats */}
            <motion.div className="grid grid-cols-3 gap-4" variants={staggerContainer}>
              <motion.div
                className="text-center p-4 glass-card rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-slate-300 text-sm">Developers</div>
              </motion.div>
              <motion.div
                className="text-center p-4 glass-card rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Paintbrush className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-slate-300 text-sm">Designers</div>
              </motion.div>
              <motion.div
                className="text-center p-4 glass-card rounded-xl"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Settings className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-slate-300 text-sm">Engineers</div>
              </motion.div>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div
              className="glass-card rounded-2xl p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Awards & Recognition</h3>
              <div className="flex justify-center space-x-6">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-sm text-slate-300">Best Tech Startup 2023</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-sm text-slate-300">Innovation Award</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-3xl mb-2">🏅</div>
                  <div className="text-sm text-slate-300">Excellence in Software</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
