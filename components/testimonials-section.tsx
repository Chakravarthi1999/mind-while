"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Alex Johnson",
    position: "CEO, TechStart Inc.",
    content: "MindWhile Enhanced transformed our entire business process with their innovative software solution. The team's expertise and dedication exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Sarah Chen",
    position: "CTO, InnovateLabs",
    content: "The mobile app they developed has revolutionized how we interact with our customers. Outstanding quality and exceptional user experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Rodriguez",
    position: "Founder, DataDriven Co.",
    content: "Their AI-powered analytics platform helped us make data-driven decisions that increased our revenue by 40%. Incredible ROI and professional service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

const clientLogos = [
  "TechCorp",
  "Innovate",
  "Future.AI",
  "NexGen",
  "CloudTech"
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

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
            <span className="gradient-text">What Our Clients Say</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Don't just take our word for it. Hear from the businesses and entrepreneurs
            who have transformed their operations with our solutions.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300 font-medium">5.0</span>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.name} portrait`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-2xl font-bold mb-8 gradient-text"
            variants={fadeInUp}
          >
            Trusted by Industry Leaders
          </motion.h3>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={staggerContainer}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                className="w-32 h-16 glass-card rounded-xl flex items-center justify-center hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, opacity: 1 }}
              >
                <span className="text-xl font-bold text-white">{logo}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
