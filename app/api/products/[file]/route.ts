import sharp from 'sharp';

interface Params {
  params: {
    file: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { file } = params;
  const urlImage = `https://imagenesbeta.blob.core.windows.net/imagenes/${file}.jpg`;

  const image = await fetch(urlImage);

  try {
    if (!image.ok) {
      throw new Error('404');
    }
    const buffer = await image.arrayBuffer();
    const resizedImage = await sharp(Buffer.from(buffer)).webp().toBuffer();

    return new Response(resizedImage, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Control-Cache': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e: any) {
    if (e.message === '404') {
      return new Response(null, {
        status: 404,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}
