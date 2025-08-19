"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = ["Messages", "Discourses", "Agendas", "Storylines", "Framing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 1000); // Half the transition duration for fade out/in effect
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={"/images/heroBg.jpg"}
          alt="Government Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/35 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl md:max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-6 md:mb-8 leading-tight">
            Shaping Political{" "}
            <span className="relative inline-block text-primary min-w-max">
              <span className="invisible">{words[1]}</span>
              <span
                className={`absolute top-0 left-0 text-primary transition-all duration-700 ease-in-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </span>{" "}
            That Matter
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-xl md:max-w-3xl">
            Strategic communications that build trust, influence perception, and
            drive meaningful change in the political landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#contact">
              <Button className="bg-primary px-6 py-4 sm:py-6 hover:cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105">
                Transform Your Message
                <ArrowRight />
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                className="px-6 py-4 sm:py-6 border-2 border-primary bg-transparent text-white hover:bg-white/50 hover:cursor-pointer transition-all duration-500"
              >
                Crisis Support Available
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/20">
            <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mb-4">
              Trusted by Political Leaders Across the Nation
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-gray-400">
              <span className="text-xs sm:text-sm">Confidential</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Strategic</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Results-Driven</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary-foreground/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
