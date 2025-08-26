export default async function Careers({
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
              {locale === 'fr' ? 'Carrières chez Ordial' : 'Careers at Ordial'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {locale === 'fr' 
                ? 'Rejoignez notre équipe passionnée par l\'innovation en IA et science des données.'
                : 'Join our team passionate about AI and data science innovation.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* No Positions Available */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 p-12 rounded-lg">
            <div className="w-16 h-16 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#3b82f6] mb-4">
              {locale === 'fr' ? 'Aucun poste disponible actuellement' : 'No Positions Currently Available'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'fr' 
                ? 'Nous n\'avons pas d\'ouvertures de postes pour le moment, mais nous sommes toujours intéressés par les talents exceptionnels.'
                : 'We don\'t have any job openings at the moment, but we\'re always interested in exceptional talent.'
              }
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {locale === 'fr' 
                ? 'Si vous pensez pouvoir apporter une valeur unique à notre équipe, n\'hésitez pas à nous envoyer votre CV et une lettre de motivation.'
                : 'If you think you can bring unique value to our team, feel free to send us your resume and cover letter.'
              }
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-[#0f1e32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a1524] transition-colors"
            >
              {locale === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4">
              {locale === 'fr' ? 'Opportunités futures' : 'Future Opportunities'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'fr' 
                ? 'Bien que nous n\'ayons pas de postes ouverts actuellement, voici les types de profils que nous recherchons.'
                : 'While we don\'t have open positions currently, here are the types of profiles we look for.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Data Scientists' : 'Data Scientists'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Experts en apprentissage automatique, statistiques et analyses avancées.'
                  : 'Experts in machine learning, statistics, and advanced analytics.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Ingénieurs IA' : 'AI Engineers'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Développeurs spécialisés dans le déploiement de modèles IA et MLOps.'
                  : 'Developers specializing in AI model deployment and MLOps.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-[#0f1e32] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3b82f6] mb-3">
                {locale === 'fr' ? 'Consultants' : 'Consultants'}
              </h3>
              <p className="text-gray-600">
                {locale === 'fr' 
                  ? 'Experts qui traduisent les besoins commerciaux en solutions techniques.'
                  : 'Experts who translate business needs into technical solutions.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}