'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // 默认为深色主题

  useEffect(() => {
    // 检查当前主题状态
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (isDark) {
      // 切换到浅色主题
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      // 切换到深色主题
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50"
      aria-label={isDark ? '切换到浅色主题' : '切换到深色主题'}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </Button>
  );
}
