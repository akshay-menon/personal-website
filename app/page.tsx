"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

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
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
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
        <section className="h-screen snap-start flex items-center px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              {/* Mobile Photo */}
              <div className="md:hidden mb-8">
                <Image
                  src="/Akshay.jpg"
                  alt="Akshay Menon"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover sepia-[0.1] brightness-[1.02] contrast-[0.98]"
                  priority
                />
              </div>

              {/* Name */}
              <h1 className="text-4xl font-medium tracking-tight text-accent mb-2">
                Akshay Menon
              </h1>

              {/* Title */}
              <p className="text-lg text-foreground/70 mb-8">
                Product Manager based in London
              </p>

              {/* About Me */}
              <div>
                <h2 className="text-base font-bold text-accent uppercase tracking-wide mb-3">
                  About
                </h2>
                <p className="text-base leading-relaxed text-foreground/80">
                  I work at the intersection of <span className="bg-accent/20 px-1 rounded">product, growth, and data</span> at mission driven tech companies.
                </p>
                <p className="text-base leading-relaxed text-foreground/80 mt-4">
                  I believe <span className="bg-accent/20 px-1 rounded">modern, accessible, low-cost financial infrastructure</span> is fundamental to advancing society as it underpins all human productivity, and have worked in this space for the past ten years.
                </p>
              </div>

              {/* Scroll indicator */}
              <div className="mt-12 text-foreground/30 text-sm animate-bounce">
                ↓ scroll
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 2: Journey */}
        <section className="h-screen snap-start flex items-center px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-base font-bold text-accent uppercase tracking-wide mb-3">
                Journey
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 font-mono text-xs">2025–present</span>
                  <span className="text-foreground/80">
                    <a href="https://sling.money/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Sling Money</a> — Leading growth product. Sling&apos;s mission is to bring everyone in the world on to an instant, low cost, fairer financial system using stablecoin technology.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 font-mono text-xs">2018–2025</span>
                  <span className="text-foreground/80">
                    <a href="https://wise.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Wise</a> — Built products for businesses to get paid internationally. Started as a data analyst in the debit cards team, and moved to PM later.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 font-mono text-xs">2016–2018</span>
                  <span className="text-foreground/80">
                    <a href="https://dimagi.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Dimagi</a> — Mobile data tools for frontline health workers in low resource settings.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-foreground/50 w-24 flex-shrink-0 font-mono text-xs">2015–2016</span>
                  <span className="text-foreground/80">
                    <a href="https://www.pwc.co.uk/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">PwC</a> — Consultant, data science projects for financial services clients.
                  </span>
                </div>
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 3: Life + Side Projects */}
        <section className="h-screen snap-start flex items-center px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              {/* Life */}
              <div className="mb-8">
                <h2 className="text-base font-bold text-accent uppercase tracking-wide mb-3">
                  Life
                </h2>
                <p className="text-base leading-relaxed text-foreground/80">
                  Into running, climbing, and surfing. Loves reading fiction, and have a goal to write a novel in the near future.
                </p>
                <p className="text-base leading-relaxed text-foreground/80 mt-4">
                  Originally from Kerala, India, lived in Tallinn for a while, now based in London.
                </p>
              </div>

              {/* Side Projects */}
              <div>
                <h2 className="text-base font-bold text-accent uppercase tracking-wide mb-3">
                  Side Projects
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <a href="https://melonfarms.xyz" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Melon Farms</a>
                    <span className="text-foreground/60"> — recipe generator app built with vibe coding</span>
                  </div>
                  <div>
                    <a href="https://substack.com/@amenon" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Perfect Days</a>
                    <span className="text-foreground/60"> — fiction & travel writing on Substack</span>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/wabisabicomics/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">Wabi Sabi Comics</a>
                    <span className="text-foreground/60"> — illustrations on Instagram</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>

        {/* Section 4: Connect */}
        <section className="h-screen snap-start flex items-center px-6">
          <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-base font-bold text-accent uppercase tracking-wide mb-3">
                Connect
              </h2>
              <div className="flex flex-wrap gap-4 text-sm mb-8">
                <a
                  href="https://x.com/menon_akshays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  X
                </a>
                <a
                  href="https://github.com/akshay-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/akshay-s-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.goodreads.com/user/show/8458998-akshay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Goodreads
                </a>
              </div>

              {submitted ? (
                <div className="p-4 rounded-lg border border-accent/50 bg-accent/10">
                  <p className="text-foreground text-sm">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4">
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
            </div>
            {/* Spacer for photo on desktop */}
            <div className="hidden md:block w-[300px] flex-shrink-0" />
          </div>
        </section>
      </div>
    </div>
  );
}
