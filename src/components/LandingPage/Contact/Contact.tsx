"use client";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
    urgency: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-b from-background to-secondary/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black/80 mb-4">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your political communications? Connect with our
            strategic team for a discreet consultation.
          </p>
        </div>

        <div className="grid gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black/90 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black/90 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-black/90 mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40"
                    placeholder="Campaign, Office, or Organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black/90 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40"
                    placeholder="(+880) 15000-00000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="urgency"
                  className="block text-sm font-medium text-black/90 mb-2"
                >
                  Consultation Type
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40"
                >
                  <option value="standard">Standard Consultation</option>
                  <option value="urgent">Urgent Matter</option>
                  <option value="crisis">Crisis Support</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black/90 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/60 rounded-lg focus:outline-none focus:ring-0 focus:shadow-lg focus:shadow-primary/40 resize-none"
                  placeholder="Please describe your communications needs or current situation..."
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Security Notice */}
                <div className="bg-primary/20 border border-primary/20 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-black/90">
                      Confidentiality Guaranteed
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All communications are protected by attorney-client
                    privilege where applicable and strict confidentiality
                    agreements. We understand the sensitive nature of political
                    communications.
                  </p>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full p-6 justify-center hover:cursor-pointer"
                  >
                    Request Confidential Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    By submitting this form, you agree to our confidentiality
                    protocols and terms of service.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
