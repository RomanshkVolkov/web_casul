import CatalogNav from './components/CatalogNav';

export default function LayoutCatalog({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-4 min-h-screen py-16 md:px-28 sm:px-5 bg-background">
         <div className="col-span-1/4 md:block sm:hidden xs:hidden ">
            <CatalogNav />
         </div>
         <div className="w-full md:col-span-5 sm:col-span-1">{children}</div>
      </div>
   );
}
