import Image from "next/image";
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
      className={`relative flex items-center justify-center rounded-md border bg-white hover:opacity-30 xs:h-[50px] xs:w-[50px] xs:max-w-[50px] md:h-[80px] md:w-[80px] md:max-w-[80px] ${
        isActive ? "border-2 border-black dark:border-orange-400" : ""
      }`}
      role="button"
      onClick={onImageClick}
    >
      <Image
        className="absolute block h-full w-full rounded-md object-scale-down "
        alt="Vista alternativa del producto en miniatura"
        src={image}
        width={80}
        height={80}
        objectFit="scale-down"
      />
    </div>
  );
}
