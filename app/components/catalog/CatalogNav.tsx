import Filters from "../shared/inputs/Filters";

export default function CatalogNav() {
  return (
    <div className="col-span-1/4 xs:hidden sm:hidden md:block ">
      <div className="w-1/8 flex items-start justify-between rounded-xl bg-content1 p-4 shadow-lg dark:shadow-black/50">
        <div className="jutify-center flex w-full flex-col">
          <h1 className="mb-4 text-2xl font-bold">Filtros</h1>
          <Filters mode="aside" />
        </div>
      </div>
    </div>
  );
}
