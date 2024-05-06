import Service from '@/api-services/services/service';
import CatalogTypes from '@/types/catalog-types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const service = new Service();

export const fetchSearchProducts = createAsyncThunk<
  CatalogTypes['Product'][],
  { search: string; showToastError?: boolean },
  { rejectValue: string }
>('catalog/fetchSearchProducts', async ({ search }, { rejectWithValue }) => {
  const { data, error } = await service.catalog.getProductsBySearch({ search });
  if (error) return rejectWithValue(error);
  return data;
});

export const fetchSearchProductsByFilters = createAsyncThunk<
  CatalogTypes['Product'][],
  { filters: CatalogTypes['CatalogFilters']; showToastError?: boolean },
  { rejectValue: string }
>('catalog/fetchSearchProductsByFilters', async ({ filters }, { rejectWithValue }) => {
  const { data, error } = await service.catalog.getSearchProductsByFilters(filters);
  if (error) return rejectWithValue(error);
  return data;
});
