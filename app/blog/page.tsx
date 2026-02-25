'use client';

import { motion } from 'framer-motion';

export default function Collections() {
  return (
    // <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-12 text-gray-600 text-xl font-handwriting"
      >
        en construction, revenez plutard !
      </motion.div>
    // </div>
  );
}
