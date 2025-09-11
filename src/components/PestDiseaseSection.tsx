import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bug, Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

interface PestDiseaseSectionProps {
  language: string;
}

export const PestDiseaseSection = ({ language }: PestDiseaseSectionProps) => {
  const pests = language === 'hi' ? [
    {
      name: "तना छेदक कीट",
      crop: "धान",
      symptoms: "पत्तियों का पीला होना, तने में छेद",
      solution: "फेरोमोन ट्रैप का उपयोग करें",
      severity: "मध्यम"
    },
    {
      name: "फल मक्खी",
      crop: "आम",
      symptoms: "फलों में छेद, सड़ना",
      solution: "मिथाइल यूजेनॉल ट्रैप लगाएं",
      severity: "उच्च"
    }
  ] : [
    {
      name: "Stem Borer",
      crop: "Rice",
      symptoms: "Yellowing of leaves, holes in stem",
      solution: "Use pheromone traps",
      severity: "Medium"
    },
    {
      name: "Fruit Fly",
      crop: "Mango",
      symptoms: "Holes in fruits, rotting",
      solution: "Install methyl eugenol traps",
      severity: "High"
    }
  ];

  const diseases = language === 'hi' ? [
    {
      name: "ब्लास्ट रोग",
      crop: "धान",
      symptoms: "पत्तियों पर भूरे धब्बे",
      solution: "ट्राइसाइक्लाजोल का छिड़काव",
      severity: "उच्च"
    },
    {
      name: "पाउडरी मिल्ड्यू",
      crop: "गेहूं",
      symptoms: "पत्तियों पर सफेद पाउडर",
      solution: "सल्फर का छिड़काव करें",
      severity: "मध्यम"
    }
  ] : [
    {
      name: "Blast Disease",
      crop: "Rice",
      symptoms: "Brown spots on leaves",
      solution: "Spray tricyclazole",
      severity: "High"
    },
    {
      name: "Powdery Mildew",
      crop: "Wheat",
      symptoms: "White powder on leaves",
      solution: "Spray sulfur solution",
      severity: "Medium"
    }
  ];

  const pesticides = language === 'hi' ? [
    {
      name: "क्लोरपायरीफॉस",
      type: "कीटनाशक",
      crops: "धान, गेहूं, कपास",
      dosage: "2 मिली/लीटर पानी"
    },
    {
      name: "मैंकोज़ेब",
      type: "फफूंदनाशक", 
      crops: "आलू, टमाटर",
      dosage: "2 ग्राम/लीटर पानी"
    }
  ] : [
    {
      name: "Chlorpyrifos",
      type: "Insecticide",
      crops: "Rice, Wheat, Cotton",
      dosage: "2 ml/liter water"
    },
    {
      name: "Mancozeb",
      type: "Fungicide",
      crops: "Potato, Tomato",
      dosage: "2 gm/liter water"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'hi' ? 'कीट एवं रोग प्रबंधन' : 'Pest & Disease Management'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'फसल की सुरक्षा के लिए विशेषज्ञ सुझाव' 
              : 'Expert recommendations for crop protection'
            }
          </p>
        </div>

        <Tabs defaultValue="pests" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pests" className="gap-2">
              <Bug className="w-4 h-4" />
              {language === 'hi' ? 'कीट' : 'Pests'}
            </TabsTrigger>
            <TabsTrigger value="diseases" className="gap-2">
              <AlertTriangle className="w-4 h-4" />
              {language === 'hi' ? 'रोग' : 'Diseases'}
            </TabsTrigger>
            <TabsTrigger value="pesticides" className="gap-2">
              <Droplets className="w-4 h-4" />
              {language === 'hi' ? 'दवाएं' : 'Pesticides'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pests" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pests.map((pest, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {pest.name}
                      <span className={`text-sm px-2 py-1 rounded ${
                        pest.severity === 'उच्च' || pest.severity === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {pest.severity}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>{language === 'hi' ? 'फसल:' : 'Crop:'}</strong> {pest.crop}</p>
                    <p><strong>{language === 'hi' ? 'लक्षण:' : 'Symptoms:'}</strong> {pest.symptoms}</p>
                    <p><strong>{language === 'hi' ? 'समाधान:' : 'Solution:'}</strong> {pest.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diseases" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diseases.map((disease, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {disease.name}
                      <span className={`text-sm px-2 py-1 rounded ${
                        disease.severity === 'उच्च' || disease.severity === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {disease.severity}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>{language === 'hi' ? 'फसल:' : 'Crop:'}</strong> {disease.crop}</p>
                    <p><strong>{language === 'hi' ? 'लक्षण:' : 'Symptoms:'}</strong> {disease.symptoms}</p>
                    <p><strong>{language === 'hi' ? 'समाधान:' : 'Solution:'}</strong> {disease.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pesticides" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pesticides.map((pesticide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{pesticide.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>{language === 'hi' ? 'प्रकार:' : 'Type:'}</strong> {pesticide.type}</p>
                    <p><strong>{language === 'hi' ? 'फसलें:' : 'Crops:'}</strong> {pesticide.crops}</p>
                    <p><strong>{language === 'hi' ? 'मात्रा:' : 'Dosage:'}</strong> {pesticide.dosage}</p>
                    <Button size="sm" className="gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {language === 'hi' ? 'उपयोग गाइड' : 'Usage Guide'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};