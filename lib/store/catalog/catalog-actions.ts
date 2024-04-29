import service from '@/api/services/service';
import CatalogTypes from '@/types/catalog';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchProducts = createAsyncThunk<
   CatalogTypes['Product'][],
   { search: string; showToastError?: boolean },
   { rejectValue: string }
>('catalog/fetchSearchProducts', async ({ search }, { rejectWithValue }) => {
   const { content, error } = await service.catalog.getProductsBySearch({ search });
   if (error) return rejectWithValue(error);
   return content;
});

export const fetchSearchProductsByFilters = createAsyncThunk<
   CatalogTypes['Product'][],
   { filters: CatalogTypes['CatalogFilters']; showToastError?: boolean },
   { rejectValue: string }
>('catalog/fetchSearchProductsByFilters', async ({ filters }, { rejectWithValue }) => {
   const { content, error } = await service.catalog.getSearchProductsByFilters(filters);
   if (error) return rejectWithValue(error);
   return content;
});
