import sharp from 'sharp';

interface Params {
  params: {
    file: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { file } = params;
  const urlImage = `https://imagenesbeta.blob.core.windows.net/imagenes/${file}.jpg`;

  const image = await fetch(urlImage, {
    next: { revalidate: 60 * 120 * 2}
  });

  const headers = new Headers();
  headers.set('Cache-Control', 'public, max-age=14400, immutable');
  headers.set('Content-Type', 'image/webp');

  try {
    if (!image.ok) {
      throw new Error('404');
    }
    const buffer = await image.arrayBuffer();
    const optimizedImage = await sharp(Buffer.from(buffer)).webp().toBuffer();

    return new Response(optimizedImage, {
      status: 200,
      headers
    });
  } catch (e: any) {
    if (e.message === '404') {
      return new Response(null, {
        status: 404,
        headers
      });
    }
    return new Response(null, {
      status: 500,
      headers
    });
  }
}
