'use client';
import { Tabs, Tab, Card } from '@nextui-org/react';
import { FaBalanceScale } from 'react-icons/fa';
import { FaCarBurst } from 'react-icons/fa6';
import ProductTable from './table';

const ProductTabs = () => {
   return (
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
   );
};

export default ProductTabs;
