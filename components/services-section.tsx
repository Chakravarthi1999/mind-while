"use client";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Cloud, 
  Brain, 
  Shield 
} from "lucide-react";
import { fadeInUp, staggerContainer, cardHover3D } from "@/lib/animations";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using React, Next.js, Node.js, and modern frameworks. Progressive web apps with exceptional performance.",
    technologies: ["React", "Next.js", "Node.js"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development", 
    description: "Native and cross-platform mobile applications for iOS and Android. React Native and Flutter development with seamless user experiences.",
    technologies: ["React Native", "Flutter", "Swift"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality. Design systems, prototypes, and user research.",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Azure, and GCP. DevOps, microservices, and serverless architectures.",
    technologies: ["AWS", "Docker", "Kubernetes"],
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions using machine learning, natural language processing, and computer vision to automate and optimize business processes.",
    technologies: ["Python", "TensorFlow", "OpenAI"],
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data with advanced threat detection and prevention.",
    technologies: ["Penetration Testing", "Encryption", "Compliance"],
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            <span className="gradient-text">Our Expertise</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We deliver comprehensive software solutions across multiple domains,
            leveraging cutting-edge technologies to drive innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
              variants={fadeInUp}
              whileHover={{
                y: -20,
                rotateX: 10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
