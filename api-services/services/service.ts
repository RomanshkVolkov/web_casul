import CatalogAPI from './catalog-service';

// eslint-disable-next-line import/no-anonymous-default-export
export default class Service {
  private readonly urlApiBase: string;
  private readonly urlBlob: string;
  public readonly catalog: CatalogAPI;

  constructor() {
    this.urlApiBase = process.env.API_URL || 'http://localhost:7001';
    this.urlBlob = process.env.AZURE_BLOB_URL || 'https://imagenesbeta.blob.core.windows.net';
    this.catalog = new CatalogAPI(this.urlApiBase, this.urlBlob);
  }
}
