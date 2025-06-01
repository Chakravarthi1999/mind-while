export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const hoverLift = {
  whileHover: { 
    y: -10, 
    transition: { type: "spring", stiffness: 300 } 
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  }
};

export const cardHover3D = {
  whileHover: {
    rotateX: 10,
    rotateY: 5,
    y: -20,
    transition: { type: "spring", stiffness: 300 }
  }
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.5)",
      "0 0 40px rgba(99, 102, 241, 0.8)",
      "0 0 20px rgba(99, 102, 241, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
