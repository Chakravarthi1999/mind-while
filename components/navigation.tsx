"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, MessageSquare, Mail, Smartphone } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginSidebarOpen, setIsLoginSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Products", id: "products" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
    { label: "Login", id: "login" }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900 border-b border-white/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src="/mindwhile_log.png" className="h-10 w-auto" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => item.id == "login" ? setIsLoginSidebarOpen(true) : scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              {/* 🔐 Login Button */}
              {/* <Button
                variant="outline"
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsLoginSidebarOpen(true)}
              >
                <LogIn className="mr-2 w-4 h-4" />
                Login
              </Button> */}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 glass-effect rounded-lg p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left py-2 text-gray-300 hover:text-primary transition-colors duration-300"
                  onClick={() => {item.id == "login" ? setIsLoginSidebarOpen(true) : scrollToSection(item.id)}}
                >
                  {item.label}
                </button>
              ))}
              {/* <button
                className="block w-full text-left py-2 text-gray-300 hover:text-primary"
                onClick={() => {
                  setIsLoginSidebarOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Login
              </button> */}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* 🧭 Sidebar Login Panel */}
      {isLoginSidebarOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-80 h-full bg-slate-800 text-white shadow-lg z-50 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Login Options</h2>
            <button onClick={() => setIsLoginSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <a href="https://bwa.mindwhile.com/login.php" target="_blank" rel="noopener noreferrer">
              <Button className="w-full justify-start gap-3 cursor-pointer bg-slate-800 text-white hover:bg-green-600 hover:text-white transition-colors duration-300">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Login
              </Button>
            </a>

            <a href="https://smslogin.co/v3/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full justify-start gap-3 cursor-pointer bg-slate-800 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Smartphone className="w-5 h-5" />
                SMS Login
              </Button>
            </a>

            <a href="https://staging.ourschoolerp.com/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full justify-start gap-3 cursor-pointer bg-slate-800 text-white hover:bg-purple-600 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                School ERP
              </Button>
            </a>
          </div>
        </motion.aside>
      )}
    </>
  );
}
