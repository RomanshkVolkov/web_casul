export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const baseImageUrl = 'https://imagenesbeta.blob.core.windows.net/imagenes/';
  let imagesPromises = [];

  for (let i = 2; i <= 4; i++) {
    const imageUrl = `${baseImageUrl}${id}_${i}.jpg`;
    imagesPromises.push(
      fetch(imageUrl, { method: 'HEAD' })
        .then((res) => {
          if (res.ok) {
            return imageUrl;
          }
          return null;
        })
        .catch(() => null)
    );
  }

  try {
    const images = await Promise.all(imagesPromises);
    const validImages = images.filter((image) => image);
    return Response.json({ images: validImages });
  } catch (e) {
    console.error('Error checking images:', e);
    return Response.json({ images: [] });
  }
}
