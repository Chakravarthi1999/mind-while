"use client";
import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated background particles */}
      <motion.div
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        style={{ top: "10%", left: "10%" }}
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-1 h-1 bg-secondary/30 rounded-full"
        style={{ top: "20%", right: "20%" }}
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute w-3 h-3 bg-accent/15 rounded-full"
        style={{ bottom: "20%", left: "20%" }}
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary/25 rounded-full"
        style={{ bottom: "10%", right: "10%" }}
        animate={{
          y: [5, -20, 5],
          x: [-8, 8, -8],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />
      
      <motion.div
        className="absolute w-2.5 h-2.5 bg-secondary/20 rounded-full"
        style={{ top: "50%", left: "25%" }}
        animate={{
          y: [-8, 12, -8],
          rotate: [0, -180, -360],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute w-2 h-2 bg-accent/30 rounded-full"
        style={{ top: "30%", right: "30%" }}
        animate={{
          y: [12, -8, 12],
          x: [-6, 6, -6],
          scale: [1, 0.6, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
}
