import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogState, initialState } from './types/catalog-store';
import { fetchSearchProducts, fetchSearchProductsByFilters } from './catalog-actions';
import { serializedPagination } from '@/app/utils/serializers/catalog-serializer';
import CatalogTypes from '@/types/catalog-types';
import { clear } from 'console';

export const catalogSlice = createSlice({
   name: 'catalog',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<CatalogState['products']>) => {
         state.products = action.payload;
      },
      setPagination: (state, action: PayloadAction<CatalogState['pagination']['page']>) => {
         const page = action.payload;
         const total = state.products.length || 0;
         const limit = state.pagination.limit;
         const pagination = serializedPagination(total, page, limit);
         state.pagination = pagination;
      },
      setLimitPagination: (state, action: PayloadAction<CatalogState['pagination']['limit']>) => {
         const limit = action.payload;
         const total = state.pagination.total || 0;
         const page = 1;
         const pagination = serializedPagination(total, page, limit);
         state.pagination = pagination;
      },
      setOrdering: (state, action: PayloadAction<CatalogState['ordering']>) => {
         state.ordering = action.payload;
      },
      setFilters: (state, action: PayloadAction<CatalogTypes['CatalogFilter']>) => {
         const { key, value } = action.payload;
         state.filters = { ...state.filters, [key]: value };
         const positions = Object.keys(state.filters);
         const currentChangePosition = positions.indexOf(key);
         positions.forEach((keyPosition, index) => {
            if (index > currentChangePosition) {
               state.filters[keyPosition as keyof typeof state.filters] = 0;
            }
         });
      },
      clearFilters: (state) => {
         state.filters = initialState.filters;
      },
      setPendingFetch: (state, action: PayloadAction<boolean>) => {
         state.pendingFetch = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchProducts.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(fetchSearchProducts.rejected, (state, action) => {
            state.loading = false;
            state.pendingFetch = false;
         })
         .addCase(fetchSearchProducts.fulfilled, (state, action) => {
            state.loading = false;
            const products = action.payload;
            const currentPagination = state.pagination;
            const total = products.length || 0;
            const pagination = serializedPagination(total, 1, currentPagination.limit);
            state.pagination = pagination;
            state.products = products || [];
            state.pendingFetch = false;
         })
         .addCase(fetchSearchProductsByFilters.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(fetchSearchProductsByFilters.rejected, (state, action) => {
            state.loading = false;
            state.pendingFetch = false;
         })
         .addCase(fetchSearchProductsByFilters.fulfilled, (state, action) => {
            state.loading = false;
            const products = action.payload;
            const currentPagination = state.pagination;
            const total = products.length || 0;
            const pagination = serializedPagination(total, 1, currentPagination.limit);
            state.pagination = pagination;
            state.products = products || [];
            state.pendingFetch = false;
         });
   },
});

export default catalogSlice.reducer;
export const {
   setProducts,
   setPagination,
   setLimitPagination,
   setOrdering,
   setFilters,
   clearFilters,
   setPendingFetch,
} = catalogSlice.actions;
