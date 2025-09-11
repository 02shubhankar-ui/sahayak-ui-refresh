import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  language: string;
}

export const NewsSection = ({ language }: NewsSectionProps) => {
  const news = language === 'hi' ? [
    {
      title: "केंद्र सरकार ने किसानों के लिए नई योजना की घोषणा",
      summary: "प्रधानमंत्री ने आज नई कृषि योजना का शुभारंभ किया जो छोटे और सीमांत किसानों को लाभ पहुंचाएगी।",
      time: "2 घंटे पहले"
    },
    {
      title: "मानसून का अपडेट: इस सप्ताह भारी बारिश की संभावना",
      summary: "मौसम विभाग ने कई राज्यों में भारी बारिश की चेतावनी जारी की है।",
      time: "4 घंटे पहले"
    },
    {
      title: "धान की नई किस्म से होगी बेहतर पैदावार",
      summary: "कृषि वैज्ञानिकों ने धान की नई किस्म विकसित की है जो कम पानी में भी अच्छी फसल देती है।",
      time: "6 घंटे पहले"
    }
  ] : [
    {
      title: "Government Announces New Farmer Welfare Scheme",
      summary: "Prime Minister launched new agricultural scheme that will benefit small and marginal farmers across the country.",
      time: "2 hours ago"
    },
    {
      title: "Monsoon Update: Heavy Rainfall Expected This Week",
      summary: "Weather department issues heavy rainfall warning for several states in the coming days.",
      time: "4 hours ago"
    },
    {
      title: "New Rice Variety Promises Better Yield",
      summary: "Agricultural scientists develop new rice variety that produces good crops with less water consumption.",
      time: "6 hours ago"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-foreground">
            {language === 'hi' ? '24/7 समाचार अपडेट' : '24/7 News Updates'}
          </h2>
          <Button variant="outline" className="gap-2">
            {language === 'hi' ? 'सभी समाचार देखें' : 'View All News'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.summary}</p>
                <Button variant="ghost" size="sm" className="text-primary">
                  {language === 'hi' ? 'पढ़ें' : 'Read More'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};