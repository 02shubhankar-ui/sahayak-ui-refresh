import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SoilAnalysisSection } from '@/components/SoilAnalysisSection';
import { WeatherSection } from '@/components/WeatherSection';
import { FarmingToolsSection } from '@/components/FarmingToolsSection';
import { NewsSection } from '@/components/NewsSection';
import { GovernmentSchemes } from '@/components/GovernmentSchemes';
import { PestDiseaseSection } from '@/components/PestDiseaseSection';
import { ChatSection } from '@/components/ChatSection';


const Index = () => {
  const [language, setLanguage] = useState('hi');

  return (
    <div className="min-h-screen bg-background">
      <Header onLanguageChange={setLanguage} currentLanguage={language} />
      <HeroSection language={language} />
      <SoilAnalysisSection language={language} />
      <WeatherSection language={language} />
      <FarmingToolsSection language={language} />
      <NewsSection language={language} />
      <GovernmentSchemes language={language} />
      <PestDiseaseSection language={language} />
      <ChatSection language={language} />
      
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            {language === 'hi' 
              ? '© 2024 स्मार्ट कृषि - सभी अधिकार सुरक्षित'
              : '© 2024 Smart Krishi - All Rights Reserved'
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
