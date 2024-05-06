import CatalogAPI from './catalog-service';

// eslint-disable-next-line import/no-anonymous-default-export
export default class Service {
  private readonly urlApiBase: string;
  public readonly catalog: CatalogAPI;

  constructor() {
    const prefix = '/api/v1';
    const urlApiBase = `${process.env.URL_API || 'http://localhost:7001'}${prefix}`;
    this.urlApiBase = urlApiBase;
    this.catalog = new CatalogAPI(urlApiBase);
  }
}
