import CatalogTypes from '@/types/catalog';

export default interface CatalogAPIResponse {
   GetProductsBySearch: {
      Request: {
         search: string;
      };
      Response: {
         content: CatalogTypes['Product'][];
         error?: string;
      };
   };
   GetProductsByFilters: {
      Request: CatalogTypes['CatalogFilters'];
      Response: {
         content: CatalogTypes['Product'][];
         error?: string;
      };
   };
}
