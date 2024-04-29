'use client';
import { Card, Divider, Tab, Tabs } from '@nextui-org/react';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCarBurst } from 'react-icons/fa6';
import ProductTable from './Table';
import Keys from './Keys';

const Details = () => {
   return (
      <>
         <Keys keys={['MR1408110', 'MFC22043']} />
         <h1 className="text-xl mb-2">
            FAN CLUTCH BUICK REGAL V6 3.8 LTS 1980-1990 REGAL V8 4.3 LTS 1980-1990 REGAL V8 4.9 LTS
            1980-1990 ()
         </h1>
         <Divider className="mt-1 mb-2 bg-secondary dark:bg-primary" />
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
      </>
   );
};

export default Details;
