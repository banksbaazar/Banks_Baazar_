/*
 * Banks BAAZAR — Return Policy
 * 7 calendar days from delivery, customer pays return shipping
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ReturnPolicy() {
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

          <h1 className="font-serif text-3xl md:text-4xl text-navy mb-8">Return Policy</h1>

          <div className="prose prose-warm max-w-none space-y-6 font-sans text-navy/90 leading-relaxed">
            <p>
              At Banks BAAZAR, we want you to love every treasure you bring home. If something isn't quite
              right, we're happy to accept returns under the following conditions:
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Return Window</h2>
            <p>
              You have <strong>7 full calendar days from the date of delivery</strong> to initiate a return.
              Returns requested after this 7-day window cannot be accepted, no exceptions.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Return Conditions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items must be in their original condition — unused, unwashed, and undamaged.</li>
              <li>Items must be returned in their original packaging when possible.</li>
              <li>Vintage and antique items are sold as-is; normal wear consistent with age is not grounds for return.</li>
              <li>Bedding items (sheets, pillows, comforters) must be unopened/unused for hygiene reasons.</li>
            </ul>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Return Shipping</h2>
            <p>
              <strong>The customer is responsible for all return shipping costs.</strong> We recommend using
              a trackable shipping method, as we cannot be held responsible for items lost in return transit.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Refunds</h2>
            <p>
              Once we receive and inspect your returned item, we'll process your refund to the original
              payment method. Please allow 5–10 business days for the refund to appear on your statement.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Non-Returnable Items</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items marked as "Final Sale" at the time of purchase.</li>
              <li>Items returned after the 7-day window.</li>
              <li>Items that have been used, altered, or damaged after delivery.</li>
            </ul>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">How to Start a Return</h2>
            <p>
              To initiate a return, please contact us through banksbaazar.com with your order number and
              reason for return. We'll provide you with return instructions within 1–2 business days.
            </p>

            <div className="mt-10 p-5 bg-secondary rounded-lg border border-brass/20">
              <p className="text-sm text-warm-gray">
                <strong className="text-navy">Questions?</strong> We're here to help. Reach out through
                our website and we'll get back to you as quickly as we can.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
