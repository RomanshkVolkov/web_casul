'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ImSun } from 'react-icons/im';
import { BsMoonStars } from 'react-icons/bs';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      classNames={{ startContent: 'text-foreground !bg-background', wrapper: 'border-2' }}
      startContent={<ImSun size={16} />}
      endContent={<BsMoonStars size={16} />}
      defaultChecked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
}
