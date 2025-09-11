import { useState } from 'react';
import { Header } from '@/components/Header';
import { NewsSection } from '@/components/NewsSection';
import { GovernmentSchemes } from '@/components/GovernmentSchemes';
import { PestDiseaseSection } from '@/components/PestDiseaseSection';
import { ChatSection } from '@/components/ChatSection';

const Index = () => {
  const [language, setLanguage] = useState('hi');

  return (
    <div className="min-h-screen bg-background">
      <Header onLanguageChange={setLanguage} currentLanguage={language} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'hi' ? 'हरित सहायक पोर्टल' : 'Harit Sahayak Portal'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            {language === 'hi' 
              ? 'आधुनिक तकनीक से समृद्ध खेती का नया युग' 
              : 'A new era of prosperous farming with modern technology'
            }
          </p>
          <div className="text-6xl mb-8">🌾</div>
        </div>
      </section>

      <NewsSection language={language} />
      <GovernmentSchemes language={language} />
      <PestDiseaseSection language={language} />
      <ChatSection language={language} />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            {language === 'hi' 
              ? '© 2024 हरित सहायक पोर्टल - सभी अधिकार सुरक्षित'
              : '© 2024 Harit Sahayak Portal - All Rights Reserved'
            }
          </p>
          <p className="text-sm text-primary-foreground/80">
            {language === 'hi' 
              ? 'किसानों के लिए, किसानों द्वारा बनाया गया'
              : 'Made for farmers, by farmers'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
