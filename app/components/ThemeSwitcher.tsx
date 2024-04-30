// app/components/ThemeSwitcher.tsx
'use client';

import { Button, Tooltip } from '@nextui-org/react';
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
      <Tooltip content={`Cambiar a ${tooltipTheme}`} placement="bottom">
         <Button
            className="bg-transparent !px-0 !w-[24px]"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
         >
            {theme === 'dark' ? (
               <ImSun size={24} className="text-secondary" />
            ) : (
               <BsMoonStars size={24} />
            )}
         </Button>
      </Tooltip>
   );
}
