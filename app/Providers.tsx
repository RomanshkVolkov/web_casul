'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from '../lib/store/store';
import { PersistGate } from 'redux-persist/integration/react';

interface Props {
   children: React.ReactNode;
}
export default function Providers({ children }: Props) {
   const router = useRouter();

   return (
      <NextUIProvider navigate={router.push}>
         <ThemeProvider defaultTheme="dark" attribute="class">
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <main className="bg-background  text-foreground">{children}</main>
               </PersistGate>
            </Provider>
         </ThemeProvider>
      </NextUIProvider>
   );
}
