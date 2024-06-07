import API from '../fetcher';
import CatalogAPIAbstract from '../service-abstract.ts/catalog/catalog-abstract';
import CatalogAPIResponse from '../service-abstract.ts/catalog/catalog-api-types';
import { serializedImageUrl } from '@/app/utils/serializers/catalog-serializer';

export default class CatalogAPI extends CatalogAPIAbstract {
  private readonly urlApiBase: string;
  private readonly urlBlob: string;
  private readonly api: API;

  constructor(urlApiBase: string, urlBlob: string) {
    super();
    this.urlApiBase = urlApiBase;
    this.api = new API(this.urlApiBase);
    this.urlBlob = urlBlob;
  }

  async getProductsBySearch(req: CatalogAPIResponse['GetProductsBySearch']['Request']) {
    const { content, error } = await this.api.fetch<
      CatalogAPIResponse['GetProductsBySearch']['FetchResponse']
    >(`/casul/users/0/products?query=${req.search}`);
    if (error || !content) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        id: product.id_producto,
        sku: product.clave,
        description: product.descripcion,
        brand: product.marca,
        image: serializedImageUrl(product.id_producto, this.urlBlob),
      })) || [];
    return { data };
  }

  async getSearchProductsByFilters(req: CatalogAPIResponse['GetProductsByFilters']['Request']) {
    const { brand, model, family, year } = req;
    const { content, error } = await this.api.fetch<
      CatalogAPIResponse['GetProductsByFilters']['FetchResponse']
    >(`/casul/products/filters?brand=${brand}&model=${model}&family=${family}&year=${year}`);
    if (error || !content) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        ...product,
        image: serializedImageUrl(product.id, this.urlBlob),
      })) || [];
    return { data, error };
  }

  async getProductById(req: CatalogAPIResponse['GetProductById']['Request']) {
    const { id } = req;
    const { content, error } = await this.api.fetch<
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
    product.image = serializedImageUrl(product.id, this.urlBlob);
    const equivalences = rawEquivalences.filter((equivalence: any) => equivalence.id !== 0);
    return { product, equivalences, ...rest };
  }

  async getFilters() {
    const { content, error } = await this.api.fetch<
      CatalogAPIResponse['GetFilters']['FetchResponse']
    >(`/casul/filters`, 'GET', {}, 20 * 60 * 1000);
    if (error || !content || !Array.isArray(content.brands))
      return { brands: [], models: [], families: [], years: [], error };
    return content;
  }

  async getNewProducts() {
    const { content, error } = await this.api.fetch<
      CatalogAPIResponse['GetNewProducts']['FetchResponse']
    >(`/casul/products/news`, 'GET', {}, 20 * 60 * 1000);

    if (error || !content || !Array.isArray(content)) return { data: [], error };
    const data =
      content?.map((product: any) => ({
        ...product,
        image: serializedImageUrl(product.id, this.urlBlob),
      })) || [];
    return { data };
  }
}
