"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const sections = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "life", label: "Life" },
  { id: "connect", label: "Connect" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const sectionHeight = window.innerHeight;
      // Add small buffer to prevent off-by-one errors at section boundaries
      const currentIndex = Math.floor((scrollPosition + sectionHeight * 0.1) / sectionHeight);
      const clampedIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));
      setActiveSection(sections[clampedIndex].id);
    };

    // Initial check
    handleScroll();

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("scrollend", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    await fetch("https://formspree.io/f/mojjqajo", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Mobile Theme Toggle - fixed top-right, hidden on desktop */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="lg:hidden fixed top-4 right-4 z-30 flex items-center gap-2"
        aria-label="Toggle theme"
      >
        {mounted ? (
          <>
            <div className="relative w-10 h-5 rounded-full bg-foreground/20 transition-colors">
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground/50 transition-all duration-300 ${
                  theme === "dark" ? "left-0.5" : "left-[22px]"
                }`}
              />
            </div>
            <span className="text-foreground/40">
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </span>
          </>
        ) : (
          <div className="w-10 h-5" />
        )}
      </button>

      {/* Scroll Indicator - hidden on mobile */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-start gap-1">
        {/* Theme Toggle Switch */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mb-6 flex items-center gap-2 group"
          aria-label="Toggle theme"
        >
          {mounted ? (
            <div className="relative w-10 h-5 rounded-full bg-foreground/20 transition-colors">
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground/50 transition-all duration-300 ${
                  theme === "dark" ? "left-0.5" : "left-[22px]"
                }`}
              />
            </div>
          ) : (
            <div className="w-10 h-5" />
          )}
          <span className="text-foreground/40 group-hover:text-foreground/60 transition-colors">
            {mounted ? (
              theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )
            ) : (
              <div className="w-[14px] h-[14px]" />
            )}
          </span>
        </button>

        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 py-2"
          >
            {/* Dot */}
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-accent scale-125"
                  : "bg-foreground/30 group-hover:bg-foreground/50"
              }`}
            />
            {/* Label */}
            <span
              className={`text-xs transition-all duration-300 ${
                activeSection === section.id
                  ? "text-accent font-medium"
                  : "text-foreground/40 group-hover:text-foreground/60"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Container for content + sticky photo */}
      <div className="relative">
        {/* Sticky Photo - visible on desktop */}
        <div className="hidden md:block fixed right-[calc(50%-32rem+2rem)] top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/Akshay.jpg"
            alt="Akshay Menon"
            width={300}
            height={300}
            className="rounded-lg object-cover sepia-[0.1] brightness-[1.02] contrast-[0.98]"
            priority
          />
        </div>

        {/* Section 1: Intro + About */}
        <section id="about" className="h-screen snap-start flex items-center px-8 md:px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              {/* Mobile Photo */}
              <div className="md:hidden mb-4">
                <Image
                  src="/Akshay.jpg"
                  alt="Akshay Menon"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover sepia-[0.1] brightness-[1.02] contrast-[0.98]"
                  priority
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-accent mb-1 md:mb-2">
                Akshay Menon
              </h1>

              {/* Title */}
              <p className="text-sm md:text-lg text-foreground/70 mb-1 md:mb-4">
                Product | Growth | Data | Fintech
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-4 md:mb-8">
                <a
                  href="https://www.linkedin.com/in/akshay-s-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/menon_akshays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/akshay-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              {/* About Me */}
              <div>
                <h2 className="text-sm md:text-base font-bold text-accent uppercase tracking-wide mb-1 md:mb-3">
                  About
                </h2>
                <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80">
                  I work at the intersection of <span className="bg-accent/20 px-1 rounded">product, growth, and data</span> at mission driven tech companies.
                </p>
                <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80 mt-1.5 md:mt-4">
                  I believe <span className="bg-accent/20 px-1 rounded">modern, accessible, low-cost financial infrastructure</span> is fundamental to advancing society as it underpins all human productivity, and have worked in this space for the past ten years.
                </p>
              </div>

              {/* Scroll indicator - hidden on mobile */}
              <div className="hidden md:block mt-12 text-foreground/30 text-sm animate-bounce">
                ↓ scroll
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 2: Journey */}
        <section id="journey" className="h-screen snap-start flex items-center px-8 md:px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-sm md:text-base font-bold text-accent uppercase tracking-wide mb-2 md:mb-3">
                Journey
              </h2>
              <div className="space-y-2 md:space-y-4 text-xs md:text-sm">
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 text-xs">2025–present</span>
                  <span className="text-foreground/80">
                    <a href="https://sling.money/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Sling Money</a> — Leading growth product. Sling&apos;s mission is to bring everyone in the world on to an instant, low cost, fairer financial system using stablecoin technology.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 text-xs">2018–2025</span>
                  <div className="text-foreground/80">
                    <div>
                      <a href="https://wise.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Wise</a> — Built products for businesses to get paid internationally. Started as a data analyst in the debit cards team, and moved to PM later.
                    </div>
                    <div className="mt-1 text-xs text-foreground/50 space-y-0.5">
                      <div>↳ <a href="https://medium.com/wise-engineering/how-wise-built-the-worlds-first-cloud-based-card-processing-fd427b7fb92b" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Building world&apos;s first cloud based card processing</a></div>
                      <div>↳ <a href="https://medium.com/wise-engineering/measuring-transparency-9fc82ed9e619" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Measuring transparency as a value</a></div>
                      <div>↳ <a href="https://youtu.be/LGylHDQ85vQ?si=6wwd0eRKiTdmgEc1" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Get paid in multiple currencies</a></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 text-xs">2016–2018</span>
                  <span className="text-foreground/80">
                    <a href="https://dimagi.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Dimagi</a> — Mobile data tools for frontline health workers in low resource settings.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 text-xs">2015–2016</span>
                  <span className="text-foreground/80">
                    <a href="https://www.pwc.co.uk/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">PwC</a> — Consultant, data science projects for financial services clients.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 text-xs">2011–2015</span>
                  <span className="text-foreground/80">
                    <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">BITS Pilani</a> — Mechanical Engineering. Thesis on detecting malaria parasites from blood smear images using image processing.
                  </span>
                </div>
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 3: Side Projects */}
        <section id="projects" className="h-screen snap-start flex items-center px-8 md:px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-sm md:text-base font-bold text-accent uppercase tracking-wide mb-2 md:mb-3">
                Side Quests
              </h2>
              <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80 mb-3 md:mb-4">
                A few projects I spend time on outside of my day job:
              </p>
              <div className="space-y-2.5 md:space-y-3">
                <div>
                  <a href="https://melonfarms.xyz" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Melon Farms</a>
                  <span className="text-sm md:text-base text-foreground/60"> — recipe generator app built with Lovable, Claude, and Midjourney</span>
                </div>
                <div>
                  <a href="https://substack.com/@amenon" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Perfect Days</a>
                  <span className="text-sm md:text-base text-foreground/60"> — fiction and travel writing on Substack</span>
                </div>
                <div>
                  <a href="https://www.instagram.com/wabisabicomics/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium text-foreground hover:text-accent transition-colors bg-accent/20 px-1 rounded underline">Wabi Sabi Comics</a>
                  <span className="text-sm md:text-base text-foreground/60"> — a comic strip I used to draw ages ago</span>
                </div>
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 4: Life */}
        <section id="life" className="h-screen snap-start flex items-center px-8 md:px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-sm md:text-base font-bold text-accent uppercase tracking-wide mb-1 md:mb-3">
                Life
              </h2>
              <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80">
                <span className="bg-accent/20 px-1 rounded">Running</span> is my main sport these days. I enjoy climbing and the occasional surf.
              </p>
              <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80 mt-1.5 md:mt-4">
                I try to read a couple of books a month, mostly <span className="bg-accent/20 px-1 rounded">literary fiction</span>, and have a goal to write a novel in the near future.
              </p>
              <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80 mt-1.5 md:mt-4">
                Home is somewhere between <span className="bg-accent/20 px-1 rounded">London/Tallinn/Kerala</span>.
              </p>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 4: Connect */}
        <section id="connect" className="h-screen snap-start flex items-center px-8 md:px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-sm md:text-base font-bold text-accent uppercase tracking-wide mb-1 md:mb-3">
                Connect
              </h2>
              <p className="text-sm md:text-base leading-snug md:leading-relaxed text-foreground/80 mb-3 md:mb-6">
                I&apos;m always happy to chat about product, growth, and fintech.
              </p>
              <div className="flex gap-4 mb-4 md:mb-8">
                <a
                  href="https://www.linkedin.com/in/akshay-s-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/menon_akshays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label="X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {submitted ? (
                <div className="p-4 rounded-lg border border-accent/50 bg-accent/10">
                  <p className="text-foreground text-sm">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                  >
                    Send
                  </button>
                </form>
              )}

              {/* Footer */}
              <p className="mt-8 text-xs text-foreground/30">
                Made with <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/50 transition-colors">Claude Code</a>
              </p>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>
      </div>
    </div>
  );
}
