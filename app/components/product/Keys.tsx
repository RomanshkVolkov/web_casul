'use client';
import { Chip } from '@nextui-org/react';
import { useTheme } from 'next-themes';

const Keys = ({ keys }: { keys: string[] }) => {
   const { theme } = useTheme();
   return (
      <>
         {keys.map((key) => (
            <Chip
               key={key}
               color={theme === 'dark' ? 'primary' : 'secondary'}
               variant="flat"
               className="text-right mb-1 mr-1 cursor-pointer"
            >
               {key}
            </Chip>
         ))}
      </>
   );
};

export default Keys;
