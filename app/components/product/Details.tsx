import { Divider } from '@nextui-org/react';
import ProductTabs from './product-tabs';
import Keys from './keys';

const Details = async () => {
   await new Promise((resolve) => setTimeout(resolve, 10000));
   return (
      <>
         <Keys keys={['MR1408110', 'MFC22043']} />
         <h1 className="text-xl mb-2">
            FAN CLUTCH BUICK REGAL V6 3.8 LTS 1980-1990 REGAL V8 4.3 LTS 1980-1990 REGAL V8 4.9 LTS
            1980-1990 ()
         </h1>
         <Divider className="mt-1 mb-2 bg-secondary dark:bg-primary" />
         <div className="flex w-full flex-col">
            <ProductTabs />
         </div>
      </>
   );
};

export default Details;
