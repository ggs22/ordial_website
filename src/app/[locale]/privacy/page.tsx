export default async function Privacy({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  const content = {
    title: locale === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy',
    lastUpdated: locale === 'fr' ? 'Dernière mise à jour' : 'Last updated',
    date: locale === 'fr' ? '3 août 2025' : 'August 3, 2025',
    overview: {
      title: locale === 'fr' ? 'Aperçu' : 'Overview',
      content: locale === 'fr' 
        ? 'Chez Ordial, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité décrit notre approche concernant la collecte et le traitement de vos informations personnelles.'
        : 'At Ordial, we are committed to protecting your privacy. This privacy policy outlines our approach to collecting and handling your personal information.'
    },
    dataCollection: {
      title: locale === 'fr' ? 'Collecte de Données' : 'Data Collection',
      content: locale === 'fr'
        ? 'Notre site web collecte uniquement les informations que vous nous fournissez volontairement via notre formulaire de contact (nom, adresse e-mail, entreprise et message). Nous ne suivons pas votre activité de navigation et ne collectons pas de cookies personnels.'
        : 'Our website only collects information that you voluntarily provide to us through our contact form (name, email address, company, and message). We do not track your browsing activity or collect personal cookies.'
    },
    contact: {
      title: locale === 'fr' ? 'Utilisation des Données' : 'Data Usage',
      content: locale === 'fr'
        ? 'Les informations que vous soumettez via notre formulaire de contact sont utilisées uniquement pour répondre à votre demande et vous contacter au sujet de nos services. Nous gardons vos adresses e-mail mais ne les partageons jamais avec des tiers.'
        : 'Information you submit through our contact form is used solely to respond to your inquiry and contact you about our services. We keep your email addresses but never share them with third parties.'
    },
    thirdParty: {
      title: locale === 'fr' ? 'Services Tiers' : 'Third-Party Services',
      content: locale === 'fr'
        ? 'Nous n\'utilisons aucun service tiers qui collecterait ou traiterait vos données personnelles. Notre site web ne contient pas de pixels de suivi, d\'analyses tierces ou de scripts de collecte de données.'
        : 'We do not use any third-party services that would collect or process your personal data. Our website does not contain tracking pixels, third-party analytics, or data collection scripts.'
    },
    technical: {
      title: locale === 'fr' ? 'Informations Techniques' : 'Technical Information',
      content: locale === 'fr'
        ? 'Votre navigateur web peut automatiquement transmettre certaines informations techniques standard (comme votre adresse IP) à notre serveur web lors de la visite de notre site. Ces informations ne sont pas stockées ou utilisées par nous de quelque manière que ce soit.'
        : 'Your web browser may automatically transmit certain standard technical information (such as your IP address) to our web server when visiting our site. This information is not stored or used by us in any way.'
    },
    commitment: {
      title: locale === 'fr' ? 'Notre Engagement' : 'Our Commitment',
      content: locale === 'fr'
        ? 'Nous nous engageons à maintenir cette approche de non-collecte de données. Si cela devait changer à l\'avenir, nous mettrions à jour cette politique de confidentialité et en informerions clairement les utilisateurs.'
        : 'We are committed to maintaining this no-data-collection approach. Should this ever change in the future, we would update this privacy policy and clearly notify users.'
    },
    contact_us: {
      title: locale === 'fr' ? 'Nous Contacter' : 'Contact Us',
      content: locale === 'fr'
        ? 'Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à : info@ordial.io'
        : 'If you have any questions about this privacy policy, you can contact us at: info@ordial.io'
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-20" style={{backgroundImage: 'url(/images/bg_blue_waves.png)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-200">
              {content.lastUpdated}: {content.date}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.overview.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.overview.content}</p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.dataCollection.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.dataCollection.content}</p>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.contact.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.contact.content}</p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.thirdParty.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.thirdParty.content}</p>
            </div>

            {/* Technical Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.technical.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.technical.content}</p>
            </div>

            {/* Our Commitment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.commitment.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.commitment.content}</p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 bg-gray-200 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">{content.contact_us.title}</h2>
              <p className="text-gray-700 leading-relaxed">{content.contact_us.content}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}