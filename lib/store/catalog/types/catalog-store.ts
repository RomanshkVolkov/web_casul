import CatalogTypes from '@/types/catalog';
import CommonTypes from '@/types/common';

export interface CatalogState {
   products: CatalogTypes['Product'][];
   loading: boolean;
   pagination: CommonTypes['Pagination'];
   filters: CatalogTypes['CatalogFilters'];
   ordering: CatalogTypes['CatalogOrdering'];
}

export const initialState: CatalogState = {
   products: [],
   loading: false,
   pagination: {
      page: 1,
      pages: 1,
      total: 0,
      limit: 8,
      from: 0,
      to: 8,
   },
   filters: {
      brand: 0,
      model: 0,
      family: 0,
      year: 0,
   },
   ordering: 'default',
};
