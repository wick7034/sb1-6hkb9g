'use client';

import { Mail } from 'lucide-react';
import { DomainFeatures } from '@/components/DomainFeatures';
import { OfferForm } from '@/components/OfferForm';
import { getDomainInfo } from '@/lib/domains';
import { useEffect, useState } from 'react';

export default function Home() {
  const [domain, setDomain] = useState<string>('');
  const [domainInfo, setDomainInfo] = useState<any>(null);

  useEffect(() => {
    const hostname = window.location.hostname;
    setDomain(hostname);
    setDomainInfo(getDomainInfo(hostname));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 rounded-xl glass-card mb-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-600 dark:text-blue-400">
                {domain}
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {domainInfo?.description || "This premium domain is available for purchase. Make it yours today."}
            </p>
            {domainInfo?.price && (
              <div className="mt-6">
                <span className="glass-card px-6 py-3 rounded-full text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${domainInfo.price.toLocaleString()} USD
                </span>
              </div>
            )}
          </div>

          {domainInfo?.highlights && (
            <div className="mb-16">
              <div className="max-w-3xl mx-auto glass-card p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4 text-center">Domain Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {domainInfo.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <DomainFeatures />
          <OfferForm domainPrice={domainInfo?.price} />

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Berwal.com - Premium Domain Portfolio</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a 
                href="mailto:domains@berwal.com" 
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors glass-card px-4 py-2 rounded-lg"
              >
                <Mail className="h-4 w-4 mr-1" /> domains@berwal.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}