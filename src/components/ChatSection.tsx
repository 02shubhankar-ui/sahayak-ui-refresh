import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, User, Bot } from 'lucide-react';

interface ChatSectionProps {
  language: string;
}

export const ChatSection = ({ language }: ChatSectionProps) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: language === 'hi' 
        ? 'नमस्ते! मैं आपकी कृषि संबंधी समस्याओं में सहायता कर सकता हूं।'
        : 'Hello! I can help you with your agricultural queries.'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: 'user', content: message }]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: language === 'hi' 
            ? 'धन्यवाद! आपका संदेश प्राप्त हुआ है। हमारे विशेषज्ञ जल्द ही आपसे संपर्क करेंगे।'
            : 'Thank you! Your message has been received. Our experts will contact you soon.'
        }]);
      }, 1000);
    }
  };

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'hi' ? 'फीडबैक चैट' : 'Feedback Chat'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'अपनी समस्या साझा करें और तुरंत सहायता पाएं' 
              : 'Share your problems and get instant help'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                {language === 'hi' ? 'लाइव चैट सपोर्ट' : 'Live Chat Support'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64 overflow-y-auto bg-secondary/50 rounded-lg p-4 space-y-3">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.type === 'user' ? 'bg-primary text-white' : 'bg-muted'
                      }`}>
                        {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        msg.type === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-white border'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Textarea
                  placeholder={language === 'hi' ? 'अपना संदेश लिखें...' : 'Type your message...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button onClick={handleSendMessage} className="gap-2">
                  <Send className="w-4 h-4" />
                  {language === 'hi' ? 'भेजें' : 'Send'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>{language === 'hi' ? 'फीडबैक फॉर्म' : 'Feedback Form'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'hi' ? 'नाम' : 'Name'}
                </label>
                <Input
                  placeholder={language === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'hi' ? 'ईमेल' : 'Email'}
                </label>
                <Input
                  type="email"
                  placeholder={language === 'hi' ? 'आपका ईमेल' : 'Your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'hi' ? 'फीडबैक' : 'Feedback'}
                </label>
                <Textarea
                  placeholder={language === 'hi' ? 'अपना फीडबैक यहां लिखें...' : 'Write your feedback here...'}
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full">
                {language === 'hi' ? 'फीडबैक भेजें' : 'Submit Feedback'}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {language === 'hi' 
                  ? '24/7 सहायता उपलब्ध | फ्री कॉल: 1800-XXX-XXXX'
                  : '24/7 Support Available | Free Call: 1800-XXX-XXXX'
                }
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};