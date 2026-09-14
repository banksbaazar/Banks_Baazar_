/*
 * Banks BAAZAR — Home Page
 * Design: "Warm Patina" — modern vintage editorial
 * Palette: Cream bg, Navy text, Brass accents, Teal CTAs
 * Typography: DM Serif Display (headings) + DM Sans (body)
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, RotateCcw, Gift } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const collections = [
  {
    name: "Luminous Decor",
    image: "https://picsum.photos/seed/baazar-luminous-decor/800/600",
    desc: "Lighting that tells a story",
  },
  {
    name: "Collected Treasures",
    image: "https://picsum.photos/seed/baazar-collected-treasures/800/600",
    desc: "Curious finds & knickknacks",
  },
  {
    name: "Little Luxuries",
    image: "https://picsum.photos/seed/baazar-little-luxuries/800/600",
    desc: "Small indulgences, big charm",
  },
  {
    name: "Book Collections",
    image: "https://picsum.photos/seed/baazar-book-collections/800/600",
    desc: "Stories waiting to be rediscovered",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663636407606/RWt36Ki5FeHS2WcyxmFiqw/hero_banner-XeFMSmj3rza7DpAkuCYKdA.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative container py-28 md:py-40 lg:py-52">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Banks{" "}
              <span className="font-sans font-bold tracking-tight">BAAZAR</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-sans leading-relaxed mb-8">
              All the things you never knew you needed
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-white/95 text-navy font-sans font-medium text-sm px-6 py-3 rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
            >
              Explore Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-8 border-b border-brass/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
              { icon: Package, title: "Carefully Packed", desc: "Each treasure wrapped with care" },
              { icon: RotateCcw, title: "Easy Returns", desc: "7 days from delivery" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex items-center gap-4 py-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm">{item.title}</p>
                  <p className="text-warm-gray text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-3">
              Curated Collections
            </h2>
            <p className="text-warm-gray font-sans max-w-md mx-auto">
              Each collection is a world of its own — handpicked finds gathered with curiosity and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link
                  href="/collections"
                  className="group block overflow-hidden rounded-xl border border-brass/20 bg-card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-navy group-hover:text-teal transition-colors duration-200">
                      {col.name}
                    </h3>
                    <p className="text-warm-gray text-sm mt-1">{col.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="text-center mt-10"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-teal font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
            >
              View all collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663636407606/RWt36Ki5FeHS2WcyxmFiqw/about_vision_bg-BcpSc9R6qzmQ7J3me5xaaD.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-cream/80" />
        <div className="relative container text-center max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="w-12 h-px bg-brass mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">Our Story</h2>
            <p className="text-warm-gray font-sans leading-relaxed text-base md:text-lg mb-3">
              It started with a whisper — so far and muffled I hardly heard it. Through the noise
              of fear, through the pain, through everything crumbling around me… I kept going.
            </p>
            <p className="text-warm-gray font-sans leading-relaxed text-base md:text-lg mb-8 italic">
              She may fall… but imagine if she flies.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 text-teal font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
            >
              Read our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Great Gifts */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0}
            >
              <div className="inline-flex items-center gap-2 text-teal mb-4">
                <Gift className="w-5 h-5" />
                <span className="font-sans text-sm font-semibold uppercase tracking-wider">Great Gifts</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">
                One-of-a-kind finds make unforgettable gifts
              </h2>
              <p className="text-warm-gray font-sans leading-relaxed text-base md:text-lg mb-6">
                Because we only carry a few of each thing, a gift from Banks BAAZAR is one they
                won't see anywhere else. Whether it's a little luxury or a statement piece, you'll
                find something that feels handpicked — because it was.
              </p>
              <div className="p-4 rounded-lg bg-cream border border-brass/30 mb-6">
                <p className="text-navy font-sans text-sm">
                  <strong>Gift wrapping available.</strong> Add it at checkout for $8
                  and we'll wrap your treasure with care.
                </p>
              </div>
              <Link
                href="/gifts"
                className="inline-flex items-center gap-2 text-teal font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Shop gift ideas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
              className="relative rounded-xl overflow-hidden border border-brass/20"
            >
              <img
                src="https://picsum.photos/seed/baazar-little-luxuries/800/600"
                alt="Beautifully presented gift-worthy treasures"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur px-3 py-1.5 rounded-full border border-brass/30">
                <span className="text-navy font-sans text-xs font-semibold">Wrapped with love</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Highlight */}
      <section className="relative py-14 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663636407606/RWt36Ki5FeHS2WcyxmFiqw/shipping_banner_bg-NA3Pdd5Ycja47DScxdm5cK.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Truck className="w-8 h-8 text-white/80 mx-auto mb-3" />
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Free Shipping on Orders Over $75
            </h3>
            <p className="text-white/70 font-sans text-sm max-w-md mx-auto">
              Every treasure is carefully wrapped and shipped with love. Spend $75 or more and shipping is on us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
