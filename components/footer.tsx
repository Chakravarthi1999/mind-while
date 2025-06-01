"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Brain, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setNewsletterEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%), 
                             linear-gradient(-45deg, #ffffff 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, #ffffff 75%), 
                             linear-gradient(-45deg, transparent 75%, #ffffff 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center space-x-2">
              {/* <motion.div
                className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Brain className="h-5 w-5 text-white" />
              </motion.div> */}
              <img src="/mindwhile_log.png" className="h-20 w-auto"/>
              {/* <span className="text-2xl font-bold gradient-text">MindWhile IT Solutions</span> */}
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "LinkedIn", icon: "💼", href: "#" },
                { name: "Twitter", icon: "🐦", href: "#" },
                { name: "GitHub", icon: "🐱", href: "#" },
                { name: "Dribbble", icon: "🏀", href: "#" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps", 
                "UI/UX Design",
                "Cloud Solutions",
                "AI & ML",
                "Cybersecurity"
              ].map((service) => (
                <li key={service}>
                  <motion.button
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection('services')}
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", section: "about" },
                { label: "Our Team", section: "about" },
                { label: "Projects", section: "projects" },
                { label: "Testimonials", section: "testimonials" },
                { label: "Contact", section: "contact" }
              ].map((item) => (
                <li key={item.label}>
                  <motion.button
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.section)}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 gradient-text">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            {/* <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form> */}
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 pt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © COPYRIGHT {currentYear} MINDWHILE IT SOLUTIONS PRIVATE LIMITED – All Rights Reserved
            </div>
            <div className="flex space-x-6">
              {[
                { label: "Privacy", url: "https://sritechnologies.in/privacy-policy.html" },
                { label: "Terms & Conditions", url: "https://sritechnologies.in/terms-of-service.html" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 z-50"
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowRight className="h-6 w-6 rotate-[-90deg] mx-auto" />
      </motion.button>
    </footer>
  );
}
