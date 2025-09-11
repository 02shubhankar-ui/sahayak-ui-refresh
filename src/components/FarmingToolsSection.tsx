import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, TrendingUp, MapPin } from 'lucide-react';

interface FarmingToolsSectionProps {
  language: string;
}

export const FarmingToolsSection = ({ language }: FarmingToolsSectionProps) => {
  const tools = [
    {
      icon: Calculator,
      title: language === 'hi' ? 'उर्वरक कैलकुलेटर' : 'Fertilizer Calculator',
      description: language === 'hi' 
        ? 'फसल के अनुसार सही मात्रा में उर्वरक की गणना करें'
        : 'Calculate the right amount of fertilizer for your crops',
    },
    {
      icon: Calendar,
      title: language === 'hi' ? 'बुआई कैलेंडर' : 'Sowing Calendar',
      description: language === 'hi' 
        ? 'सही समय पर बुआई के लिए कैलेंडर देखें'
        : 'Check calendar for timely sowing',
    },
    {
      icon: TrendingUp,
      title: language === 'hi' ? 'बाजार दर' : 'Market Rates',
      description: language === 'hi' 
        ? 'फसलों की वर्तमान बाजार दरों की जानकारी'
        : 'Current market rates information for crops',
    },
    {
      icon: MapPin,
      title: language === 'hi' ? 'नजदीकी मंडी' : 'Nearest Mandi',
      description: language === 'hi' 
        ? 'आपके नजदीकी मंडियों का पता और दरें'
        : 'Location and rates of nearby mandis',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hi' ? 'खेती के उपकरण' : 'Farming Tools'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'hi' 
              ? 'आधुनिक तकनीक के साथ अपनी खेती को बेहतर बनाने के लिए सभी जरूरी उपकरण'
              : 'All essential tools to improve your farming with modern technology'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {tool.description}
                </p>
                <Button variant="outline" className="w-full">
                  {language === 'hi' ? 'उपयोग करें' : 'Use Tool'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle>
                {language === 'hi' ? 'फसल रोग निदान' : 'Crop Disease Diagnosis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === 'hi' 
                  ? 'फसल की तस्वीर अपलोड करें और तुरंत रोग की पहचान करें'
                  : 'Upload crop photos and get instant disease identification'
                }
              </p>
              <Button>
                {language === 'hi' ? 'निदान करें' : 'Diagnose Now'}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500/10 to-green-400/5">
            <CardHeader>
              <CardTitle>
                {language === 'hi' ? 'AI खेती सलाहकार' : 'AI Farming Advisor'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === 'hi' 
                  ? 'कृत्रिम बुद्धिमत्ता से व्यक्तिगत खेती की सलाह पाएं'
                  : 'Get personalized farming advice from artificial intelligence'
                }
              </p>
              <Button>
                {language === 'hi' ? 'सलाह लें' : 'Get Advice'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};