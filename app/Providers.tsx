'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

interface Props {
    children: React.ReactNode;
}
export default function Providers({ children }: Props) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <ThemeProvider defaultTheme="dark">
                <main className="bg-background  text-foreground">{children}</main>
            </ThemeProvider>
        </NextUIProvider>
    );
}
