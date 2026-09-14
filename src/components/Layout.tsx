import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollToTop();
  const [location] = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Placeholder search — show toast
      import("sonner").then(({ toast }) => {
        toast("Search coming soon", {
          description: `We're working on search. You searched for: "${searchQuery}"`,
        });
      });
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/gifts", label: "Gifts" },
    { href: "/our-story", label: "Our Story" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Free Shipping Banner */}
      <div className="bg-navy text-primary-foreground text-center py-2 px-4 text-sm tracking-wide font-sans">
        Free shipping on orders over $75
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brass/30">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-xl md:text-2xl text-navy tracking-tight">
              Banks <span className="font-sans font-bold">BAAZAR</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-teal ${
                  location === link.href ? "text-teal" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-navy" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors duration-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-navy" />
              ) : (
                <Menu className="w-5 h-5 text-navy" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Expanded */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden border-t border-brass/20"
            >
              <form onSubmit={handleSearch} className="container py-3">
                <div className="relative max-w-lg mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for treasures..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-brass/30 rounded-lg text-sm text-navy placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all"
                  />
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden border-t border-brass/20"
            >
              <nav className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium py-2 transition-colors ${
                      location === link.href ? "text-teal" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-brass/20 pt-3 mt-1">
                  <Link href="/return-policy" className="block text-sm text-warm-gray py-1.5">
                    Return Policy
                  </Link>
                  <Link href="/shipping-policy" className="block text-sm text-warm-gray py-1.5">
                    Shipping Policy
                  </Link>
                  <Link href="/terms-conditions" className="block text-sm text-warm-gray py-1.5">
                    Terms & Conditions
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        className="border-t border-brass/30 py-12 md:py-16"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663636407606/RWt36Ki5FeHS2WcyxmFiqw/footer_texture-K49rtHnon3AhMyqWNtAgkd.webp)`,
          backgroundSize: "400px",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Column */}
            <div>
              <h3 className="font-serif text-2xl text-navy mb-3">
                Banks <span className="font-sans font-bold">BAAZAR</span>
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
                All the things you never knew you needed. A curated collection of vintage finds,
                curious treasures, and beautiful oddities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-4">
                Explore
              </h4>
              <div className="flex flex-col gap-2">
                <Link href="/collections" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Collections
                </Link>
                <Link href="/gifts" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Gifts
                </Link>
                <Link href="/our-story" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-sans font-semibold text-navy text-sm uppercase tracking-wider mb-4">
                Policies
              </h4>
              <div className="flex flex-col gap-2">
                <Link href="/shipping-policy" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Shipping Policy
                </Link>
                <Link href="/return-policy" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Return Policy
                </Link>
                <Link href="/terms-conditions" className="text-sm text-warm-gray hover:text-teal transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-brass/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-warm-gray">
              &copy; {new Date().getFullYear()} Banks BAAZAR. All rights reserved.
            </p>
            <p className="text-xs text-warm-gray">
              banksbaazar.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
