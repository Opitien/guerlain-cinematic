"use client";

import React, { useEffect, useRef, useState } from "react";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Lock scrolling when the intro is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Auto-play with unmuted default (browser checks policies)
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play()
        .then(() => {
          setIsMuted(false);
        })
        .catch((err) => {
          console.log("Unmuted autoplay blocked, presenting premium entry overlay...", err);
          // Show the gorgeous entry screen to prompt user activation
          setShowOverlay(true);
        });
    }

    return () => {
      // Restore scrolling on unmount
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleStartExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Transition duration is 1.2s (1200ms)
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  const toggleSound = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent triggering any parent/global window interaction handlers
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOverlay(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch((err) => {
        console.error("Failed to play unmuted video on interaction:", err);
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-[1200ms] ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Light Luxury Vignette Overlay to ensure maximum video clarity and crispness */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 z-10 pointer-events-none" />

      {/* The Luxury B&W Cinematic Video */}
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleStartExit}
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        style={{
          imageRendering: "-webkit-optimize-contrast",
          // @ts-ignore
          imageRendering: "crisp-edges",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          filter: "contrast(1.06) brightness(1.02) saturate(1.02)",
        }}
      />

      {/* Aesthetic Brand Label (cinematic watermarked label in top-left corner) */}
      <div className="absolute top-10 left-10 z-20 flex flex-col items-start gap-1 font-serif tracking-[0.25em] opacity-80 select-none">
        <span className="text-xs uppercase text-white font-sans font-light tracking-[0.3em]">
          Collection Haute Parfumerie
        </span>
        <span className="text-sm font-medium italic text-white/90">
          L'Art & La Matière
        </span>
      </div>

      {/* Luxury Sound Controller - Elegant typography + micro-animating visualizer */}
      <button
        onClick={toggleSound}
        className="group absolute top-10 right-10 z-20 flex items-center gap-3 bg-transparent border-0 text-white cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-light text-white/70 group-hover:text-white transition-colors duration-500">
          {isMuted ? "Sound On" : "Sound Off"}
        </span>
        
        {/* Sleek B&W Visualizer Columns */}
        <div className="flex items-end gap-[3px] h-3 w-5 overflow-hidden">
          <span 
            className={`w-[1px] bg-white transition-all duration-300 ${
              isMuted ? "h-[2px]" : "h-3 animate-[pulse_0.8s_infinite]"
            }`} 
          />
          <span 
            className={`w-[1px] bg-white transition-all duration-300 ${
              isMuted ? "h-[2px]" : "h-2 animate-[pulse_0.6s_infinite_150ms]"
            }`} 
          />
          <span 
            className={`w-[1px] bg-white transition-all duration-300 ${
              isMuted ? "h-[2px]" : "h-3.5 animate-[pulse_0.9s_infinite_300ms]"
            }`} 
          />
          <span 
            className={`w-[1px] bg-white transition-all duration-300 ${
              isMuted ? "h-[2px]" : "h-1.5 animate-[pulse_0.7s_infinite_450ms]"
            }`} 
          />
        </div>
      </button>

      {/* Skip Button - Minimal, Elegant, Editorial */}
      <button
        onClick={handleStartExit}
        className="group absolute bottom-10 right-10 z-20 flex flex-col items-center justify-center bg-transparent border-0 text-white cursor-pointer focus:outline-none"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-sans font-light text-white/70 group-hover:text-white transition-colors duration-500">
          Skip Intro
        </span>
        {/* Underline expanding from center */}
        <span className="mt-1 h-[1px] w-8 bg-white/30 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
      </button>

      {/* Premium Luxury Entry Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/95 transition-opacity duration-1000 ease-in-out">
          <div className="flex flex-col items-center gap-6 max-w-md text-center px-6 animate-[pulse_3s_infinite]">
            {/* Elegant Monogram */}
            <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mb-4 transition-colors duration-700 hover:border-white/30">
              <span className="font-serif font-light text-3xl text-white select-none">G</span>
            </div>
            
            {/* Brand Title */}
            <div className="flex flex-col items-center gap-2 select-none">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-sans font-light">
                Maison de Haute Parfumerie
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light italic tracking-[0.1em] text-white">
                L'Art & La Matière
              </h2>
              <span className="text-[8px] tracking-[0.6em] text-white/30 uppercase mt-1 font-sans font-light">
                GUERLAIN PARIS
              </span>
            </div>

            {/* Premium Editorial Entry Button */}
            <button
              onClick={handleStartExperience}
              className="mt-8 group relative px-10 py-4 border border-white/20 bg-transparent text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-700 rounded-none cursor-pointer focus:outline-none"
            >
              Enter the Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
