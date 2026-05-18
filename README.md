# 🏛️ L'Art & La Matière | GUERLAIN Cinematic Experience

A premium, design-forward digital flagship showcase built to capture the timeless sophistication of **Maison Guerlain's Haute Parfumerie** collection. 

This project redefines modern brand storytelling by merging high-end editorial typography with a hardware-accelerated, responsive cinematic introduction and immersive audio controls.

---

## ✨ Features

* **🎥 Contrast-Optimized Cinematic Intro**: Full-screen black-and-white intro video (`intro.mp4`) that uses GPU acceleration (`translate3d`) and WebKit contrast-preservation (`image-rendering`) to guarantee ultra-sharp rendering on all modern screens.
* **🔊 Smart Audio Entry Overlay**: A sleek, elegant, full-screen **Guerlain Brand Overlay** that gracefully solves modern browser autoplay blocks. If unmuted audio is blocked initially, the overlay prompts the user with a single click, instantly activating the full high-fidelity sound.
* **🖤 Premium Editorial Design**: Sleek glassmorphism headers, micro-animating visualizer columns, and beautifully structured product grids displaying iconic fragrances.
* **🧪 Olfactory Note Selector**: An interactive and immersive raw material presentation detailing ingredients (Rose Damascena, Tonka, Vanilla, Néroli) with smooth, state-driven animations.
* **📱 Desktop & Mobile Responsive**: Tailored from the ground up to render exquisitely across all modern screen sizes and high-DPI displays.

---

## 🛠️ Tech Stack

* **Core**: Next.js 15 (App Router), React 19
* **Styling**: Tailwind CSS (v4) & Custom Vanilla CSS Tokens
* **Typography**: Luxury Google Fonts Integration (Playfair Display & Inter)
* **Assets**: High-fidelity B&W Cinematic video and custom product photography mockups

---

## 🚀 Getting Started

To run this premium cinematic experience locally, follow these simple steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the flagship site live.

---

## 💎 Advanced Technical Implementations

> [!NOTE]
> **Audio Playback Flow**: Browsers block unmuted autoplay on initial load. We implemented an automatic unmuted autoplay query. If blocked, the application displays a stunning, semi-transparent **Guerlain Monogram Overlay** asking you to `Enter the Experience`. Clicking this captures user activation and starts unmuted playback instantly. On subsequent loads within the active session, the site autoplays unmuted directly!

> [!TIP]
> **Video Sharpness Resolution**: Standard browsers scale large video elements using default bilinear interpolation, which causes blurring on high-density screens. We bypassed this by applying custom CSS image contrast overrides (`-webkit-optimize-contrast` / `crisp-edges`) and hardware-accelerating the video layer (`transform: translate3d(0, 0, 0)`), yielding razor-sharp, crisp display quality identical to the source.
