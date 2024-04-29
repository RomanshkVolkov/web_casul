import CatalogTypes from '@/types/catalog';
import fetchAPI from '../fetcher';
import CatalogAPIAbstract from '../service-abstract.ts/catalog/catalog-abstract';
import CatalogAPIResponse from '../service-abstract.ts/catalog/catalog-api-types';
import { serializedImageUrl } from '@/app/utils/serializers/catalog-serializer';

export default class CatalogAPI extends CatalogAPIAbstract {
   async getProducts() {
      return await fetchAPI<CatalogTypes['Product'][]>('/products');
   }

   async getProductsByCategory(category: string) {
      return await fetchAPI<CatalogTypes['Product'][]>(`/products/category/${category}`);
   }

   async getProductsBySearch(req: CatalogAPIResponse['GetProductsBySearch']['Request']) {
      const { content, error } = await fetchAPI<CatalogTypes['Product'][]>(
         `/casul/users/0/products?query=${req.search}`
      );
      const data = content?.map((product: any) => ({
         id: product.id_producto,
         sku: product.clave,
         description: product.descripcion,
         image: serializedImageUrl(product.id_producto),
      }));
      return { content: data || [], error };
   }

   async getSearchProductsByFilters(req: CatalogAPIResponse['GetProductsByFilters']['Request']) {
      const { brand, model, family, year } = req;
      const { content, error } = await fetchAPI<CatalogTypes['Product'][]>(
         `/casul/products/filters?brand=${brand}&model=${model}&family=${family}&year=${year}`
      );
      const data = content?.map((product: any) => ({
         ...product,
         image: serializedImageUrl(product.id_producto),
      }));
      return { content: data || [], error };
   }

   async getProductById(id: number) {
      return fetchAPI<CatalogTypes['Product']>(`/products/${id}`);
   }

   async getFilters() {
      const { content, error } = await fetchAPI<CatalogTypes['Filters']>(
         `/casul/filters`,
         'GET',
         {},
         20 * 60 * 1000
      );
      if (error) return { brands: [], models: [], families: [], years: [] };
      return content;
   }
}
