'use client';
import { Card, Chip, Divider, Tab, Tabs } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCarBurst } from 'react-icons/fa6';
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
            <div className="flex w-full flex-col">
               <Tabs aria-label="Opciones" fullWidth variant="light">
                  <Tab
                     key="applications"
                     title={
                        <div className="flex items-center space-x-2">
                           <FaCarBurst size={24} />
                           <span>Aplicaciones</span>
                        </div>
                     }
                  >
                     <Card>
                        <ProductTable />
                     </Card>
                  </Tab>
                  <Tab
                     key="equivalences"
                     title={
                        <div className="flex items-center space-x-2">
                           <FaBalanceScale size={20} />
                           <span>Equivalencias</span>
                        </div>
                     }
                  >
                     <Card>
                        <ProductTable />
                     </Card>
                  </Tab>
               </Tabs>
            </div>
         </div>
      </div>
   );
};

export default Details;
