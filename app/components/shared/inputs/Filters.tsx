import Service from "@/api-services/services/service";
import FilterActions from "./FilterActions";
import FilterSelect from "./FilterSelect";

const service = new Service();

async function getFilters() {
  const filters = await service.catalog.getFilters();
  return filters;
}

export default async function Filters({
  mode = "main",
}: {
  mode?: "aside" | "main";
}) {
  const filters = await getFilters();

  return (
    <div className="w-full">
      <div
        className={`mb-4 flex w-full flex-col gap-2  ${mode === "aside" ? "flex-col" : "md:flex-row"}`}
      >
        <FilterSelect
          id="brand-filter"
          name="brand"
          placeholder="Marca"
          options={filters.brands}
          ariaLabel="Marca de vehículo"
          size={mode === "aside" ? "md" : "lg"}
        />
        <FilterSelect
          id="model-filter"
          name="model"
          placeholder="Modelo"
          options={filters.models}
          ariaLabel="Modelo de vehículo"
          size={mode === "aside" ? "md" : "lg"}
        />
        <FilterSelect
          id="family-filter"
          name="family"
          placeholder="Familia"
          options={filters.families}
          ariaLabel="Familia de vehículo"
          size={mode === "aside" ? "md" : "lg"}
        />
        <FilterSelect
          id="year-filter"
          name="year"
          placeholder="Año"
          options={filters.years}
          ariaLabel="Año de vehículo"
          size={mode === "aside" ? "md" : "lg"}
        />
      </div>

      <FilterActions mode={mode} />
    </div>
  );
}
