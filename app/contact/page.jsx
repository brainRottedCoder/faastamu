"use client"
import React, { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Linkedin, Send, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you'd send the form data to a server here.
    // For this example, we just simulate success after a delay.
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/amu_faast_official/",
      handle: "@faast.amu",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/faast-amu",
      handle: "faast-amu",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "amu.faast.official@gmail.com",
      link: "mailto:amu.faast.official@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 76518 46537",
      link: "tel:+91 76518 46537"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Aligarh Muslim University, Aligarh, UP",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect with <span className="text-gradient">FAAST</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions? Want to collaborate? We love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Social Links - Featured Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Follow Us</span> on Social Media
              </h2>
              <p className="text-gray-400 mb-6">
                We would love to connect — reach out to us through our social handles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:scale-105 hover:glow-cyan transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <social.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-cyan-400 text-lg">{social.name}</p>
                      <p className="text-sm text-gray-400">{social.handle}</p>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-panel rounded-xl p-6 hover:scale-105 hover:glow-cyan transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-gray-300 hover:text-cyan-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <Send className="w-16 h-16 mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold mb-2 text-green-400">Message Sent!</h3>
                  <p className="text-gray-300">We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-400">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cyan-400">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-cyan-400">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-cyan-400">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500 min-h-[150px]"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-6 text-lg glow-cyan"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-[#0a1f3c]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <h2 className="text-4xl font-bold mb-4">
                Find Us on the Map <span className="text-gradient">🗺</span>
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                Visit us at Aligarh Muslim University
              </p>
              <p className="text-gray-400">
                Aligarh Muslim University<br />
                Aligarh, Uttar Pradesh 202002<br />
                India
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="glass-panel rounded-2xl p-4 hover:glow-cyan transition-all">
              <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14201.742689654789!2d78.08204!3d27.89786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5d3e117d6a9%3A0x6fccdc5766d0e9e5!2sAligarh%20Muslim%20University!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Aligarh Muslim University Location"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/bpZXxao3Hw7vi9iv7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white">
                  <MapPin className="mr-2" size={20} />
                  Open in Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}