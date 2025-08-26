export default async function Services({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-20" style={{backgroundImage: 'url(/images/dots_banner.png)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'fr' ? 'Nos Services' : 'Our Services'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {locale === 'fr'
                ? 'Solutions complètes d\'IA et de science des données adaptées aux besoins de votre entreprise.'
                : 'Comprehensive AI and data science solutions tailored to your business needs.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Data Analytics */}
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Analyse & Forage de Données' : 'Data Analytics & Insights'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'fr'
                  ? 'Transformez vos données brutes en informations concrètes et exploitables grâce à des analyses avancées et des visualisations interactives.'
                  : 'Transform your raw data into actionable insights with advanced analytics and interactive visualizations.'
                }
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Tableaux de Bord Business Intelligence' : 'Business Intelligence Dashboards'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Analyse Statistique et Rapports' : 'Statistical Analysis & Reporting'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Architecture de Pipeline de Données' : 'Data Pipeline Architecture'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Solutions d\'Analyse en Temps Réel' : 'Real-time Analytics Solutions'}
                </li>
              </ul>
            </div>

            {/* AI Strategy */}
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Stratégie IA et Conseil' : 'AI Strategy & Consulting'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'fr'
                  ? 'Guidance stratégique pour vous aider à identifier les opportunités d\'IA, développer des feuilles de route et implémenter des solutions évolutives.'
                  : 'Strategic guidance to help you identify AI opportunities, develop roadmaps, and implement scalable solutions.'
                }
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Évaluation de Maturité IA' : 'AI Readiness Assessment'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Recommandations de Stack Technologique' : 'Technology Stack Recommendations'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Feuilles de Route d\'Implémentation' : 'Implementation Roadmaps'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Formation d\'Équipe et Ateliers' : 'Team Training & Workshops'}
                </li>
              </ul>
            </div>

            {/* Custom Solutions */}
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Solutions IA Personnalisées' : 'Custom AI Solutions'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'fr'
                  ? 'Applications et systèmes d\'IA sur mesure, incluant l\'apprentissage automatique, conçus pour résoudre vos défis commerciaux spécifiques et automatiser les processus de prise de décision complexes.'
                  : 'Bespoke AI applications and systems, including machine learning, designed to solve your specific business challenges and automate complex decision-making processes.'
                }
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Analyses Prédictives et Prévisions' : 'Predictive Analytics & Forecasting'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Traitement du Langage Naturel' : 'Natural Language Processing'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Systèmes de Vision par Ordinateur' : 'Computer Vision Systems'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Déploiement de Modèles et MLOps' : 'Model Deployment & MLOps'}
                </li>
              </ul>
            </div>

            {/* Custom Software */}
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#0f1e32] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Logiciels Sur Mesure' : 'Custom Software'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'fr'
                  ? 'Solutions logicielles personnalisées et applications d\'affaires conçues pour répondre à vos besoins opérationnels spécifiques et améliorer l\'efficacité de votre entreprise.'
                  : 'Custom software solutions and business applications designed to meet your specific operational needs and enhance your business efficiency.'
                }
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Applications Web et Mobiles' : 'Web & Mobile Applications'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'APIs et Services Web' : 'APIs & Web Services'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Interfaces Utilisateur (GUI)' : 'User Interfaces (GUI)'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Systèmes de Gestion de Base de Données' : 'Database Management Systems'}
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0f1e32] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {locale === 'fr' ? 'Intégration de Systèmes et Automatisation' : 'System Integration & Automation'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              {locale === 'fr' ? 'Notre Processus' : 'Our Process'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'fr'
                ? 'Une méthodologie éprouvée qui garantit une implémentation réussie de vos solutions technologiques du concept au déploiement.'
                : 'A proven methodology that ensures successful implementation of your technology solutions from concept to deployment.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f1e32] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Découverte' : 'Discovery'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'fr'
                  ? 'Nous analysons vos besoins commerciaux, votre infrastructure existante et identifions les meilleures opportunités technologiques.'
                  : 'We analyze your business needs, existing infrastructure, and identify the best technology opportunities.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f1e32] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Conception' : 'Design'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'fr'
                  ? 'Nous créons une architecture de solution détaillée, des spécifications techniques et des feuilles de route de projet.'
                  : 'We create detailed solution architecture, technical specifications, and project roadmaps.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f1e32] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Développement' : 'Development'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'fr'
                  ? 'Nous développons, testons et validons vos solutions en utilisant les meilleures pratiques de l\'industrie et les technologies de pointe.'
                  : 'We develop, test, and validate your solutions using industry best practices and cutting-edge technologies.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f1e32] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Déploiement' : 'Deployment'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'fr'
                  ? 'Nous déployons vos solutions en production et fournissons un support continu, une maintenance et des optimisations.'
                  : 'We deploy your solutions to production and provide ongoing support, maintenance, and optimizations.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-6">
            {locale === 'fr' ? 'Prêt à Commencer ?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Discutons des services qui conviennent à votre entreprise et créons une solution personnalisée.'
              : 'Let\'s discuss which services are right for your business and create a custom solution.'
            }
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0f1e32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1524] transition-colors"
          >
            {locale === 'fr' ? 'Planifier une Consultation' : 'Schedule a Consultation'}
          </a>
        </div>
      </section>
    </div>
  );
}