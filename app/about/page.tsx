'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Types pour les données
interface EducationItem {
  institution: string;
  period: string;
  degree: string;
}

interface ExperienceItem {
  company: string;
  period: string;
  role: string;
}

interface FunFactItem {
  fact: string;
}

// Composant Carousel réutilisable
function Carousel<T>({ 
  items, 
  renderItem 
}: { 
  items: T[]; 
  renderItem: (item: T) => React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Contenu du carousel */}
      <div className="min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderItem(items[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={goToPrevious}
          className="text-2xl text-gray-400 hover:text-gray-700 transition-colors font-light"
          aria-label="Précédent"
        >
          ⟨
        </button>

        {/* Indicateurs de points */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-300 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Aller à l'élément ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="text-2xl text-gray-400 hover:text-gray-700 transition-colors font-light"
          aria-label="Suivant"
        >
          ⟩
        </button>
      </div>
    </div>
  );
}

export default function About() {
  // Données pour Education
  const educationData: EducationItem[] = [
    {
      institution: 'ESIEE Paris',
      period: 'Septembre 2022 - Aout 2025',
      degree: "Diplome d'ingénieur Informatique et Applications"
    },
    {
      institution: 'Certification Google Cloud',
      period: 'Février 2026 - maintenant',
      degree: "Préparation à la certification cloud digital leader & associate cloud engineer"
    },
    {
      institution: 'Université de Lille',
      period: 'Septembre 2020 - Juin 2022',
      degree: "Licence de Mathématiques"
    },
  ];

  // Données pour Experience
  const experienceData: ExperienceItem[] = [
    {
      company: 'SFR',
      period: 'Septembre 2022 - Aout 2025',
      role: 'Ingénieur exploitation informatique'
    },
  ];

  // Données pour Fun Facts
  const funFactsData: FunFactItem[] = [
    {
      fact: "Je crois profondément que la discipline bat la motivation."
    },
    {
      fact: "Je peux passer des heures à perfectionner un détail que personne ne remarquera."
    },
    {
      fact: "Je parle peu, mais j’observe beaucoup."
    },
    {
      fact: "Je me définis plus par mes efforts que par mes paroles."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl font-handwriting text-gray-700">
          à propos de moi
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card p-8"
        >
          <h2 className="text-lg font-handwriting text-blue-300 text-center mb-8">
            formation
          </h2>
          
          <Carousel
            items={educationData}
            renderItem={(item) => (
              <div className="text-center px-4">
                <h3 className="font-handwriting text-base font-semibold text-gray-800 mb-3">
                  {item.institution}
                </h3>
                <p className="font-handwriting text-xs text-gray-600 mb-4">
                  {item.period}
                </p>
                <p className="font-handwriting text-sm text-gray-700 leading-relaxed">
                  {item.degree}
                </p>
              </div>
            )}
          />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card p-8"
        >
          <h2 className="text-lg font-handwriting text-blue-300 text-center mb-8">
            expérience
          </h2>
          
          <Carousel
            items={experienceData}
            renderItem={(item) => (
              <div className="text-center px-4">
                <h3 className="font-handwriting text-base font-semibold text-gray-800 mb-3">
                  {item.company}
                </h3>
                <p className="font-handwriting text-xs text-gray-600 mb-4">
                  {item.period}
                </p>
                <p className="font-handwriting text-sm text-gray-700 leading-relaxed">
                  {item.role}
                </p>
              </div>
            )}
          />
        </motion.div>

        {/* Fun Facts Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="card p-8"
        >
          <h2 className="text-lg font-handwriting text-blue-300 text-center mb-8">
            fun facts
          </h2>
          
          <Carousel
            items={funFactsData}
            renderItem={(item) => (
              <div className="text-center px-4">
                <p className="font-handwriting text-sm text-gray-700 leading-relaxed min-h-[120px] flex items-center justify-center">
                  {item.fact}
                </p>
              </div>
            )}
          />
        </motion.div>
      </div>
    </div>
  );
}