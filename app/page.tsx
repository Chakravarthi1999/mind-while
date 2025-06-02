"use client";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProductsSection from "@/components/products-section";
import AboutSection from "@/components/about-section";
import TechStackSection from "@/components/tech-stack-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function Home() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // SEO optimization
    document.title = "MindWhile Enhanced - Advanced Software Development Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Transform your business with cutting-edge software development, AI solutions, and digital innovation. Expert team delivering world-class web, mobile, and cloud applications.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        {/* <TechStackSection /> */}
        <ProjectsSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
