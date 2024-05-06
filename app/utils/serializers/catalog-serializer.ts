import CatalogTypes from '@/types/catalog-types';

export const serializedPagination = (total: number, defaultPage: number, defaultLimit: number) => {
  const pages = Math.ceil(total / defaultLimit);
  const from = (defaultPage - 1) * defaultLimit;
  const to = defaultPage === pages ? from + (total % defaultLimit) : from + defaultLimit;
  console.log('serializedPagination', { total, defaultPage, defaultLimit, pages, from, to });
  return {
    page: defaultPage,
    pages,
    total,
    limit: defaultLimit,
    from: from,
    to,
  };
};

export const serializedImageUrl = (file: number, _urlBase: string) => {
  return `/api/products/${file}`;
};

export const serializedFiltersOptions = (
  options: any[],
  filterName: string,
  currentFilterValues: any
) => {
  const typeSerializer = {
    brand: (options: any) => options,
    model: (options: any) =>
      options.filter((option: any) => option.brandId === currentFilterValues.brand),
    family: (options: any) =>
      options
        .filter(
          (option: any) =>
            (option.brandId === currentFilterValues.brand || currentFilterValues.brand === 0) &&
            (option.modelId === currentFilterValues.model || currentFilterValues.model === 0)
        )
        .reduce((acc: any, current: any) => {
          if (!acc.find((item: any) => item.value === current.value)) {
            acc.push(current);
          }
          return acc;
        }, []),
    year: (options: any) => {
      const data = options.filter(
        (option: any) =>
          (option.brandId === currentFilterValues.brand || currentFilterValues.brand === 0) &&
          (option.modelId === currentFilterValues.model || currentFilterValues.model === 0) &&
          (option.familyId === currentFilterValues.family || currentFilterValues.family === 0)
      );
      const min = Math.min(...data.map((item: any) => item.min));
      const max = Math.max(...data.map((item: any) => item.max));
      return Array.from({ length: max - min + 1 }, (_, index) => ({
        value: min + index,
        label: `${min + index}`,
      }));
    },
  };
  try {
    return (typeSerializer as Record<string, (_options: any) => any>)[filterName](options);
  } catch (error) {
    return [];
  }
};

export const serializerProductOrdering = (
  products: CatalogTypes['Product'][],
  ordering: CatalogTypes['CatalogOrdering']
) => {
  const productsOrdering = [...products];
  const sortByName = (a: CatalogTypes['Product'], b: CatalogTypes['Product']) => {
    if (a.description < b.description) {
      return -1;
    }
    if (a.description > b.description) {
      return 1;
    }
    return 0;
  };

  switch (ordering) {
    case 'asc':
      return productsOrdering.sort(sortByName);
    case 'desc':
      return productsOrdering.sort(sortByName).reverse();
    default:
      return products;
  }
};
