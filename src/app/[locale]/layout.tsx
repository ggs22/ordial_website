import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordial - AI & Data Science Consulting",
  description: "Expert AI, machine learning, and data science consulting services to transform your processes with intelligent solutions.",
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
    <div className={inter.className}>
      <Navigation locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}