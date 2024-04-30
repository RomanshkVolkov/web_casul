'use client';

import { Button, Switch, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ImSun } from 'react-icons/im';
import { BsMoonStars } from 'react-icons/bs';

export function ThemeSwitcher() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   const tooltipTheme = theme === 'dark' ? 'tema claro' : 'tema oscuro';

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (
      <Switch
         color="secondary"
         startContent={<ImSun size={16} className="text-secondary" />}
         endContent={<BsMoonStars size={16} />}
         defaultChecked={theme === 'dark'}
         onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
   );
}
