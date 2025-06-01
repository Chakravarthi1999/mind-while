"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, staggerContainer, fadeInScale } from "@/lib/animations";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgroundImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // Modern tech workspace
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // Code on screens
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // Creative workspace
    "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // Modern office
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"  // Team collaboration
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [1.1, 1, 1, 1.1]
            }}
            transition={{
              duration: 4,
              delay: index * 4,
              repeat: Infinity,
              repeatDelay: (backgroundImages.length - 1) * 4,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-transparent to-slate-900/60" />
          </motion.div>
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20 opacity-60" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg rotate-45"
          animate={{
            y: [10, -15, 10],
            rotate: [45, 225, 45],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-accent/20 rounded-full"
          animate={{
            y: [-5, 15, -5],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500/20 rounded-lg rotate-12"
          animate={{
            rotate: [12, 192, 12],
            scale: [1, 0.7, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">Transform Ideas</span>
            <br />
            <span className="text-white drop-shadow-2xl">Into Digital Reality</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg"
            variants={fadeInUp}
          >
            We craft cutting-edge software solutions that propel businesses into the future.
            From AI-powered applications to scalable cloud platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 animate-glow"
              onClick={scrollToContact}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats/Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4" variants={fadeInScale}>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">50+</div>
              <div className="text-white/80 font-medium">Projects Delivered</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4" variants={fadeInScale}>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">200+</div>
              <div className="text-white/80 font-medium">Happy Clients</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4" variants={fadeInScale}>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">3+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4" variants={fadeInScale}>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">20+</div>
              <div className="text-white/80 font-medium">Team Members</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
