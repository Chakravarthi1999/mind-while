"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with advanced product management, real-time inventory tracking, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web App",
    metrics: {
      users: "50K+",
      revenue: "$2M+"
    },
    color: "bg-blue-100 text-blue-800"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication, real-time transactions, and advanced financial analytics.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    technologies: ["React Native", "Firebase", "Blockchain"],
    category: "Mobile App",
    metrics: {
      downloads: "100K+",
      rating: "4.9"
    },
    color: "bg-emerald-100 text-emerald-800"
  },
  {
    title: "AI Analytics Platform",
    description: "Intelligent business analytics platform leveraging machine learning to provide predictive insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    technologies: ["Python", "TensorFlow", "AWS"],
    category: "AI/ML",
    metrics: {
      accuracy: "95%",
      efficiency: "40%"
    },
    color: "bg-purple-100 text-purple-800"
  },
  {
    title: "IoT Smart Home System",
    description: "Comprehensive smart home automation system with voice control, energy optimization, and seamless device integration.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    technologies: ["IoT", "Arduino", "Flutter"],
    category: "IoT",
    metrics: {
      devices: "500+",
      savings: "30%"
    },
    color: "bg-amber-100 text-amber-800"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Explore our portfolio of successful projects that showcase our expertise
            in delivering innovative software solutions across various industries.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-64 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.color}`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-slate-400 text-sm capitalize">
                          {key === 'users' ? 'Active Users' : 
                           key === 'revenue' ? 'Revenue Generated' :
                           key === 'downloads' ? 'Downloads' :
                           key === 'rating' ? 'App Store Rating' :
                           key === 'accuracy' ? 'Prediction Accuracy' :
                           key === 'efficiency' ? 'Efficiency Increase' :
                           key === 'devices' ? 'Connected Devices' :
                           key === 'savings' ? 'Energy Savings' : key}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        {/* <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-card text-white border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
