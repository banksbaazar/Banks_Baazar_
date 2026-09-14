/*
 * Banks BAAZAR — Collections Page
 * Full-page grid of clickable themed collection cards
 * Design: "Warm Patina" — masonry-inspired varied heights
 */

import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const collections = [
  {
    name: "Luminous Decor",
    image: "https://picsum.photos/seed/baazar-luminous-decor/800/600",
    desc: "Vintage lamps, chandeliers, and lighting fixtures that cast a warm glow on any room.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Collected Treasures",
    image: "https://picsum.photos/seed/baazar-collected-treasures/800/600",
    desc: "Curious knickknacks, decorative oddities, and delightful finds for every shelf.",
    span: "",
  },
  {
    name: "Early World Explorers",
    image: "https://picsum.photos/seed/baazar-early-explorers/800/600",
    desc: "Whimsical finds for kids and babies — because little ones deserve vintage charm too.",
    span: "",
  },
  {
    name: "Time-Worn Treasures",
    image: "https://picsum.photos/seed/baazar-time-worn/800/600",
    desc: "Pre-loved and gently used items with stories to tell and life left to give.",
    span: "",
  },
  {
    name: "Little Luxuries",
    image: "https://picsum.photos/seed/baazar-little-luxuries/800/600",
    desc: "Small indulgences and beautiful details that make everyday feel special.",
    span: "",
  },
  {
    name: "Everything Western",
    image: "https://picsum.photos/seed/baazar-everything-western/800/600",
    desc: "Everything cowboy — cowhide print bedding, sheets, rugs, and decor for the full western lifestyle.",
    span: "lg:col-span-2",
  },
  {
    name: "Classic Bedding",
    image: "https://picsum.photos/seed/baazar-classic-bedding/800/600",
    desc: "Timeless sheets, pillowcases, comforters, and linens in elegant patterns.",
    span: "",
  },
  {
    name: "Book Collections",
    image: "https://picsum.photos/seed/baazar-book-collections/800/600",
    desc: "Curated stacks of vintage and antique books — stories waiting to be rediscovered.",
    span: "",
  },
];

export default function Collections() {
  const handleCollectionClick = (name: string) => {
    toast("Coming soon!", {
      description: `The ${name} collection is being curated. Check back soon!`,
    });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            Our Collections
          </h1>
          <p className="text-warm-gray font-sans max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Every collection is a carefully curated world — wander through and see what catches your eye.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className={col.span}
            >
              <button
                onClick={() => handleCollectionClick(col.name)}
                className="group block w-full h-full overflow-hidden rounded-xl border border-brass/20 bg-card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className={`overflow-hidden ${col.span.includes("row-span-2") ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-xl text-navy group-hover:text-teal transition-colors duration-200 mb-1">
                    {col.name}
                  </h2>
                  <p className="text-warm-gray text-sm leading-relaxed">{col.desc}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
