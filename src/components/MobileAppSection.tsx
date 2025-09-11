import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Wifi, Globe, Download } from 'lucide-react';

interface MobileAppSectionProps {
  language: string;
}

export const MobileAppSection = ({ language }: MobileAppSectionProps) => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'hi' ? 'मोबाइल ऐप डाउनलोड करें' : 'Download Mobile App'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'hi' 
                  ? 'कहीं भी, कभी भी अपनी खेती की जानकारी पाएं। ऑफलाइन भी काम करता है।'
                  : 'Get your farming information anywhere, anytime. Works offline too.'
                }
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">
                    {language === 'hi' ? 'ऑफलाइन सपोर्ट' : 'Offline Support'}
                  </h4>
                  <p className="text-sm text-primary-foreground/80">
                    {language === 'hi' ? 'बिना इंटरनेट के भी काम करता है' : 'Works without internet'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">
                    {language === 'hi' ? 'हिंदी भाषा' : 'Hindi Language'}
                  </h4>
                  <p className="text-sm text-primary-foreground/80">
                    {language === 'hi' ? 'पूर्ण हिंदी समर्थन' : 'Full Hindi support'}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <Button size="lg" variant="secondary" className="gap-2">
              <Download className="w-5 h-5" />
              {language === 'hi' ? 'Play Store से डाउनलोड करें' : 'Download from Play Store'}
            </Button>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  {language === 'hi' ? 'हरित सहायक मोबाइल ऐप' : 'Harit Sahayak Mobile App'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* App Features */}
                <div className="space-y-3">
                  {[
                    language === 'hi' ? '📱 सभी फीचर्स मोबाइल में' : '📱 All features on mobile',
                    language === 'hi' ? '🔔 रियल-टाइम नोटिफिकेशन' : '🔔 Real-time notifications', 
                    language === 'hi' ? '📊 डैशबोर्ड रिपोर्ट्स' : '📊 Dashboard reports',
                    language === 'hi' ? '🌾 फसल ट्रैकिंग' : '🌾 Crop tracking',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* App Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">10K+</p>
                    <p className="text-xs text-white/80">
                      {language === 'hi' ? 'डाउनलोड्स' : 'Downloads'}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">4.8★</p>
                    <p className="text-xs text-white/80">
                      {language === 'hi' ? 'रेटिंग' : 'Rating'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};