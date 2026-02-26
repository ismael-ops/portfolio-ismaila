'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Message() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);
    
    try {
      // Utilisation des variables d'environnement
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ismaila',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      console.log('Email envoyé avec succès!', result);
      
      setSubmitMessage('Message envoyé avec succès ! 🎉');
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Masquer le message après 5 secondes
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitMessage('Erreur lors de l\'envoi. Veuillez réessayer.');
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xl md:text-xl font-handwriting text-gray-800 mb-4">
          Laisse moi un message!
        </p>
        <p className="text-gray-600 text-sm font-handwriting">
          dites-moi tout ce qui vous passe par la tête.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Nom */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-handwriting text-gray-700 mb-2"
          >
            Ton nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-handwriting text-gray-700 mb-2"
          >
            Ton email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="johndoe@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-handwriting text-gray-700 mb-2"
          >
            Ton message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Lorem ipsum dolor sit amet..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Bouton Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-handwriting text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>

        {/* Message de confirmation */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center font-handwriting text-lg ${
              submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {submitMessage}
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}