import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, User, Menu, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface HeaderProps {
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

export const Header = ({ onLanguageChange, currentLanguage }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {currentLanguage === 'hi' ? 'स्मार्ट कृषि' : 'Smart Krishi'}
              </h1>
              <p className="text-sm text-primary-foreground/80">
                {currentLanguage === 'hi' ? 'स्मार्ट खेती का साथी' : 'Smart Farming Companion'}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={currentLanguage === 'hi' ? 'खोजें...' : 'Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:bg-white/10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Selector */}
            <Select value={currentLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <Globe className="w-4 h-4 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>

            {/* Login Button */}
            <Button variant="secondary" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              {currentLanguage === 'hi' ? 'लॉगिन' : 'Login'}
            </Button>

            {/* Menu Button */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};