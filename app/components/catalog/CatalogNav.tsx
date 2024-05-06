import Filters from '@/app/components/shared/inputs/Filters';

export default function CatalogNav() {
  return (
    <div className="col-span-1/4 md:block sm:hidden xs:hidden ">
      <div className="flex justify-between items-start p-4 bg-content1 rounded-xl w-1/8 shadow-lg dark:shadow-black/50">
        <div className="w-full flex flex-col jutify-center">
          <h1 className="text-2xl font-bold">Filtros</h1>
          <Filters />
        </div>
      </div>
    </div>
  );
}
