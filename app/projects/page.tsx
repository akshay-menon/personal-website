import Image from "next/image";

const projects = [
  {
    title: "Melon Farms",
    url: "https://melonfarms.xyz",
    image: "/melon.png",
    description:
      "My first vibe coding app that I built to help generate cooking recipes for easy weeknight dinners.\n\nI built it on Lovable and uses Claude and Midjourney for the Gen AI stuff.",
    tags: ["Lovable", "Claude", "Midjourney"],
  },
  {
    title: "Perfect Days",
    url: "https://substack.com/@amenon",
    image: "/Substack.jpg",
    description:
      "Where I write fiction pieces and travel logs.",
    tags: ["Substack", "Fiction", "Writing"],
  },
  {
    title: "Coming Soon",
    url: "",
    image: "",
    description:
      "Cooking up an idea for an app that helps you build a fiction writing practice.",
    tags: [],
  },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen items-start justify-center px-6 py-16">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-medium tracking-tight text-accent mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => {
            const CardWrapper = project.url ? "a" : "div";
            const linkProps = project.url
              ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardWrapper
                key={project.title}
                {...linkProps}
                className={`block p-6 aspect-square rounded-lg border border-foreground/10 bg-foreground/5 transition-all flex flex-col justify-between ${
                  project.url ? "hover:border-accent/50 hover:bg-accent/5" : "opacity-70"
                }`}
              >
              <div>
                {project.image && (
                  <div className="mb-3 -mx-2 -mt-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-40 object-contain rounded bg-foreground/5"
                    />
                  </div>
                )}
                <h2 className="text-xl font-medium text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="text-foreground/70 text-sm whitespace-pre-line">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-accent/20 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
