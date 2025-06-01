"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const techCategories = [
  {
    title: "Frontend Technologies",
    techs: [
      { name: "React", icon: "⚛️", color: "text-blue-400" },
      { name: "Vue.js", icon: "🔧", color: "text-green-400" },
      { name: "Angular", icon: "🅰️", color: "text-red-400" },
      { name: "Next.js", icon: "▲", color: "text-white" },
      { name: "TypeScript", icon: "📘", color: "text-blue-500" },
      { name: "Tailwind", icon: "🎨", color: "text-cyan-400" }
    ]
  },
  {
    title: "Backend Technologies",
    techs: [
      { name: "Node.js", icon: "🟢", color: "text-green-400" },
      { name: "Python", icon: "🐍", color: "text-yellow-400" },
      { name: "Java", icon: "☕", color: "text-orange-400" },
      { name: "Go", icon: "🐹", color: "text-blue-300" },
      { name: "Rust", icon: "🦀", color: "text-orange-500" },
      { name: "C#", icon: "#️⃣", color: "text-purple-400" }
    ]
  },
  {
    title: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: "☁️", color: "text-orange-400" },
      { name: "Docker", icon: "🐳", color: "text-blue-400" },
      { name: "Kubernetes", icon: "⚓", color: "text-blue-300" },
      { name: "GitHub", icon: "🐱", color: "text-gray-400" },
      { name: "Jenkins", icon: "🔧", color: "text-blue-500" },
      { name: "Terraform", icon: "🌍", color: "text-purple-400" }
    ]
  },
  {
    title: "Databases",
    techs: [
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
      { name: "MongoDB", icon: "🍃", color: "text-green-400" },
      { name: "Redis", icon: "🔴", color: "text-red-400" },
      { name: "MySQL", icon: "🐬", color: "text-blue-500" },
      { name: "GraphQL", icon: "📊", color: "text-pink-400" },
      { name: "Prisma", icon: "🔺", color: "text-blue-300" }
    ]
  }
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
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
            <span className="gradient-text">Technologies We Master</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We leverage cutting-edge technologies and frameworks to build robust,
            scalable solutions that drive business success.
          </motion.p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          className="space-y-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-8"
                variants={staggerContainer}
              >
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 15,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="w-20 h-20 glass-card rounded-2xl flex flex-col items-center justify-center tech-logo transition-all duration-300 group-hover:bg-white/10">
                      <div className="text-3xl mb-1">{tech.icon}</div>
                      <div className={`text-xs font-medium ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
