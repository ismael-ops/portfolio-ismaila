'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Ismaila";

  // Effet typewriter
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Vitesse du typing

      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText.length && !typingComplete) {
      // Quand le typing est terminé, attendre un peu avant de masquer le curseur
      const timeout = setTimeout(() => {
        setTypingComplete(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingComplete]);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
        
        {/* Greeting */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-handwriting mb-6">
            Salut, je suis{' '}
            <span className="text-blue-300">
              {displayedText}
              {!typingComplete && (
                <span className="animate-pulse">|</span>
              )}
            </span>
          </h2>
          
          {/* Sous-titre qui apparaît après le typing */}
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 text-gray-600"
            >
              <p className="flex items-center justify-center gap-2 font-handwriting">
                ingénieur Informatique, passionné par le{' '}
                <span className="text-blue-300 font-bold">DevOps </span>& <span className="text-blue-300 font-bold"> Cloud </span>
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Buttons - apparaissent après le typing */}
        {typingComplete && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#message"
              className="btn text-sm font-medium"
            >
              laisse un <span className="text-blue-400 font-handwriting">message</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1rLdkObOCgPvtg0en_yrWPOwGhokDRktp/view?usp=drive_link"
              className="btn text-sm font-medium"
            >
              mon <span className="text-blue-400 font-handwriting">CV</span>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}