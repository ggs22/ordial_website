import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const footer = {
    company: locale === 'fr' ? 'Entreprise' : 'Company',
    services: locale === 'fr' ? 'Services' : 'Services',
    resources: locale === 'fr' ? 'Ressources' : 'Resources',
    contact: locale === 'fr' ? 'Contact' : 'Contact',
    home: locale === 'fr' ? 'Accueil' : 'Home',
    about: locale === 'fr' ? 'À propos' : 'About',
    blog: locale === 'fr' ? 'Blog' : 'Blog',
    careers: locale === 'fr' ? 'Carrières' : 'Careers',
    privacy: locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy',
    allRightsReserved: locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved',
    description: locale === 'fr' 
      ? 'Expert en IA, apprentissage automatique et science des données pour transformer vos processus avec des solutions intelligentes.'
      : 'Expert AI, machine learning, and data science consulting to transform your processes with intelligent solutions.',
    machineLearningSolutions: locale === 'fr' ? 'Solutions d\'apprentissage automatique' : 'Machine Learning Solutions',
    dataAnalytics: locale === 'fr' ? 'Analytique de données' : 'Data Analytics',
    aiStrategy: locale === 'fr' ? 'Stratégie IA' : 'AI Strategy',
    customAiModels: locale === 'fr' ? 'Modèles IA personnalisés' : 'Custom AI Models'
  };

  return (
    <footer className="bg-[#0f1e32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/images/ordial_first_letter_logo_blue_bg.svg"
                alt="Ordial Logo"
                width={120} 
                height={40}
                className="h-12 w-auto mr-4"
              />
              {/*<span className="text-2xl font-bold">Ordial</span>*/}
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {footer.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footer.services}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.machineLearningSolutions}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.dataAnalytics}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.aiStrategy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.customAiModels}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footer.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="text-gray-300 hover:text-white transition-colors">
                  {footer.careers}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Ordial Technologies inc. {footer.allRightsReserved}.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white transition-colors">
                {footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}