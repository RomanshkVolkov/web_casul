'use client';
import { Card, CardBody, Chip, Divider, Tab, Tabs } from '@nextui-org/react';
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
            <div className="flex w-full flex-col">
               <Tabs aria-label="Options">
                  <Tab key="photos" title="Photos">
                     <Card>
                        <ProductTable />
                     </Card>
                  </Tab>
                  <Tab key="music" title="Music">
                     <Card>
                        <CardBody>
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                           ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                           pariatur.
                        </CardBody>
                     </Card>
                  </Tab>
                  <Tab key="videos" title="Videos">
                     <Card>
                        <CardBody>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum.
                        </CardBody>
                     </Card>
                  </Tab>
               </Tabs>
            </div>
         </div>
      </div>
   );
};

export default Details;
