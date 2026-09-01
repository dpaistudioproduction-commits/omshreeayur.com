"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play, MessageCircle } from "lucide-react";
import { BRAND_ASSETS } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

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
    imageSrc: BRAND_ASSETS.therapies.shirodhara,
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
      className="relative w-full min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-[#402816] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={cn(
              "absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out pointer-events-none",
              isActive ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              sizes="100vw"
              priority={index === 0}
              className={cn(
                "object-cover object-center transition-transform duration-[7000ms] ease-out",
                isActive ? "scale-105" : "scale-100"
              )}
            />
            {/* Deep Multi-Layer Earth/Kobicha Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#402816]/95 via-[#402816]/80 to-[#2c1b0f]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#402816] via-transparent to-[#402816]/40" />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-24">
        <div className="max-w-3xl">
          
          {/* Tag / Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#517B32]/40 border border-[#6F9940]/40 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-[#B4833D] animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#E3D8C1]">
              {activeSlide.tag}
            </span>
          </div>

          {/* Heading (Dramatic Serif) */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F1E1] mb-6 leading-[1.12] tracking-tight">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#E3D8C1] mb-10 leading-relaxed font-light max-w-2xl">
            {activeSlide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              render={<Link href={activeSlide.primaryCtaLink} />}
              size="lg"
              className="bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 text-base font-bold shadow-xl border border-[#6F9940]/40 transition-all transform hover:-translate-y-0.5"
            >
              {activeSlide.primaryCtaText}
            </Button>

            <Button
              render={<Link href={activeSlide.secondaryCtaLink} />}
              variant="outline"
              size="lg"
              className="border-[#E3D8C1]/40 text-[#F7F1E1] bg-[#402816]/40 hover:bg-white/10 backdrop-blur-xs rounded-full px-6 h-14 text-base font-medium transition-all"
            >
              {activeSlide.secondaryCtaText}
            </Button>
          </div>

        </div>
      </div>

      {/* Slider Controls (Bottom Bar) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-none">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
          
          {/* Slide Indicator & Progress Line */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm md:text-base font-bold text-[#B4833D]">
              {activeSlide.number} <span className="text-slate-500">/ 05</span>
            </span>

            {/* Progress line */}
            <div className="w-24 md:w-36 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B4833D] transition-all duration-75 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Jump Dots */}
            <div className="hidden sm:flex items-center gap-2 ml-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.theme}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    idx === currentSlide
                      ? "w-8 bg-[#517B32]"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause hero slider" : "Play hero slider"}
              className="h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/60 text-[#E3D8C1] hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors backdrop-blur-md"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/60 text-[#E3D8C1] hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/60 text-[#E3D8C1] hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
