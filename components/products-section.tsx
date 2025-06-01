"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Calendar, ChartLine, MessageCircle, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function ProductsSection() {
  return (
    <section 
      id="products" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
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
            <span className="gradient-text">Featured Product</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Introducing our comprehensive School Management ERP - revolutionizing educational administration
            with advanced technology and intuitive design.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInFromLeft}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">SchoolERP Pro</h3>
                  <p className="text-emerald-400 font-medium">Complete Educational Management Solution</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                A comprehensive school management system designed to streamline academic operations,
                enhance communication, and improve educational outcomes through intelligent automation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  className="text-center p-4 glass-card rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-emerald-400">20+</div>
                  <div className="text-slate-400 text-sm">Schools Using</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 glass-card rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-blue-400">5K+</div>
                  <div className="text-slate-400 text-sm">Active Students</div>
                </motion.div>
              </div>
              <a href="https://staging.ourschoolerp.com/" target="_blank">
                <Button
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Explore SchoolERP Pro
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Product Features */}
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInFromRight}
          >
            {/* Dashboard Preview */}
            <motion.div
              className="glass-card rounded-2xl p-6"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
                alt="Educational technology dashboard interface"
                className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-bold mb-2">Intelligent Dashboard</h4>
              <p className="text-slate-300">Real-time analytics and insights for administrators, teachers, and parents.</p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {[
                { icon: Users, title: "Student Management", desc: "Complete student lifecycle", color: "text-blue-400" },
                { icon: Calendar, title: "Academic Planning", desc: "Curriculum & scheduling", color: "text-emerald-400" },
                { icon: ChartLine, title: "Performance Analytics", desc: "Data-driven insights", color: "text-purple-400" },
                { icon: MessageCircle, title: "Communication Hub", desc: "Seamless collaboration", color: "text-amber-400" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-card rounded-xl p-4 text-center group cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className={`${feature.color} text-2xl mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <h5 className="font-semibold mb-1">{feature.title}</h5>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
