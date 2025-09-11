import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Microscope, CloudRain, Sprout } from 'lucide-react';
import heroImage from '@/assets/hero-rice-field.jpg';

interface HeroSectionProps {
  language: string;
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'hi' 
              ? 'स्मार्ट खेती के लिए आधुनिक समाधान' 
              : 'Modern Solutions for Smart Farming'
            }
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            {language === 'hi'
              ? 'मिट्टी की जांच, मौसम की जानकारी और स्मार्ट खेती के उपकरण - सब एक जगह। अपनी फसल की उत्पादकता बढ़ाएं।'
              : 'Soil analysis, weather information, and smart farming tools - all in one place. Increase your crop productivity.'
            }
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Microscope className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'hi' ? 'मिट्टी विश्लेषण' : 'Soil Analysis'}
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <CloudRain className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'hi' ? 'मौसम रिपोर्ट' : 'Weather Report'}
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="flex flex-col items-center p-6">
                <Sprout className="w-12 h-12 mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'hi' ? 'फसल सुझाव' : 'Crop Suggestions'}
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              {language === 'hi' ? 'मुफ्त शुरुआत करें' : 'Start Free'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {language === 'hi' ? 'और जानें' : 'Learn More'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};