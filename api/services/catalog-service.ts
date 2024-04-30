import fetchAPI from '../fetcher';
import CatalogAPIAbstract from '../service-abstract.ts/catalog/catalog-abstract';
import CatalogAPIResponse from '../service-abstract.ts/catalog/catalog-api-types';
import { serializedImageUrl } from '@/app/utils/serializers/catalog-serializer';

export default class CatalogAPI extends CatalogAPIAbstract {
  async getProductsBySearch(req: CatalogAPIResponse['GetProductsBySearch']['Request']) {
    const { content, error } = await fetchAPI<
      CatalogAPIResponse['GetProductsBySearch']['FetchResponse']
    >(`/casul/users/0/products?query=${req.search}`);
    if (error || !content) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        id: product.id_producto,
        sku: product.clave,
        description: product.descripcion,
        brand: product.marca,
        image: serializedImageUrl(product.id_producto),
      })) || [];
    return { data };
  }

  async getSearchProductsByFilters(req: CatalogAPIResponse['GetProductsByFilters']['Request']) {
    const { brand, model, family, year } = req;
    const { content, error } = await fetchAPI<
      CatalogAPIResponse['GetProductsByFilters']['FetchResponse']
    >(`/casul/products/filters?brand=${brand}&model=${model}&family=${family}&year=${year}`);
    if (error || !content) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        ...product,
        image: serializedImageUrl(product.id),
      })) || [];
    return { data, error };
  }

  async getProductById(req: CatalogAPIResponse['GetProductById']['Request']) {
    const { id } = req;
    const { content, error } = await fetchAPI<
      CatalogAPIResponse['GetProductById']['FetchResponse']
    >(`/casul/products/${id}`);
    if (
      error ||
      !content ||
      (content.product && Object.keys(content.product).length === 0) ||
      !content.product
    )
      return {
        product: null,
        applications: [],
        equivalences: [],
        error,
      };

    const { product, equivalences: rawEquivalences, ...rest } = content;
    product.image = serializedImageUrl(product.id);
    const equivalences = rawEquivalences.filter((equivalence: any) => equivalence.id !== 0);
    return { product, equivalences, ...rest };
  }

  async getFilters() {
    const { content, error } = await fetchAPI<CatalogAPIResponse['GetFilters']['FetchResponse']>(
      `/casul/filters`,
      'GET',
      {},
      20 * 60 * 1000
    );
    if (error || !content || !Array.isArray(content.brands))
      return { brands: [], models: [], families: [], years: [], error };
    return content;
  }

  async getNewProducts() {
    const { content, error } = await fetchAPI<
      CatalogAPIResponse['GetNewProducts']['FetchResponse']
    >(`/casul/products/news`, 'GET', {}, 20 * 60 * 1000);

    if (error || !content) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        ...product,
        image: serializedImageUrl(product.id),
      })) || [];
    return { data };
  }
}
