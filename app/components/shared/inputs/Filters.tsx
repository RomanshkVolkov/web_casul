import service from '@/api/services/service';
import FilterActions from './FilterActions';
import FilterSelect from './FilterSelect';

async function getFilters() {
   const filters = await service.catalog.getFilters();
   return filters;
}

export default async function Filters() {
   const filters = await getFilters();
   const brands = [
      { value: 1, label: 'BMW' },
      { value: 2, label: 'Audi' },
      { value: 3, label: 'Mercedes Benz' },
   ];
   const models = [
      { value: 1, label: 'Serie 3' },
      { value: 2, label: 'Serie 5' },
      { value: 3, label: 'Serie 7' },
   ];

   const families = [
      { value: 1, label: 'Sedan' },
      { value: 2, label: 'Coupe' },
      { value: 3, label: 'Convertible' },
   ];

   const years = [
      { value: 1, label: '2020' },
      { value: 2, label: '2021' },
      { value: 3, label: '2022' },
   ];

   return (
      <div className="grid w-full p-4 gap-4">
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
