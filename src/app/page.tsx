"use client";

import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import Hero from "@/components/Hero";

type OlfactoryNote = {
  id: string;
  name: string;
  botanical: string;
  description: string;
  perfume: string;
};

const OLFACTORY_NOTES: OlfactoryNote[] = [
  {
    id: "rose",
    name: "La Rose Damascena",
    botanical: "Rosa Damascena",
    description: "Picked by hand at dawn, this majestic rose reveals a fresh, dew-kissed petals profile with honeyed undertones, sculpted for unparalleled purity.",
    perfume: "Rose Chérie",
  },
  {
    id: "vanilla",
    name: "La Gousse de Vanille",
    botanical: "Vanilla Planifolia",
    description: "An exceptional pod matured over months in shadows. It yields an intense, woody-leather warmth, deeply sensual and daringly complex.",
    perfume: "Spiritueuse Double Vanille",
  },
  {
    id: "tonka",
    name: "La Fève Tonka",
    botanical: "Dipteryx Odorata",
    description: "A dual nature of sweetness and bitterness, with almond, powdery hay, and warm tobacco facets, blending royalty with raw emotion.",
    perfume: "Tonka Impériale",
  },
  {
    id: "neroli",
    name: "Le Néroli Blanc",
    botanical: "Citrus Aurantium",
    description: "Distilled orange blossoms reflecting radiant Mediterranean light. Clean, architectural, white floral clarity with a subtle green wood bite.",
    perfume: "Néroli Outrenoir",
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [selectedNote, setSelectedNote] = useState<string>("rose");

  const handleIntroComplete = () => {
    setShowIntro(false);
    document.body.style.overflow = "unset";
  };

  const resetIntro = () => {
    setShowIntro(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  };

  const activeNote = OLFACTORY_NOTES.find((n) => n.id === selectedNote) || OLFACTORY_NOTES[0];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Schema.org JSON-LD Structured Data for Advanced Search Engine Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Brand",
                "@id": "https://guerlain-cinematic.guerlain.com/#brand",
                "name": "GUERLAIN",
                "logo": "https://guerlain-cinematic.guerlain.com/icon.png",
                "foundingDate": "1828",
                "locationCreated": {
                  "@type": "Place",
                  "name": "Paris, France"
                },
                "description": "Maison de Haute Parfumerie depuis 1828."
              },
              {
                "@type": "ProductCollection",
                "@id": "https://guerlain-cinematic.guerlain.com/#collection",
                "name": "L'Art & La Matière Collection",
                "brand": {
                  "@id": "https://guerlain-cinematic.guerlain.com/#brand"
                },
                "description": "An olfactory masterpieces collection sculpted from the rawest, rarest ingredients by Guerlain.",
                "hasPart": [
                  {
                    "@type": "Product",
                    "name": "Rose Chérie",
                    "category": "Fragrance",
                    "description": "A vibrant tribute to the queen of flowers, combined with sweet almond and powdery notes."
                  },
                  {
                    "@type": "Product",
                    "name": "Spiritueuse Double Vanille",
                    "category": "Fragrance",
                    "description": "An intoxicating woody vanilla, warm, sensual, and adventurous."
                  },
                  {
                    "@type": "Product",
                    "name": "Tonka Impériale",
                    "category": "Fragrance",
                    "description": "A sophisticated blend of sweet and bitter notes, balancing almond and tobacco."
                  }
                ]
              }
            ]
          })
        }}
      />
      {/* 1. Fullscreen Cinematic Intro Video overlay */}
      {showIntro && <IntroVideo onComplete={handleIntroComplete} />}

      {/* 2. Main Luxury Landing Page */}
      <div className="relative w-full z-20">
        
        {/* Fullscreen Hero (Visual Background + Cover Page) */}
        <Hero />

        {/* Section 1: The Collection Grid */}
        <section id="collection" className="py-24 px-6 md:py-36 md:px-12 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            {/* Editorial Title Header */}
            <div className="flex flex-col items-start gap-4 mb-20 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans font-light">
                  Haute Parfumerie
                </span>
                <h2 className="font-serif text-4xl md:text-6xl font-light italic tracking-tight text-white">
                  The Iconic Masterpieces
                </h2>
              </div>
              <p className="max-w-md text-xs md:text-sm tracking-[0.15em] text-white/60 leading-relaxed font-sans font-light">
                Sculpted from the rawest, rarest ingredients, these fragrances represent olfactory paintings, suspended in glass and emotion.
              </p>
            </div>

            {/* Grid of Fragrances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Product 1 */}
              <div className="group relative flex flex-col justify-between p-8 border border-white/10 hover:border-white/30 transition-all duration-700 bg-gradient-to-b from-neutral-950 to-black h-[500px]">
                <div>
                  <span className="text-xs font-serif italic text-white/40 group-hover:text-white/60 transition-colors duration-300">01 / L'ART</span>
                  <h3 className="mt-4 font-serif text-3xl font-light tracking-wide text-white group-hover:translate-x-2 transition-transform duration-500">
                    Rose Chérie
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-sans font-light block mt-2">
                    FLORAL & INTENSE
                  </span>
                  <p className="mt-8 text-xs tracking-wider text-white/60 leading-relaxed font-sans font-light">
                    A vibrant tribute to the queen of flowers, combined with sweet almond and powdery notes. Pure pink elegance cast in shadow.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                  <span className="text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">
                    EXPLORE FRAGRANCE
                  </span>
                  <span className="text-sm font-sans font-extralight group-hover:translate-x-1 transition-transform duration-500">→</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group relative flex flex-col justify-between p-8 border border-white/10 hover:border-white/30 transition-all duration-700 bg-gradient-to-b from-neutral-950 to-black h-[500px]">
                <div>
                  <span className="text-xs font-serif italic text-white/40 group-hover:text-white/60 transition-colors duration-300">02 / LA MATIÈRE</span>
                  <h3 className="mt-4 font-serif text-3xl font-light tracking-wide text-white group-hover:translate-x-2 transition-transform duration-500">
                    Double Vanille
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-sans font-light block mt-2">
                    AMBER & WOODY
                  </span>
                  <p className="mt-8 text-xs tracking-wider text-white/60 leading-relaxed font-sans font-light">
                    An intoxicating woody vanilla, warm, sensual, and adventurous. Dark spices meet deep, mysterious leather accords.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                  <span className="text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">
                    EXPLORE FRAGRANCE
                  </span>
                  <span className="text-sm font-sans font-extralight group-hover:translate-x-1 transition-transform duration-500">→</span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group relative flex flex-col justify-between p-8 border border-white/10 hover:border-white/30 transition-all duration-700 bg-gradient-to-b from-neutral-950 to-black h-[500px]">
                <div>
                  <span className="text-xs font-serif italic text-white/40 group-hover:text-white/60 transition-colors duration-300">03 / L'ÉQUILIBRE</span>
                  <h3 className="mt-4 font-serif text-3xl font-light tracking-wide text-white group-hover:translate-x-2 transition-transform duration-500">
                    Tonka Impériale
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-sans font-light block mt-2">
                    ORIENTAL & CRISP
                  </span>
                  <p className="mt-8 text-xs tracking-wider text-white/60 leading-relaxed font-sans font-light">
                    A sophisticated blend of sweet and bitter notes, balancing almond and tobacco with the powdery royalty of natural Tonka.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                  <span className="text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">
                    EXPLORE FRAGRANCE
                  </span>
                  <span className="text-sm font-sans font-extralight group-hover:translate-x-1 transition-transform duration-500">→</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Olfactory Notes Selector */}
        <section id="notes" className="py-24 px-6 md:py-36 md:px-12 bg-zinc-950 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            
            {/* Left side: Interactive Tab Selectors */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans font-light">
                Olfactory Palette
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white mb-8">
                Raw materials raised to an art.
              </h2>
              
              <div className="flex flex-col w-full gap-2 border-l border-white/10">
                {OLFACTORY_NOTES.map((note) => (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note.id)}
                    className="flex justify-between items-center text-left py-4 px-6 w-full group focus:outline-none transition-all duration-300"
                  >
                    <span 
                      className={`text-sm tracking-[0.2em] uppercase font-sans font-light transition-all duration-300 ${
                        selectedNote === note.id ? "text-white pl-4 border-l-2 border-white -ml-[25px]" : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {note.name.split(" ").slice(1).join(" ")}
                    </span>
                    <span className="text-xs font-serif italic text-white/30 group-hover:text-white/60">
                      {note.perfume}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Detailed presentation of selected ingredient */}
            <div className="w-full md:w-1/2 p-8 md:p-12 border border-white/5 bg-black/40 backdrop-blur-sm min-h-[350px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans font-light">
                  {activeNote.botanical}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light italic text-white mt-4">
                  {activeNote.name}
                </h3>
                <p className="mt-6 text-sm tracking-wider text-white/65 leading-relaxed font-sans font-light">
                  {activeNote.description}
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 mt-8 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase">SIGNATURE FRAGRANCE</span>
                  <span className="text-xs tracking-[0.1em] text-white uppercase font-sans mt-0.5">{activeNote.perfume}</span>
                </div>
                <button className="group border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                  <span className="text-[9px] tracking-[0.25em] uppercase font-sans font-light">REQUEST TRIAL</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Bespoke Artistry & Personalization */}
        <section id="craft" className="py-24 px-6 md:py-36 md:px-12 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Column 1: Image container with borders (Aesthetic minimal frame) */}
            <div className="relative aspect-[4/5] w-full border border-white/10 p-6 bg-gradient-to-tr from-neutral-950 via-black to-neutral-900 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="border border-white/5 w-full h-full p-8 flex flex-col justify-between items-center text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans font-light">GUERLAIN ATELIER</span>
                
                {/* Visual Insignia */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-white/30 transition-colors duration-700">
                    <span className="text-serif font-light text-2xl text-white/60">G</span>
                  </div>
                  <span className="font-serif text-2xl font-light italic text-white/90">L'Art de Flaconnage</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-sans font-light mt-2 max-w-xs">
                    HAND-TIED IN PARIS BY DAMES DE TABLE
                  </span>
                </div>

                <span className="text-[9px] tracking-[0.2em] text-white/40">100% PERSONALIZED HAUTE EDITORIAL</span>
              </div>
            </div>

            {/* Column 2: Narrative details */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans font-light mb-4">
                Personalization
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
                Your bottle, an absolute masterpiece of your own.
              </h2>
              <p className="text-sm tracking-wider text-white/60 leading-relaxed font-sans font-light mb-12">
                Elevating high-perfumery into a truly bespoke ritual. Each bottle in the collection can be dressed according to your personal desires, transforming it into a private jewel of olfactory expression.
              </p>

              {/* Accordion list */}
              <div className="flex flex-col w-full gap-8">
                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-serif text-lg font-light text-white tracking-wide">
                    The Cap Plate
                  </h3>
                  <p className="mt-2 text-xs tracking-wider text-white/50 leading-relaxed font-sans font-light">
                    Select from stunning personalized plates, including dark leather, precious natural woods, mineral stones, or customized gold-plated hand engraving.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-serif text-lg font-light text-white tracking-wide">
                    The Hand-Tied Cords & Seal
                  </h3>
                  <p className="mt-2 text-xs tracking-wider text-white/50 leading-relaxed font-sans font-light">
                    The neck of the bottle is dressed in black or silk threads, closed by a perfect lacquer wax seal, hand-sculpted in our workshops in France.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-serif text-lg font-light text-white tracking-wide">
                    Tailored Glass Engraving
                  </h3>
                  <p className="mt-2 text-xs tracking-wider text-white/50 leading-relaxed font-sans font-light">
                    Inscribe a unique date, initials, or name directly into the high-transparency heavy glass bottle to immortalize your fragrance forever.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Newsletter Subscription */}
        <section id="newsletter" className="py-24 px-6 md:py-36 md:px-12 bg-neutral-950 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans font-light mb-4">
              Boutique Invitation
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light italic tracking-tight text-white mb-6">
              Enter the world of Guerlain Parfumerie.
            </h2>
            <p className="text-xs md:text-sm tracking-widest text-white/60 font-sans font-light max-w-xl leading-relaxed mb-12">
              Subscribe to receive private invitations to new olfactory creations, bespoke atelier services, and exclusive events.
            </p>

            {/* High-end minimalist B&W Input Field */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-lg flex flex-col md:flex-row gap-4 items-stretch justify-center">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="flex-1 bg-transparent border-b border-white/20 focus:border-white text-white py-3 px-2 text-[10px] tracking-[0.25em] font-sans font-light focus:outline-none placeholder:text-white/30 transition-colors duration-500 uppercase rounded-none"
              />
              <button 
                type="submit" 
                className="group border border-white px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white hover:border-white/50 transition-all duration-500 focus:outline-none"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-light">SUBSCRIBE</span>
              </button>
            </form>
          </div>
        </section>

        {/* Section 5: Re-experience video CTA (for ease of presentation) */}
        <section className="py-12 bg-black border-t border-white/5 text-center">
          <button 
            onClick={resetIntro} 
            className="group inline-flex items-center gap-2 focus:outline-none bg-transparent cursor-pointer border border-white/10 hover:border-white/30 px-6 py-2.5 transition-all duration-500"
          >
            <span className="text-[8px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors duration-300 font-sans font-light">
              REPLAY CINEMATIC INTRO
            </span>
          </button>
        </section>

        {/* Global Editorial Footer */}
        <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-white/40">
            {/* Column 1: Identity */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-base tracking-[0.4em] font-sans font-light text-white">GUERLAIN</span>
              <span className="text-[8px] tracking-[0.25em] font-sans font-light">MAISON DE HAUTE PARFUMERIE DEPUIS 1828</span>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-[9px] tracking-[0.2em] font-sans font-light uppercase">
              <a href="#collection" className="hover:text-white transition-colors duration-300">COLLECTION</a>
              <a href="#notes" className="hover:text-white transition-colors duration-300">OLFACTORY MAP</a>
              <a href="#craft" className="hover:text-white transition-colors duration-300">BESPOKE SERVICES</a>
              <a href="https://guerlain.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">OFFICIAL SITE</a>
            </div>

            {/* Column 3: Legal & Location */}
            <div className="flex flex-col items-start md:items-end gap-1 text-[8px] tracking-[0.15em] font-sans font-light">
              <span>GUERLAIN PARIS BOUTIQUE EDITORIAL</span>
              <span>© {new Date().getFullYear()} GUERLAIN ALL RIGHTS RESERVED</span>
              <span className="mt-2 text-white/20">DEVELOPED FOR HAUTE BRAND PRESENTATION</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
