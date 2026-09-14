/*
 * Banks BAAZAR — Shipping Policy
 * Free shipping on orders over $75
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-warm-gray hover:text-teal transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-navy mb-8">Shipping Policy</h1>

          <div className="prose prose-warm max-w-none space-y-6 font-sans text-navy/90 leading-relaxed">
            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Free Shipping</h2>
            <p>
              <strong>Orders of $75 or more ship free!</strong> We believe that finding the perfect
              treasure shouldn't come with a hefty shipping bill. Spend $75 or more and we'll take
              care of getting it to your door.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Standard Shipping</h2>
            <p>
              For orders under $75, standard shipping rates apply and will be calculated at checkout
              based on your location and the size/weight of your items.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Processing Time</h2>
            <p>
              Orders are typically processed within 1–3 business days. During busy periods (holidays,
              special sales), processing may take up to 5 business days. You'll receive a shipping
              confirmation email with tracking information once your order is on its way.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Shipping Methods</h2>
            <p>
              We ship via USPS and UPS depending on package size and destination. Tracking is provided
              for all shipments so you can follow your treasures on their journey to you.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Delivery Times</h2>
            <p>
              Standard delivery typically takes 5–8 business days within the continental United States.
              Delivery times may vary based on your location and carrier conditions.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Packaging</h2>
            <p>
              Every item is carefully wrapped and packaged to ensure it arrives safely. Fragile and
              vintage items receive extra padding and protection. We take pride in making sure your
              treasures arrive in the same condition they left our shop.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Gift Wrapping</h2>
            <p>
              Sending a treasure to someone special? We offer <strong>gift wrapping for $8</strong>,
              added at checkout. Each gift is wrapped with care so it arrives looking as
              special as the moment you decided to send it.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Shipping Restrictions</h2>
            <p>
              At this time, we ship within the United States only. International shipping may be
              available in the future — stay tuned!
            </p>

            <div className="mt-10 p-5 bg-secondary rounded-lg border border-brass/20">
              <p className="text-sm text-warm-gray">
                <strong className="text-navy">Have questions about your shipment?</strong> Contact us
                through banksbaazar.com and we'll help track down your order.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
