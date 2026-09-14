import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32">
      <div className="container max-w-lg mx-auto text-center">
        <p className="font-serif text-7xl md:text-8xl text-brass mb-4">404</p>
        <h1 className="font-serif text-2xl md:text-3xl text-navy mb-4">
          This treasure hasn't been found
        </h1>
        <p className="text-warm-gray font-sans mb-8 leading-relaxed">
          The page you're looking for may have been moved, sold, or never existed.
          But there are plenty of other treasures waiting for you.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 active:scale-[0.97]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to the BAAZAR
        </Link>
      </div>
    </div>
  );
}
