import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ProjectTeaser {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const projects: ProjectTeaser[] = [
  {
    slug: "knights-on-base",
    title: "Knight on Base",
    description:
      "AI-driven TTRPG game demo featuring autonomous agent swarms and emergent gameplay.",
    image: "/projects/knight-on-base.png",
  },
  {
    slug: "esx-bundle",
    title: "ESX Bundle",
    description:
      "Modular framework for FiveM servers with a focus on performance and DX.",
    image: "/projects/fivem-fond.webp",
  },
  {
    slug: "more-projects",
    title: "More Projects",
    description:
      "Explore additional experiments and open-source contributions.",
    image: "/projects/github-logo.webp",
  },
];

export default function ProjectsTeaser() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col gap-8">
      <h2 className="text-3xl font-semibold text-primary">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border bg-card text-card-foreground"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-40 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="sm" className="w-full">
                <Link
                  href={
                    project.slug === "knights-on-base"
                      ? "https://www.knightsonbase.xyz/"
                      : project.slug === "more-projects"
                      ? "https://github.com/Mlcastor"
                      : project.slug === "esx-bundle"
                      ? "https://github.com/Mlcastor/vent_esx_bundle"
                      : `/projects/${project.slug}`
                  }
                >
                  See details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
