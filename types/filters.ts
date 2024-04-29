interface BrandFilter {
   value: number;
   label: string;
}

interface ModelFilter {
   value: number;
   label: string;
   brandId: number;
}

interface FamilyFilter {
   value: number;
   label: string;
   brandId: number;
   modelId: number;
}

interface YearFilter {
   value: number;
   label: string;
   brandId: number;
   modelId: number;
   familyId: number;
}

export interface FilterSource {
   brands: BrandFilter[];
   models: ModelFilter[];
   families: FamilyFilter[];
   years: YearFilter[];
}
