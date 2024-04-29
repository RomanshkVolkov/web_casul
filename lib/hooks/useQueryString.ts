import { useCallback } from 'react';

export const useQueryString = (searchParams: URLSearchParams) => {
   const replaceAllParams = useCallback((key: string, value: string | number) => {
      const params = new URLSearchParams();
      params.set(key, value.toString());
      return params.toString();
   }, []);

   const setParam = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams);
         params.set(name, value);
         return params.toString();
      },
      [searchParams]
   );

   const removeParam = useCallback(
      (name: string) => {
         const params = new URLSearchParams(searchParams);
         params.delete(name);
         return params.toString();
      },
      [searchParams]
   );

   const removeMultipleParams = useCallback(
      (names: string[]) => {
         const params = new URLSearchParams(searchParams);
         names.forEach((name) => params.delete(name));
         return params.toString();
      },
      [searchParams]
   );

   const clearAll = useCallback(() => {
      return '';
   }, []);

   return { setParam, removeParam, removeMultipleParams, clearAll, replaceAllParams };
};
