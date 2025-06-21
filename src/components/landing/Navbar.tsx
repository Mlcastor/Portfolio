import Link from "next/link";
import ThemeToggle from "@/components/landing/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-primary">
          {/* Logo or Name */}
          SaaSphere Technologies
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu placeholder could go here */}
        </div>
      </div>
    </header>
  );
}
