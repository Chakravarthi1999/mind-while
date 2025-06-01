"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleCall = () => {
    toast({
      title: "Calendar Opening",
      description: "Redirecting to our scheduling system...",
    });
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
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
            <span className="gradient-text">Let's Build Something Amazing</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Ready to transform your business with cutting-edge technology?
            Get in touch with our team of experts and let's discuss your next project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInFromLeft}
          >
            <div>
              <motion.h3
                className="text-2xl font-bold mb-6 text-white"
                variants={fadeInUp}
              >
                Get In Touch
              </motion.h3>
              <motion.p
                className="text-slate-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                We're here to help you bring your vision to life. Whether you have a specific project in mind
                or just want to explore possibilities, we'd love to hear from you.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="flex items-center space-x-4 glass-card rounded-xl p-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-slate-300">info@mindwhile.com</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-card rounded-xl p-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-slate-300">+91 79955 26153</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-card rounded-xl p-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Visit Us</div>
                  <div className="text-slate-300">D.No 4-1583/1,Podili Road, Darsi-523247, Prakasam, Andhra Pradesh, India</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-card rounded-xl p-6 cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => window.open('https://wa.me/15551234567', '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-slate-300">+91 79955 26153</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 glass-card rounded-xl p-6 cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => window.open('https://smslogin.co/v3/', '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Send SMS</div>
                  <div className="text-slate-300">+91 79955 26153</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            {/* <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "💼", color: "from-blue-500 to-blue-600" },
                  { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
                  { name: "GitHub", icon: "🐱", color: "from-gray-700 to-gray-800" },
                  { name: "Dribbble", icon: "🏀", color: "from-pink-500 to-purple-500" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white transition-transform duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional client meeting"
              className="rounded-2xl shadow-2xl w-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            /> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-2xl p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInFromRight}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Project Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-slate-600">
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                            <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                            <SelectItem value="ai-ml-development">AI/ML Development</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Project Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-slate-600">
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k+">$100K+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Project Timeline</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-slate-600">
                            <SelectItem value="asap">ASAP (Rush)</SelectItem>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6months+">6+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Project Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your project, requirements, and goals..."
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  
                  {/* <Button
                    type="button"
                    variant="outline"
                    onClick={scheduleCall}
                    className="flex-1 py-4 glass-card text-white border-white/20 hover:bg-white/10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Call
                  </Button> */}
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
