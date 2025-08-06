'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function Contact() {
  const params = useParams();
  const locale = params?.locale as string;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
        });
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || (locale === 'fr' ? 'Une erreur est survenue' : 'An error occurred'),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: locale === 'fr' 
          ? 'Erreur de réseau. Veuillez réessayer.' 
          : 'Network error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-20" style={{backgroundImage: 'url(/images/bg_blue_waves.png)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'fr' ? 'Contactez-nous' : 'Get in Touch'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {locale === 'fr' 
                ? 'Prêt à transformer vos processus avec l\'IA ? Commençons la conversation.'
                : 'Ready to transform your processes with AI? Let\'s start the conversation.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#3b82f6] mb-8">
                {locale === 'fr' ? 'Envoyez-nous un message' : 'Send us a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'fr' ? 'Nom *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f1e32] focus:border-transparent outline-none transition-colors text-gray-900"
                    placeholder={locale === 'fr' ? 'Votre nom complet' : 'Your full name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'fr' ? 'Courriel *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f1e32] focus:border-transparent outline-none transition-colors text-gray-900"
                    placeholder={locale === 'fr' ? 'votre.email@entreprise.com' : 'your.email@company.com'}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'fr' ? 'Entreprise' : 'Company'}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f1e32] focus:border-transparent outline-none transition-colors text-gray-900"
                    placeholder={locale === 'fr' ? 'Nom de votre entreprise' : 'Your company name'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'fr' ? 'Message *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f1e32] focus:border-transparent outline-none transition-colors resize-none text-gray-900"
                    placeholder={locale === 'fr' ? 'Parlez-nous de votre projet et comment nous pouvons vous aider...' : 'Tell us about your project and how we can help...'}
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-[#0f1e32] text-white hover:bg-[#0a1524]'
                  }`}
                >
                  {isSubmitting 
                    ? (locale === 'fr' ? 'Envoi en cours...' : 'Sending...') 
                    : (locale === 'fr' ? 'Envoyer le message' : 'Send Message')
                  }
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#3b82f6] mb-8">
                {locale === 'fr' ? 'Restons en contact' : 'Let\'s Connect'}
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-gray-600">
                  {locale === 'fr' 
                    ? 'Nous sommes là pour vous aider à exploiter la puissance de l\'IA et de la science des données pour votre entreprise. Contactez-nous et discutons de la façon dont nous pouvons travailler ensemble.'
                    : 'We\'re here to help you unlock the power of AI and data science for your business. Reach out to us and let\'s discuss how we can work together.'
                  }
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0f1e32] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#3b82f6] mb-1">
                        {locale === 'fr' ? 'Courriel' : 'Email'}
                      </h3>
                      <p className="text-gray-600">info@ordial.io</p>
                    </div>
                  </div>


                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0f1e32] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#3b82f6] mb-1">
                        {locale === 'fr' ? 'Temps de réponse' : 'Response Time'}
                      </h3>
                      <p className="text-gray-600">
                        {locale === 'fr' ? 'Nous répondons généralement dans les 24 heures' : 'We typically respond within 24 hours'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                    {locale === 'fr' ? 'À quoi s\'attendre' : 'What to Expect'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {locale === 'fr' ? 'Appel de consultation initial dans les 48 heures' : 'Initial consultation call within 48 hours'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {locale === 'fr' ? 'Proposition de projet détaillée et calendrier' : 'Detailed project proposal and timeline'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {locale === 'fr' ? 'Prix transparents et prochaines étapes' : 'Transparent pricing and next steps'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              {locale === 'fr' ? 'Questions fréquemment posées' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'fr' 
                ? 'Réponses rapides aux questions courantes sur nos services et notre processus.'
                : 'Quick answers to common questions about our services and process.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Combien de temps dure un projet d\'IA typique ?' : 'How long does a typical AI project take?'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Les délais des projets varient selon la complexité, mais la plupart des projets durent de 3 à 6 mois, de la consultation initiale au déploiement.'
                  : 'Project timelines vary based on complexity, but most projects range from 3-6 months from initial consultation to deployment.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Travaillez-vous avec les petites entreprises ?' : 'Do you work with small businesses?'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Oui ! Nous travaillons avec des organisations de toutes tailles, des startups aux grandes entreprises. Nos solutions sont évolutives et adaptées à votre budget.'
                  : 'Yes! We work with organizations of all sizes, from startups to enterprise companies. Our solutions are scalable and tailored to your budget.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Que faire si nous n\'avons pas beaucoup de données ?' : 'What if we don\'t have much data?'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Nous pouvons vous aider à développer une stratégie de collecte de données et travailler avec des ensembles de données limités en utilisant des techniques comme l\'apprentissage par transfert et la génération de données synthétiques.'
                  : 'We can help you develop a data collection strategy and work with limited datasets using techniques like transfer learning and synthetic data generation.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Offrez-vous un support continu ?' : 'Do you provide ongoing support?'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Absolument. Nous offrons des services de maintenance, de surveillance et d\'amélioration continue pour garantir que vos solutions d\'IA restent efficaces au fil du temps.'
                  : 'Absolutely. We offer maintenance, monitoring, and continuous improvement services to ensure your AI solutions remain effective over time.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}