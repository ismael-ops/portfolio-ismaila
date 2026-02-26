'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'SNK Quiz app',
    description: 'plateforme interactive de quiz sur l\'anime SNK où les fans peuvent tester leurs connaissances, suivre leurs scores et se mesurer les uns aux autres dans un classement dynamique',
    tags: ['vuejs', 'python', 'API RESTful', 'SQLite'],
    color: 'bg-sage/30',
    link: 'https://github.com/ismael-ops/quiz-app',
  },
  {
    id: 2,
    title: 'Movie bot',
    emoji: '🎬',
    description: 'assistant intelligent basé sur un graphe de connaissances, capable de répondre en temps réel à des questions sur un univers cinématographique en reliant personnages, lieux et événements via une base de données relationnelle orientée graphes.',
    tags: ['OpenAi Api', 'python', 'Neo4j', 'Streamlit'],
    color: 'bg-peach/30',
    link: 'youtube.com/watch?v=7nbh18jnMBM&feature=youtu.be',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={project.link}>
              <div className={`card p-6 h-full ${project.color} hover:scale-[1.02] transition-transform duration-300`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium flex items-center gap-2">
                    {project.emoji && <span>{project.emoji}</span>}
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 hover:text-gray-700">
                    clique moi!
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/60 rounded-full text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
