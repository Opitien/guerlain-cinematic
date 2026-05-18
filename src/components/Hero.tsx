"use client";

import React, { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Background Image with slow cinematic scale-in animation */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center select-none scale-100 animate-scale-in"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      />
      
      {/* Elegant Vignette Gradient for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/75 z-10 pointer-events-none" />

      {/* Luxury Navigation Header - Sticky/Fixed Glassmorphism */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
        {/* Left Side: Collection Label (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[10px] tracking-[0.35em] text-white/60 hover:text-white transition-colors duration-300 cursor-pointer uppercase font-sans font-light">
            THE COLLECTION
          </span>
          <span className="text-[10px] tracking-[0.35em] text-white/60 hover:text-white transition-colors duration-300 cursor-pointer uppercase font-sans font-light">
            L'ATELIER
          </span>
        </div>

        {/* Center: Brand Identity */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-lg tracking-[0.4em] font-sans font-extralight text-white select-none">
            GUERLAIN
          </span>
          <span className="text-[8px] tracking-[0.6em] text-white/50 uppercase mt-0.5 font-sans font-light select-none">
            PARIS
          </span>
        </div>

        {/* Right Side: Quick Links */}
        <div className="flex items-center gap-6">
          <span className="hidden md:inline-block text-[10px] tracking-[0.35em] text-white/60 hover:text-white transition-colors duration-300 cursor-pointer uppercase font-sans font-light">
            BOUTIQUES
          </span>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex items-center gap-2 group focus:outline-none z-50 cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.35em] text-white/70 group-hover:text-white transition-colors duration-300 uppercase font-sans font-light">
              {menuOpen ? "CLOSE" : "MENU"}
            </span>
            <div className="relative w-4 h-2.5 flex flex-col justify-between items-end">
              <span className={`h-[1px] bg-white transition-all duration-300 ${menuOpen ? "absolute top-[4px] w-4 rotate-45" : "w-4"}`} />
              <span className={`h-[1px] bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-2.5"}`} />
              <span className={`h-[1px] bg-white transition-all duration-300 ${menuOpen ? "absolute top-[4px] w-4 -rotate-45" : "w-4"}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Hamburger Fullscreen Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-700 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6 pt-16">
          <a href="#collection" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl italic hover:text-white/70 transition-colors duration-300">
            L'Art & La Matière
          </a>
          <a href="#notes" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl hover:text-white/70 transition-colors duration-300">
            The Olfactory Notes
          </a>
          <a href="#craft" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl hover:text-white/70 transition-colors duration-300">
            Bespoke Artistry
          </a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl italic hover:text-white/70 transition-colors duration-300">
            Boutique Services
          </a>
          <div className="h-[1px] w-24 bg-white/20 my-6" />
          <div className="flex flex-col gap-2 font-sans text-[10px] tracking-[0.3em] text-white/50">
            <span>HAUTE PARFUMERIE SINCE 1828</span>
            <span>PARIS, FRANCE</span>
          </div>
        </div>
      </div>

      {/* Hero Typography & CTA Block - Responsive Margins and Sizing */}
      <main className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32 max-w-4xl mx-auto">
        {/* SUBTITLE */}
        <span className="text-xs md:text-sm tracking-[0.5em] text-white/75 font-sans font-extralight uppercase animate-fade-in-up [animation-delay:400ms] opacity-0 fill-mode-forwards">
          GUERLAIN
        </span>
        
        {/* TITLE - Scaled dynamically to prevent wrapping glitches on small screens */}
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-8xl font-light tracking-tight text-white italic animate-fade-in-up [animation-delay:800ms] opacity-0 fill-mode-forwards">
          L'Art & La Matière
        </h1>

        {/* REFINED BRAND STATEMENT */}
        <p className="mt-6 text-xs sm:text-sm md:text-lg tracking-[0.25em] text-white/70 font-sans font-light animate-fade-in-up [animation-delay:1200ms] opacity-0 fill-mode-forwards max-w-2xl">
          The art of fragrance, refined into emotion.
        </p>

        {/* CALL TO ACTION BUTTON */}
        <div className="mt-10 md:mt-12 animate-fade-in-up [animation-delay:1600ms] opacity-0 fill-mode-forwards">
          <a 
            href="#collection" 
            className="group inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 border border-white/20 bg-transparent text-white text-[10px] md:text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-none cursor-pointer focus:outline-none"
          >
            <span>DISCOVER THE COLLECTION</span>
          </a>
        </div>
      </main>

      {/* Hero Bottom Footer - Optimized mobile footprint */}
      <footer className="relative z-20 w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between text-white/40">
        <span className="hidden sm:inline-block text-[9px] tracking-[0.25em] font-sans font-light">
          BOUTIQUE EXCLUSIVE
        </span>
        
        {/* Scroll Indicator */}
        <a 
          href="#collection"
          className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none mx-auto sm:mx-0"
        >
          <span className="text-[9px] tracking-[0.3em] font-sans font-light group-hover:text-white transition-colors duration-300">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-8 bg-white/20 group-hover:h-12 group-hover:bg-white transition-all duration-500" />
        </a>

        <span className="hidden sm:inline-block text-[9px] tracking-[0.25em] font-sans font-light">
          EST. 1828
        </span>
      </footer>
    </div>
  );
}
