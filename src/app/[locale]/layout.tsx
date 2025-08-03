import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "../../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordial - AI & Data Science Consulting",
  description: "Expert AI, machine learning, and data science consulting services to transform your business with intelligent solutions.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  return (
    <div>
      <Navigation locale={locale} />
      <main>{children}</main>
      <footer style={{padding: '20px', borderTop: '1px solid #ccc', marginTop: '20px', backgroundColor: '#0f1e32', color: 'white', textAlign: 'center'}}>
        <p>© 2024 Ordial. {locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.</p>
      </footer>
    </div>
  );
}