import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, IndianRupee } from 'lucide-react';

interface GovernmentSchemesProps {
  language: string;
}

export const GovernmentSchemes = ({ language }: GovernmentSchemesProps) => {
  const schemes = language === 'hi' ? [
    {
      title: "प्रधानमंत्री किसान सम्मान निधि योजना",
      description: "सीमांत और छोटे किसानों को ₹6000 प्रति वर्ष की आर्थिक सहायता",
      eligibility: "2 हेक्टेयर तक भूमि वाले किसान",
      amount: "₹6,000/वर्ष",
      status: "सक्रिय"
    },
    {
      title: "किसान क्रेडिट कार्ड योजना",
      description: "किसानों को कृषि आवश्यकताओं के लिए आसान लोन",
      eligibility: "सभी किसान (भूमि मालिक और किरायेदार)",
      amount: "₹3 लाख तक",
      status: "आवेदन खुला"
    },
    {
      title: "फसल बीमा योजना",
      description: "प्राकृतिक आपदाओं से होने वाले नुकसान का बीमा",
      eligibility: "सभी किसान (मालिक और किरायेदार)",
      amount: "फसल मूल्य का 100%",
      status: "सक्रिय"
    }
  ] : [
    {
      title: "PM Kisan Samman Nidhi Scheme",
      description: "Financial assistance of ₹6000 per year to small and marginal farmers",
      eligibility: "Farmers with up to 2 hectares of land",
      amount: "₹6,000/year",
      status: "Active"
    },
    {
      title: "Kisan Credit Card Scheme",
      description: "Easy loans for farmers for agricultural requirements",
      eligibility: "All farmers (landowners and tenants)",
      amount: "Up to ₹3 lakhs",
      status: "Applications Open"
    },
    {
      title: "Crop Insurance Scheme",
      description: "Insurance coverage for losses due to natural calamities",
      eligibility: "All farmers (owners and tenants)",
      amount: "100% of crop value",
      status: "Active"
    }
  ];

  return (
    <section className="py-8 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'hi' ? 'सरकारी योजनाएं' : 'Government Schemes'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'सीमांत किसानों के लिए विशेष योजनाएं' 
              : 'Special schemes for marginal farmers'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <Badge variant={scheme.status === 'सक्रिय' || scheme.status === 'Active' ? 'default' : 'secondary'}>
                    {scheme.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{scheme.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">{scheme.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        {language === 'hi' ? 'पात्रता:' : 'Eligibility:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{scheme.amount}</span>
                  </div>
                </div>

                <Button className="w-full mt-4">
                  {language === 'hi' ? 'आवेदन करें' : 'Apply Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};