type FetchMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE' | null;
export interface FetchResponse<T> {
  ok: boolean;
  status: number;
  contentType: string;
  content: T;
  url: string;
  error?: string;
}
const prefixApi = '/api/v1';
export const urlAPI = `${process.env.URL_API || 'http://localhost:7001'}${prefixApi}`;

const serializedLogRequest = (url: string, method: FetchMethods, body: any) => {
  console.log(`Request: ${method}: ${url}`);
  if (body) console.log('Payload:', body);
};
export default async function fetchAPI<T, RES = FetchResponse<T>, Payload = unknown>(
  url: string,
  method: FetchMethods = 'GET',
  body: Payload = {} as Payload,
  revalidate: number | false = false
): Promise<RES> {
  try {
    const urlRequest = `${urlAPI}${url}`;
    const isDev = process.env.NODE_ENV?.includes('dev');
    if (isDev) serializedLogRequest(urlRequest, method, body);
    const bodyParser = method === 'GET' ? null : JSON.stringify(body);
    const nextRevalidate =
      revalidate && typeof revalidate === 'number' ? { next: { revalidate } } : {};
    const fetchOptions = {
      ...nextRevalidate,
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
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
      // Puedes agregar más handlers según sea necesario.
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
    if (isDev) console.log('content', content);
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
