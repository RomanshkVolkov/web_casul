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
    const buffer = await image.arrayBuffer();
    const resizedImage = await sharp(Buffer.from(buffer)).webp().toBuffer();

    return new Response(resizedImage, {
      headers: {
        'Content-Type': 'image/webp',
      },
    });
  } catch (e) {
    return new Response(null, { status: 404 });
  }
}
