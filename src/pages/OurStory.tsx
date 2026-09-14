/*
 * Banks BAAZAR — Our Story Page
 * The founder's personal narrative — raw, honest, determined
 * Design: "Warm Patina" — editorial, generous whitespace
 * Animation: staggered fade-in on scroll using framer-motion whileInView
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShoppingBag } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function OurStory() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div className="w-12 h-px bg-brass mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">Our Story</h1>
          <p className="text-warm-gray font-sans text-lg italic">
            How a quiet whisper became Banks BAAZAR.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="space-y-8">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              It started with a thought. A quiet whisper somewhere in the dark corners of my mind — so
              far away and muffled I hardly heard it. At the time, the idea was absurd. <em>Me? Have a
              store?</em> The very notion was laughable. I tried to push it away, get busy with life.
              But the harder I pushed, the louder it got — until it was all I could think about.
            </p>
          </motion.div>

          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              While I was trying to do life, it seemed like life was doing me. I found myself in an
              unhealthy relationship with no resources, no support — financial or otherwise — and no
              encouragement. Quite the opposite, in fact. I was sabotaged and discouraged, undermined
              at every turn.
            </p>
          </motion.div>

          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              Everything seemed hopeless. With seemingly nothing left to lose, I began selling things
              from the house as a way to provide for my son and myself. It started slow — a little
              here, a little there — but I kept going. Through the noise of fear, I kept going.
              Through the pain and heartbreak as my life crumbled around me, I kept going. Through the
              doubt, I kept moving. And when I thought I couldn't go any more… I kept going.
            </p>
          </motion.div>

          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <blockquote className="border-l-4 border-brass pl-6 py-2 my-8">
              <p className="font-serif text-xl md:text-2xl text-navy italic leading-relaxed">
                "I wish I could say it's because I'm so strong and I just knew I would make it. But
                that's not the case. I simply had no other choice."
              </p>
            </blockquote>
          </motion.div>

          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              I couldn't bury my head in the sand and hide like I would have done years prior — I had
              a two-foot-nothing baby boy, and he needed me. Or so I believed at the time. To this
              day, I don't know who was saving who, but he was the reason I didn't spiral.
            </p>
          </motion.div>

          <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              The never-ending guilt of having to go to work and leave him was made that much worse by
              the constant berating — for choosing to provide for my son and myself over living on
              handouts. Accusations, negativity, and hate. Those were daily. It wasn't until later
              that I recognized it for what it really was: envy.
            </p>
          </motion.div>

          <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              So as my marriage fell apart and I was put out into the street, I had to start over from
              nothing. I packed up my son, and at the age of thirty-five with a baby in tow, I was
              moving back in with my mom. Not where I imagined I'd be at that point in life — but life
              has this way of doing things while we're busy making plans.
            </p>
          </motion.div>

          <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              So I dug in. I remodeled my grandmother's house after she passed — tore everything out
              and put new in. I really believe that project, as hard as it was, played a part in
              saving my sanity. All this time I was still selling, and I put every dime I had left
              into inventory. Time flew by at lightning speed, and I was moving at the same pace. So
              much to do, so little time to do it.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-brass/40 mx-auto my-4" />

          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              Somewhere in the chaos, the whisper became a roar. What started as selling puzzle mats
              and random household items turned into something real. I started learning — what sells,
              what doesn't, where to find it, how to price it. Every flip taught me something. Every
              dollar earned was proof that I could do this on my own.
            </p>
          </motion.div>

          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              Banks BAAZAR didn't come with a business plan or a startup loan. It came from survival.
              From late nights listing items after my son fell asleep. From loading up the car at
              estate sales before the sun came up. From betting on myself when nobody else would.
            </p>
          </motion.div>

          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              This store is built on grit, not grants. On instinct, not investors. Every single item
              you see here passed through my hands — researched, sourced, cleaned, photographed, and
              listed by one person with everything on the line.
            </p>
          </motion.div>

          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              I'm not building this to get rich. I'm building this so my son never has to watch his
              mother choose between dignity and a roof over his head. I'm building this so that one
              day, when he's old enough to understand, he'll know that his mom didn't just survive —
              she built something.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-brass/40 mx-auto my-4" />

          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">Where we're going.</h2>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              The dream doesn't stop at a website. One day, there will be a warehouse that supplies
              orders and a brick-and-mortar showroom — a place where people can come see the larger
              pieces put together, walk through them, touch them. A real space for real finds.
            </p>
          </motion.div>

          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <blockquote className="border-l-4 border-brass pl-6 py-2 my-8">
              <p className="font-serif text-xl md:text-2xl text-navy italic leading-relaxed">
                "She may fail. But imagine if she flies."
              </p>
            </blockquote>
          </motion.div>

          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed">
              What was once a whisper in the wind is now a fully functioning online venture. And every
              single person who shops here, shares a link, or sends a kind word — you are a part of
              this story. In a way, you're a part of our history.
            </p>
          </motion.div>

          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}>
            <p className="text-navy font-sans text-base md:text-lg leading-relaxed font-medium">
              Never give up on a dream. You just never know — it may come true.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            className="pt-6 flex flex-col items-center text-center"
          >
            <div className="w-64 h-64 rounded-full bg-secondary border border-brass/30 flex items-center justify-center">
              <span className="text-warm-gray font-sans text-sm italic">Photo coming soon</span>
            </div>
            <p className="mt-5 font-serif text-lg text-navy italic">
              — V, founder of Banks BAAZAR
            </p>
          </motion.div>
        </div>

        {/* Shop Now CTA */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <div className="w-12 h-px bg-brass mx-auto mb-6" />
          <p className="text-warm-gray font-sans text-base mb-6">
            Ready to see what we've been building?
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-teal text-white font-sans font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-teal/90 transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </Link>
          <div className="mt-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-teal font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
            >
              Explore our collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
