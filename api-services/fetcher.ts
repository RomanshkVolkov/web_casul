type FetchMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE' | null;
export interface FetchResponse<T> {
  ok: boolean;
  status: number;
  contentType: string;
  content: T;
  url: string;
  error?: string;
}

export default class API {
  private readonly UrlBase: string;

  constructor(urlBase: string) {
    this.UrlBase = urlBase;
  }

  private readonly serializedLogRequest = (url: string, method: FetchMethods, body: any) => {
    console.debug(`Request: ${method}: ${url}`);
    if (body) console.info('Payload:', body);
  };

  private readonly serializedLogResponse = (response: FetchResponse<any>) => {
    const {content} = response;
    console.debug(`Response: ${response.status} ${response.url}`);
    if (typeof content === 'object') {
      Object.keys(content).forEach((key) => {
        if (Array.isArray(content[key])) {
          console.debug(`${key}:`);
          console.table(content[key].slice(0, 5));
        } else if (typeof content[key] === 'object') {
          console.debug(`${key}:`);
          console.table(content[key]);
        } else {
          console.debug(`${key}: ${content[key]}`);
        }
      })
    } else if (Array.isArray(content)) {
      console.table(content.slice(0, 5));
    } else {
      console.debug(content);
    }
  }

  async fetch<T, RES = FetchResponse<T>, Payload = unknown>(
    url: string,
    method: FetchMethods = 'GET',
    body: Payload = {} as Payload,
    revalidate: number | false = false
  ): Promise<RES> {
    try {
      const urlRequest = `${this.UrlBase}${url}`;
      const isDev = process.env.NODE_ENV?.includes('dev');
      if (isDev) this.serializedLogRequest(urlRequest, method, body);
      const bodyParser = method === 'GET' ? null : JSON.stringify(body);
      const nextRevalidate =
        revalidate && typeof revalidate === 'number' ? { next: { revalidate } } : {};
      const fetchOptions = {
        ...nextRevalidate,
        method: method || 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyParser,
      };
      if (method === 'GET') {
        delete (fetchOptions as { body?: unknown }).body;
      }

      const response = await fetch(urlRequest, fetchOptions);
      const contentType = response.headers.get('Content-Type');

      // Mapeo de tipos de contenido a funciones de procesamiento
      const contentHandlers = {
        'application/json': (res: Response) => res.json(),
        'text/html': (res: Response) => res.text(),
        'text/plain': (res: Response) => res.text(),
        'form-data': (res: Response) => res.formData(),
        'image/webp': (res: Response) => res.blob(),
      };

      let content: T | string | null = null;
      if (response.ok) {
        // Encuentra el handler basado en el Content-Type
        const handler = Object.keys(contentHandlers).find((key) =>
          contentType?.includes(key)
        ) as keyof typeof contentHandlers;
        
        // Procesa la respuesta con el handler correspondiente
        if (!handler) console.warn(`No handler found for content type: ${contentType}`);
        content =
          handler && contentHandlers[handler]
            ? await contentHandlers[handler](response)
            : await response.text();
      } else {
        content = await response.text();
        throw new Error(
          `HTTP Error: ${response.status} ${response.statusText}, Details: ${response.url}, Payload: ${body}`
        );
      }

      if (isDev) {
        const print = 'Empty content';
        if (isDev){
          if (content) {
            this.serializedLogResponse({ ok: response.ok, status: response.status, contentType: contentType || '', content, url: response.url });
          } else {
            console.debug(print);
          }
        }
      } 

      return {
        ok: response.ok,
        status: response.status,
        contentType,
        content,
        url: response.url,
      } as RES;
    } catch (error: any) {
      console.error('Error fetching data:', error);
      return {
        ok: false,
        status: 500,
        contentType: 'error',
        content: null,
        error: error?.message,
        url,
      } as RES;
    }
  }
}
