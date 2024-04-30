import CatalogAPIResponse from './catalog-api-types';

export default abstract class CatalogAPIAbstract {
   async getProductsBySearch(
      req: CatalogAPIResponse['GetProductsBySearch']['Request']
   ): Promise<CatalogAPIResponse['GetProductsBySearch']['Response']> {
      throw new Error('Not implemented');
   }

   async getProductsByFilters(
      req: CatalogAPIResponse['GetProductsByFilters']['Request']
   ): Promise<CatalogAPIResponse['GetProductsByFilters']['Response']> {
      throw new Error('Not implemented');
   }

   async getProductById(
      req: CatalogAPIResponse['GetProductById']['Request']
   ): Promise<CatalogAPIResponse['GetProductById']['Response']> {
      throw new Error('Not implemented');
   }

   async getFilters(): Promise<CatalogAPIResponse['GetFilters']['Response']> {
      throw new Error('Not implemented');
   }
}
