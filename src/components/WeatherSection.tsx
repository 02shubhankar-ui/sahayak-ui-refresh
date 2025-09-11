import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Thermometer, Droplets, Wind, AlertTriangle, Eye } from 'lucide-react';
import weatherImage from '@/assets/weather-monitoring.jpg';

interface WeatherSectionProps {
  language: string;
}

export const WeatherSection = ({ language }: WeatherSectionProps) => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'hi' ? 'मौसम रिपोर्ट' : 'Weather Report'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'hi' 
              ? 'सटीक मौसम की जानकारी के साथ अपनी खेती की योजना बनाएं'
              : 'Plan your farming with accurate weather information'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Current Weather */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'hi' ? 'वर्तमान मौसम' : 'Current Weather'}
                </CardTitle>
                <p className="text-muted-foreground">
                  {language === 'hi' ? 'अभी की स्थिति' : 'Current conditions'}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {/* Temperature */}
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <Thermometer className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'hi' ? 'तापमान' : 'Temperature'}
                    </p>
                    <p className="text-xl font-bold">28°C</p>
                  </div>

                  {/* Humidity */}
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'hi' ? 'नमी' : 'Humidity'}
                    </p>
                    <p className="text-xl font-bold">72%</p>
                  </div>

                  {/* Wind */}
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <Wind className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'hi' ? 'हवा' : 'Wind'}
                    </p>
                    <p className="text-xl font-bold">15 km/h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Alert */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="w-5 h-5" />
                  {language === 'hi' ? 'मौसम चेतावनी' : 'Weather Alert'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">
                    {language === 'hi' ? 'चेतावनी' : 'Warning'}
                  </Badge>
                  <div>
                    <p className="font-medium text-orange-800">
                      {language === 'hi' 
                        ? 'कल भारी बारिश की संभावना'
                        : 'Heavy rainfall expected tomorrow'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full gap-2">
              <Eye className="w-4 h-4" />
              {language === 'hi' ? 'विस्तृत पूर्वानुमान देखें' : 'View Detailed Forecast'}
            </Button>
          </div>

          {/* Weather Monitoring Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={weatherImage}
                  alt={language === 'hi' ? 'मौसम निगरानी' : 'Weather Monitoring'}
                  className="w-full h-64 object-cover"
                />
              </div>
            </Card>

            {/* 7-Day Forecast Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'hi' ? '7 दिन का पूर्वानुमान' : '7-Day Forecast'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { day: language === 'hi' ? 'आज' : 'Today', temp: '28°C', condition: '🌤️' },
                    { day: language === 'hi' ? 'कल' : 'Tomorrow', temp: '25°C', condition: '🌧️' },
                    { day: language === 'hi' ? 'परसों' : 'Day After', temp: '26°C', condition: '⛅' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.condition}</span>
                        <span className="font-medium">{item.day}</span>
                      </div>
                      <span className="font-bold text-primary">{item.temp}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};