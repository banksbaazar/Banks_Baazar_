/*
 * Banks BAAZAR — Gifts Page
 * Gift ideas + gift wrapping info
 * Design: "Warm Patina" — editorial, warm vintage
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { toast } from "sonner";
import { Gift, ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const giftIdeas = [
  {
    name: "Little Luxuries",
    image: "https://picsum.photos/seed/baazar-little-luxuries/800/600",
    desc: "Small indulgences that feel thoughtful and special.",
  },
  {
    name: "Luminous Decor",
    image: "https://picsum.photos/seed/baazar-luminous-decor/800/600",
    desc: "A warm glow makes a memorable housewarming gift.",
  },
  {
    name: "Collected Treasures",
    image: "https://picsum.photos/seed/baazar-collected-treasures/800/600",
    desc: "Curious finds for the person who has everything.",
  },
  {
    name: "Book Collections",
    image: "https://picsum.photos/seed/baazar-book-collections/800/600",
    desc: "Vintage stories for the reader in your life.",
  },
];

export default function Gifts() {
  const handleClick = (name: string) => {
    toast("Coming soon!", {
      description: `The ${name} collection is being curated. Check back soon!`,
    });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-teal mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-sans text-sm font-semibold uppercase tracking-wider">Gifts</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">Great Gifts</h1>
          <p className="text-warm-gray font-sans text-base md:text-lg leading-relaxed">
            A gift from Banks BAAZAR is one they won't find anywhere else. Because we only carry a few
            of each thing, every present feels handpicked — because it was.
          </p>
        </motion.div>

        {/* Gift Wrapping callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={1}
          className="max-w-3xl mx-auto mb-14 p-6 md:p-8 rounded-xl bg-secondary border border-brass/30 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-cream border border-brass/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-brass" />
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy mb-1">Gift wrapping available</h2>
            <p className="text-warm-gray font-sans text-sm leading-relaxed">
              Add gift wrapping at checkout for $8, and we'll wrap your treasure
              with care so it arrives looking as special as the moment you chose it.
            </p>
          </div>
        </motion.div>

        {/* Gift ideas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {giftIdeas.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <button
                onClick={() => handleClick(item.name)}
                className="group block w-full h-full overflow-hidden rounded-xl border border-brass/20 bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-navy group-hover:text-teal transition-colors duration-200 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="mt-14 text-center"
        >
          <div className="w-12 h-px bg-brass mx-auto mb-6" />
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-teal font-sans font-medium hover:gap-3 transition-all duration-200"
          >
            Browse all collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
