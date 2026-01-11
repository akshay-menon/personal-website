export default function Home() {
  return (
    <div className="flex min-h-screen items-start px-6 pt-32">
      <main className="max-w-2xl">
        {/* Name */}
        <h1 className="text-4xl font-medium tracking-tight text-foreground mb-6">
          Akshay Menon
        </h1>
        
        {/* Bio */}
        <p className="text-lg leading-relaxed text-foreground/70 mb-8">
          Product Manager based in London.
        </p>
        
        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
