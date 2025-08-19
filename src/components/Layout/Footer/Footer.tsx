"use client";
import { Clock, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">SPINE</div>
            <p className="text-white/70 mb-6 max-w-md">
              Strategic political communications that shape narratives, build
              trust, and drive meaningful change in the political landscape.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/70">(+880) 15000-00000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/70">
                  contact@spine-comms.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/70">
                  24/7 Crisis Support Available
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white/70 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Strategic Communications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Crisis Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Media Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Digital Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Stakeholder Engagement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white/70 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-primary transition-colors"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              ©{currentYear} SPINE Political Communications. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Confidential</span>
              <span>•</span>
              <span>Strategic</span>
              <span>•</span>
              <span>Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
