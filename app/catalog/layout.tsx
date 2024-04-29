import CatalogNav from "./components/CatalogNav";

export default function LayoutCatalog({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="grid grid-cols-6 gap-4 min-h-screen py-16 px-28 bg-background">
            <div className="col-span-1/4 md:inline sm:hidden ">
                <CatalogNav />
            </div>
            <div className="w-full md:col-span-5 sm:col-span-6">
                {children}
            </div>
        </div>
    );
}