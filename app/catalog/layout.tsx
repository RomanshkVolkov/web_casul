import CatalogNav from '../components/catalog/CatalogNav';

export default function LayoutCatalog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-4 min-h-screen sm:py-16 xs:py-5 md:px-28 sm:px-5 bg-background">
      <CatalogNav />
      <div className="w-full md:col-span-5 sm:col-span-1">{children}</div>
    </div>
  );
}
