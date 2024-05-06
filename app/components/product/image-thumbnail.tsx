import Image from 'next/image';
export default function ImageThumbnail({
  isActive,
  image,
  onImageClick,
}: {
  isActive: boolean;
  image: string;
  onImageClick: () => void;
}) {
  return (
    <div
      className={`xs:max-w-[50px] xs:w-[50px] xs:h-[50px] md:max-w-[80px] md:w-[80px] md:h-[80px] bg-white rounded-md flex justify-center items-center border relative hover:opacity-30 ${
        isActive ? 'border-2 border-black dark:border-orange-400' : ''
      }`}
      role="button"
      onClick={onImageClick}
    >
      <Image
        className="block object-scale-down w-full h-full absolute rounded-md "
        alt="Vista alternativa del producto en miniatura"
        src={image}
        width={80}
        height={80}
        objectFit="scale-down"
      />
    </div>
  );
}
