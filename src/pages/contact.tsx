import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@irfanansari.dev"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contact@irfanansari.dev
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    91+ 9142956500
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    New Delhi, India
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Office Hours</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p>Saturday: 10:00 AM - 2:00 PM (IST)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border bg-background resize-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}