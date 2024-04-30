import { FetchResponse } from '@/api/fetcher';
import CatalogTypes from '@/types/catalog-types';

interface ErrorFetch {
   error?: string;
}

interface DataResponse<T> {
   data: T;
}

export default interface CatalogAPIResponse {
   GetProductsBySearch: {
      Request: {
         search: string;
      };
      FetchResponse: CatalogTypes['Product'][];
      Response: DataResponse<CatalogTypes['Product'][] & ErrorFetch>;
   };
   GetProductsByFilters: {
      Request: CatalogTypes['CatalogFilters'];
      FetchResponse: CatalogTypes['Product'][];
      Response: DataResponse<CatalogTypes['Product'][] & ErrorFetch>;
   };
   GetProductById: {
      Request: {
         id: number;
      };
      FetchResponse: CatalogTypes['ProductDetails'];
      Response: CatalogTypes['ProductDetails'] & ErrorFetch;
   };
   GetFilters: {
      Request: {};
      FetchResponse: CatalogTypes['Filters'];
      Response: CatalogTypes['Filters'] & ErrorFetch;
   };
}
