'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

interface Props {
    children: React.ReactNode
}
export default function Providers({ children }: Props) {
    return (
        <NextUIProvider>
            <ThemeProvider defaultTheme="dark">
                <main className="bg-background">
                    {children}
                </main>
            </ThemeProvider>
        </NextUIProvider>
    )
}