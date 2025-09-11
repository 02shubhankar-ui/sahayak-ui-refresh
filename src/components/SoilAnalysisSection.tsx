import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Droplets } from 'lucide-react';
import soilImage from '@/assets/soil-texture.jpg';

interface SoilAnalysisSectionProps {
  language: string;
}

export const SoilAnalysisSection = ({ language }: SoilAnalysisSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hi' ? 'मिट्टी विश्लेषण' : 'Soil Analysis'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'hi' 
              ? 'अपनी मिट्टी की संपूर्ण जांच करें और बेहतर फसल के लिए वैज्ञानिक सुझाव पाएं'
              : 'Complete analysis of your soil and get scientific recommendations for better crops'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Soil Test Report */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'hi' ? 'मिट्टी परीक्षण रिपोर्ट' : 'Soil Test Report'}
                </CardTitle>
                <p className="text-muted-foreground">
                  {language === 'hi' 
                    ? 'आपके खेत की वर्तमान मिट्टी की स्थिति'
                    : 'Current soil condition of your farm'
                  }
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* pH Level */}
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div>
                    <p className="font-medium">
                      {language === 'hi' ? 'pH स्तर' : 'pH Level'}
                    </p>
                    <p className="text-2xl font-bold text-primary">6.8</p>
                  </div>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {language === 'hi' ? 'अच्छा' : 'Good'}
                  </Badge>
                </div>

                {/* Nitrogen */}
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div>
                    <p className="font-medium">
                      {language === 'hi' ? 'नाइट्रोजन' : 'Nitrogen'}
                    </p>
                    <p className="text-xl font-semibold text-muted-foreground">
                      {language === 'hi' ? 'मध्यम' : 'Medium'}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {language === 'hi' ? 'सुधार योग्य' : 'Improvable'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'hi' ? 'सुझाव और सिफारिशें' : 'Suggestions & Recommendations'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {language === 'hi' 
                      ? 'गेहूं और चना के लिए उपयुक्त मिट्टी'
                      : 'Suitable soil for wheat and gram'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {language === 'hi' 
                      ? 'जैविक खाद का उपयोग करें'
                      : 'Use organic fertilizer'
                    }
                  </li>
                </ul>
                <Button className="mt-4 gap-2">
                  <Download className="w-4 h-4" />
                  {language === 'hi' ? 'विस्तृत रिपोर्ट डाउनलोड करें' : 'Download Detailed Report'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Soil Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={soilImage}
                  alt={language === 'hi' ? 'मिट्टी विश्लेषण' : 'Soil Analysis'}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded flex items-center gap-2">
                  <Droplets className="w-4 h-4" />
                  <span>{language === 'hi' ? 'नमी: 65%' : 'Moisture: 65%'}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};