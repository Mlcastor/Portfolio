import Hero from "@/components/landing/Hero";
import ProjectsTeaser from "@/components/landing/ProjectsTeaser";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProjectsTeaser />
    </main>
  );
}
