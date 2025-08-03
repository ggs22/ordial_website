export default async function Home({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f1e32] to-[#0a1524] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {locale === 'fr' ? 'Transformez votre entreprise avec des' : 'Transform Your Business with'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {locale === 'fr' ? 'Solutions d\'IA Intelligentes' : 'Intelligent AI Solutions'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {locale === 'fr' 
                ? 'Conseil expert en IA, apprentissage automatique et science des données pour libérer le potentiel de vos données et stimuler l\'innovation.'
                : 'Expert AI, machine learning, and data science consulting to unlock your data\'s potential and drive innovation.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact`}
                className="bg-white text-[#0f1e32] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {locale === 'fr' ? 'Commencer' : 'Get Started'}
              </a>
              <a
                href={`/${locale}/services`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f1e32] transition-colors"
              >
                {locale === 'fr' ? 'Nos Services' : 'Our Services'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              {locale === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'fr' 
                ? 'Nous livrons des solutions d\'IA de pointe adaptées à vos besoins commerciaux spécifiques.'
                : 'We deliver cutting-edge AI solutions tailored to your specific business needs.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Apprentissage Automatique' : 'Machine Learning'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Modèles et algorithmes ML personnalisés pour résoudre des problèmes commerciaux complexes.'
                  : 'Custom ML models and algorithms to solve complex business problems and automate decision-making processes.'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Analytique de Données' : 'Data Analytics'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Analyse de données avancée et visualisation pour découvrir des insights et guider les décisions commerciales stratégiques.'
                  : 'Advanced data analysis and visualization to uncover insights and drive strategic business decisions.'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#3b82f6] mb-4">
                {locale === 'fr' ? 'Stratégie IA' : 'AI Strategy'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Conseil stratégique pour vous aider à identifier les opportunités d\'IA et implémenter des solutions évolutives.'
                  : 'Strategic consulting to help you identify AI opportunities and implement scalable solutions.'
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
            {locale === 'fr' ? 'Prêt à Transformer Votre Entreprise?' : 'Ready to Transform Your Business?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'fr' 
              ? 'Discutons de la façon dont l\'IA peut stimuler l\'innovation et la croissance de votre organisation.'
              : 'Let\'s discuss how AI can drive innovation and growth for your organization.'
            }
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-[#0f1e32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1524] transition-colors"
          >
            {locale === 'fr' ? 'Commencez Votre Parcours IA' : 'Start Your AI Journey'}
          </a>
        </div>
      </section>
    </div>
  );
}
