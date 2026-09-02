"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play, MessageCircle } from "lucide-react";
import { BRAND_ASSETS } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  id: string;
  number: string;
  theme: string;
  tag: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  isWhatsAppSecondary?: boolean;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: "slide-dhara",
    number: "01",
    theme: "Dhara",
    tag: "Classical Panchakarma Therapy",
    title: "Traditional Shirodhara & Deep Nervous Rejuvenation",
    subtitle: "Rooted in authentic Kerala Ayurvedic protocols to restore mental calm, regulate Vata dosha, and support cardiovascular stability.",
    imageSrc: BRAND_ASSETS.therapies.shirodhara,
    imageAlt: "Authentic Shirodhara Ayurvedic Therapy at Omshree Sidha Hospital Kerala",
    primaryCtaText: "Book a Consultation",
    primaryCtaLink: "/patient-care/consultation",
    secondaryCtaText: "Explore Therapies",
    secondaryCtaLink: "/treatments/therapies",
  },
  {
    id: "slide-ayurveda",
    number: "02",
    theme: "Ayurveda",
    tag: "140+ Years Lineage • Est. 1880",
    title: "Ancient Kerala Healing Heritage for Modern Chronic Care",
    subtitle: "Preserving unbroken clinical wisdom from Sri Kochukutty Vaidhyar's lineage to provide individualized therapeutic care.",
    imageSrc: BRAND_ASSETS.therapies.kizhi,
    imageAlt: "Authentic Kizhi Patra Pinda Sweda Therapy at Omshree Sidha Hospital",
    primaryCtaText: "Discover Our Heritage",
    primaryCtaLink: "/about/history",
    secondaryCtaText: "Why Choose Us",
    secondaryCtaLink: "/about/why-omshree",
  },
  {
    id: "slide-hospital",
    number: "03",
    theme: "The Hospital",
    tag: "A Multi Speciality Ayurveda Hospital & Research Centre",
    title: "Omshree Sidha Hospital: Clinical Care, Inpatient Comfort",
    subtitle: "A dedicated hospital in Vayala, Kerala with 24-hour resident doctor supervision, GMP-certified pharmacy, and tailored Panchakarma regimens.",
    imageSrc: "/images/hospital/banner.png",
    imageAlt: "Omshree Sidha Hospital Campus and Clinical Environment",
    primaryCtaText: "About Our Hospital",
    primaryCtaLink: "/about",
    secondaryCtaText: "In-Patient Facilities",
    secondaryCtaLink: "/patient-care/facilities",
  },
  {
    id: "slide-heart",
    number: "04",
    theme: "Heart Care",
    tag: "Cardiovascular Speciality",
    title: "Integrative Ayurvedic Care for Heart & Cardiovascular Health",
    subtitle: "Non-invasive supportive management for Low Ejection Fraction, coronary blocks, and hypertension under experienced Ayurvedic physicians.",
    imageSrc: BRAND_ASSETS.therapies.hridBasti,
    imageAlt: "Ayurvedic Hrid Basti and Cardiovascular Management at Omshree Sidha Hospital",
    primaryCtaText: "Explore Heart Care",
    primaryCtaLink: "/conditions/cardiovascular",
    secondaryCtaText: "Hrid Basti Protocol",
    secondaryCtaLink: "/treatments/therapies/hrid-basti",
  },
  {
    id: "slide-liver-gastro",
    number: "05",
    theme: "Liver & Gastro",
    tag: "Hepatic & Digestive Health",
    title: "Specialized Management for Liver & Gastrointestinal Disorders",
    subtitle: "Holistic herbal regimens and Panchakarma for Fatty Liver, Liver Cirrhosis, IBS, Crohn's Disease, and chronic digestive imbalances.",
    imageSrc: BRAND_ASSETS.therapies.virechana,
    imageAlt: "Ayurvedic Liver and Digestive Disorder Management at Omshree Sidha Hospital",
    primaryCtaText: "Explore Liver Care",
    primaryCtaLink: "/conditions/liver",
    secondaryCtaText: "Digestive Health Hub",
    secondaryCtaLink: "/conditions/gastrointestinal",
  },
];

const AUTOPLAY_DURATION = 6500; // 6.5s per slide

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Autoplay & Progress Timer
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, nextSlide, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      aria-label="Omshree Sidha Hospital Highlights"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#402816] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image
            src={activeSlide.imageSrc}
            alt={activeSlide.imageAlt}
            fill
            sizes="100vw"
            priority={currentSlide === 0}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Refined Dark Vignette / Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2c1b0f]/90 via-[#402816]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a110a]/90 via-transparent to-[#402816]/20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full px-[4%] relative z-10 py-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                exit: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-col items-start"
            >
              {/* Tag / Category Badge (Glassmorphism) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#B4833D] animate-pulse shadow-[0_0_8px_rgba(180,131,61,0.8)]" />
                <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#F7F1E1]">
                  {activeSlide.tag}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F1E1] mb-6 leading-[1.12] tracking-tight drop-shadow-lg"
              >
                {activeSlide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="text-base sm:text-lg md:text-xl text-[#E3D8C1] mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md"
              >
                {activeSlide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Button
                  render={<Link href={activeSlide.primaryCtaLink} />}
                  size="lg"
                  className="bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 text-base font-semibold shadow-[0_0_20px_rgba(81,123,50,0.4)] border border-[#6F9940]/50 transition-all hover:-translate-y-0.5"
                >
                  {activeSlide.primaryCtaText}
                </Button>

                <Button
                  render={<Link href={activeSlide.secondaryCtaLink} />}
                  variant="outline"
                  size="lg"
                  className="border-[#E3D8C1]/30 text-[#F7F1E1] bg-[#402816]/40 hover:bg-white/10 backdrop-blur-md rounded-full px-8 h-14 text-base font-medium transition-all hover:border-[#E3D8C1]/60"
                >
                  {activeSlide.secondaryCtaText}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls - Unified Control Island at Bottom Right */}
      <div className="absolute bottom-8 right-[4%] z-20 pointer-events-auto">
        <div className="flex items-center gap-4 bg-[#2c1b0f]/60 backdrop-blur-xl border border-[#E3D8C1]/10 rounded-full px-6 py-3 shadow-2xl">
          
          {/* Slide Indicator */}
          <div className="flex items-center gap-2 border-r border-[#E3D8C1]/20 pr-4">
            <span className="font-mono text-sm md:text-base font-bold text-[#B4833D]">
              {activeSlide.number}
            </span>
            <span className="font-mono text-sm md:text-base text-[#E3D8C1]/50">
              / 05
            </span>
          </div>

          {/* Jump Dots with internal progress */}
          <div className="hidden sm:flex items-center gap-2 px-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "rounded-full transition-all duration-300 relative overflow-hidden",
                  idx === currentSlide ? "w-10 h-1.5 bg-[#E3D8C1]/20" : "w-1.5 h-1.5 bg-[#E3D8C1]/40 hover:bg-[#E3D8C1]/70"
                )}
              >
                {idx === currentSlide && (
                  <div 
                    className="absolute top-0 left-0 bottom-0 bg-[#B4833D] transition-all duration-75 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 pl-2 sm:pl-4 sm:border-l border-[#E3D8C1]/20">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause hero slider" : "Play hero slider"}
              className="h-8 w-8 rounded-full text-[#E3D8C1]/80 hover:text-[#F7F1E1] hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="h-8 w-8 rounded-full text-[#E3D8C1]/80 hover:text-[#F7F1E1] hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="h-8 w-8 rounded-full text-[#E3D8C1]/80 hover:text-[#F7F1E1] hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
