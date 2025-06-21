import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center mx-auto max-w-4xl px-4 text-foreground">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
        Building elegant solutions with code & creativity.
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl">
        I&apos;m Jeremie, a senior software engineer specialising in modern web
        development, AI/ML, and game development. Explore my work and articles
        below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button variant="secondary" asChild size="lg">
          <Link href="/about">About Me</Link>
        </Button>
      </div>
    </section>
  );
}
