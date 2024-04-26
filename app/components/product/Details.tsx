'use client';
import { Chip, Divider } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import ProductTable from './Table';

const Details = () => {
   const { theme } = useTheme();
   return (
      <div className="self-start">
         <Chip
            color={theme === 'dark' ? 'primary' : 'secondary'}
            variant="flat"
            className="text-right mb-1 mr-1 cursor-pointer"
         >
            MFC22043
         </Chip>
         <Chip
            color={theme === 'dark' ? 'primary' : 'secondary'}
            variant="flat"
            className="text-right mb-1 cursor-pointer"
         >
            MR1408110
         </Chip>
         <h1 className="text-xl mb-2">
            FAN CLUTCH BUICK REGAL V6 3.8 LTS 1980-1990 REGAL V8 4.3 LTS 1980-1990 REGAL V8 4.9 LTS
            1980-1990 ()
         </h1>

         <Divider className={`mt-1 mb-2 ${theme === 'dark' ? 'bg-primary' : 'bg-secondary'}`} />
         <div>
            <ProductTable />
         </div>
      </div>
   );
};

export default Details;
