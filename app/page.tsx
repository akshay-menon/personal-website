import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <main className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-4xl w-full items-center">
        {/* Left Column - Content */}
        <div className="flex-1">
          {/* Name */}
          <h1 className="text-4xl font-medium tracking-tight text-foreground mb-2">
            Akshay Menon
          </h1>

          {/* Title */}
          <p className="text-lg text-foreground/70 mb-8">
            Product Manager based in London
          </p>

          {/* About Me */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wide mb-3">
              About
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              I work at the intersection of product, growth, and data at mission driven tech companies.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mt-4">
              I believe modern, accessible, low-cost financial infrastructure is fundamental to advancing society as it underpins all human productivity, and have worked in this space for the past ten years.
            </p>
          </div>

          {/* Journey */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wide mb-3">
              Journey
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-4">
                <span className="text-foreground/50 w-24 flex-shrink-0">2025–present</span>
                <span className="text-foreground/80">
                  <a href="https://sling.money/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">Sling Money</a> — Leading growth product. Sling&apos;s mission is to bring everyone in the world on to an instant, low cost, fairer financial system using stablecoin technology.
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground/50 w-24 flex-shrink-0">2018–2025</span>
                <span className="text-foreground/80">
                  <a href="https://wise.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">Wise</a> — Built products for businesses to get paid internationally. Started as a data analyst in the debit cards team, and moved to PM later.
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground/50 w-24 flex-shrink-0">2016–2018</span>
                <span className="text-foreground/80">
                  <a href="https://dimagi.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">Dimagi</a> — Mobile data tools for frontline health workers in low resource settings.
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground/50 w-24 flex-shrink-0">2016</span>
                <span className="text-foreground/80">
                  <a href="https://www.pwc.co.uk/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">PwC</a> — Consultant, data science projects for financial services clients.
                </span>
              </div>
            </div>
          </div>

          {/* Life */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wide mb-3">
              Life
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              Into running, climbing, and surfing. Loves reading fiction, and have a goal to write a novel in the near future.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 mt-4">
              Originally from Kerala, India, lived in Tallinn for a while, now based in London.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-wide mb-3">
              Connect
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://x.com/menon_akshays"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                X
              </a>
              <a
                href="https://github.com/akshay-menon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-s-menon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://substack.com/@amenon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Substack
              </a>
              <a
                href="https://www.instagram.com/wabisabicomics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.goodreads.com/user/show/8458998-akshay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Goodreads
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/Akshay.jpg"
            alt="Akshay Menon"
            width={300}
            height={300}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </main>
    </div>
  );
}
