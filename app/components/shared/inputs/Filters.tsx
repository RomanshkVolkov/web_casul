import Service from '@/api-services/services/service';
import FilterActions from './FilterActions';
import FilterSelect from './FilterSelect';

const service = new Service();

async function getFilters() {
  const filters = await service.catalog.getFilters();
  return filters;
}

export default async function Filters() {
  const filters = await getFilters();

  return (
    <div className="grid w-full p-1 gap-4">
      <FilterSelect
        id="brand-filter"
        name="brand"
        placeholder="Marca"
        options={filters.brands}
        className="w-full"
        ariaLabel="Marca de vehículo"
      />
      <FilterSelect
        id="model-filter"
        name="model"
        placeholder="Modelo"
        options={filters.models}
        className="w-full"
        ariaLabel="Modelo de vehículo"
      />
      <FilterSelect
        id="family-filter"
        name="family"
        placeholder="Familia"
        options={filters.families}
        className="w-full"
        ariaLabel="Familia de vehículo"
      />
      <FilterSelect
        id="year-filter"
        name="year"
        placeholder="Año"
        options={filters.years}
        className="w-full"
        ariaLabel="Año de vehículo"
      />
      <FilterActions />
    </div>
  );
}
