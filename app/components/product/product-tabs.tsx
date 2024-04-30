'use client';
import { Tabs, Tab } from '@nextui-org/react';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCarBurst } from 'react-icons/fa6';
import ProductTable from './table';

export default function ProductTabs() {
   return (
      <Tabs
         classNames={{
            tabList: 'p-0',
         }}
         aria-label="Opciones"
         variant="light"
         fullWidth
      >
         <Tab
            key="applications"
            title={
               <div className="flex items-center space-x-2">
                  <FaCarBurst size={24} />
                  <span>Aplicaciones</span>
               </div>
            }
         >
            <ProductTable />
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
            <ProductTable />
         </Tab>
      </Tabs>
   );
}
