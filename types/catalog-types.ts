import { FilterSource } from './filters';

interface Product {
   id: number;
   description: string;
   sku: string;
   brand: string;
   image: string;
}

interface CatalogFilters {
   brand: number | null;
   model: number | null;
   family: number | null;
   year: number | null;
}

type CatalogFiltersKeys = keyof CatalogFilters;

interface CatalogFilter {
   key: CatalogFiltersKeys;
   value: number | null;
}

interface SelectItem {
   value: number;
   label: string;
}

interface Applications {
   brand: string;
   model: string;
   year: string;
   version: string;
   comments: string;
}

interface Equivalences {
   id: number;
   sku: string;
   description: string;
   brand: string;
}

interface ProductDetails {
   product: Product | null;
   applications: Applications[];
   equivalences: Equivalences[];
}

type CatalogOrdering = 'asc' | 'desc' | 'default';

export default interface CatalogTypes {
   Product: Product;
   CatalogFilters: CatalogFilters;
   CatalogOrdering: CatalogOrdering;
   CatalogFiltersKeys: CatalogFiltersKeys;
   CatalogFilter: CatalogFilter;
   SelectItem: SelectItem;
   Filters: FilterSource;
   Applications: Applications;
   Equivalences: Equivalences;
   ProductDetails: ProductDetails;
}
