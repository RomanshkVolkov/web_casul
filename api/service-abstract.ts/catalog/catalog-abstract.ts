import Catalogtypes from '@/types/catalog';
import CatalogAPIResponse from './catalog-api-types';
import { FetchResponse } from '../../fetcher';

export default abstract class CatalogAPIAbstract {
   async getProducts(): Promise<FetchResponse<Catalogtypes['Product'][]>> {
      throw new Error('Not implemented');
   }
   async getProductsByCategory(
      _category: string
   ): Promise<FetchResponse<Catalogtypes['Product'][]>> {
      throw new Error('Not implemented');
   }
   async getProductsBySearch(
      params: CatalogAPIResponse['GetProductsBySearch']['Request']
   ): Promise<CatalogAPIResponse['GetProductsBySearch']['Response']> {
      throw new Error('Not implemented');
   }
   async getProductById(_id: number): Promise<FetchResponse<Catalogtypes['Product']>> {
      throw new Error('Not implemented');
   }
}
