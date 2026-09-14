/*
 * Banks BAAZAR — Terms & Conditions
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
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

          <h1 className="font-serif text-3xl md:text-4xl text-navy mb-8">Terms & Conditions</h1>

          <div className="prose prose-warm max-w-none space-y-6 font-sans text-navy/90 leading-relaxed">
            <p>
              Welcome to Banks BAAZAR (banksbaazar.com). By accessing or using our website and purchasing
              our products, you agree to be bound by these Terms & Conditions. Please read them carefully.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">General</h2>
            <p>
              Banks BAAZAR reserves the right to update or modify these terms at any time without prior
              notice. Your continued use of the website following any changes constitutes acceptance of
              those changes.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Products & Descriptions</h2>
            <p>
              We make every effort to accurately describe and photograph our items. However, because many
              of our products are vintage, antique, or pre-loved, they may show signs of age, wear, or
              character that are part of their charm. These are not defects. Colors may vary slightly
              from what appears on screen due to monitor settings.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Pricing & Payment</h2>
            <p>
              All prices are listed in US Dollars (USD). We reserve the right to change prices at any
              time. Payment is due at the time of purchase. We accept major credit cards and other
              payment methods as displayed at checkout.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Order Acceptance</h2>
            <p>
              Placing an order does not guarantee acceptance. We reserve the right to refuse or cancel
              any order for any reason, including but not limited to product availability, errors in
              pricing or product information, or suspected fraudulent activity.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Intellectual Property</h2>
            <p>
              All content on banksbaazar.com — including text, images, graphics, logos, and design — is
              the property of Banks BAAZAR and is protected by applicable copyright and trademark laws.
              You may not reproduce, distribute, or use any content without our written permission.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Limitation of Liability</h2>
            <p>
              Banks BAAZAR shall not be liable for any indirect, incidental, special, or consequential
              damages arising from your use of our website or products. Our total liability shall not
              exceed the amount paid for the specific product in question.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United
              States. Any disputes arising from these terms shall be resolved in the appropriate courts.
            </p>

            <h2 className="font-serif text-xl text-navy mt-8 mb-3">Contact</h2>
            <p>
              If you have questions about these Terms & Conditions, please reach out to us through
              banksbaazar.com.
            </p>

            <div className="mt-10 p-5 bg-secondary rounded-lg border border-brass/20">
              <p className="text-sm text-warm-gray">
                <strong className="text-navy">Last updated:</strong> June 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
