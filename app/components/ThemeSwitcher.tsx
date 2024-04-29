// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            className="bg-transparent !px-0 !w-[24px]"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            <Image src={theme === 'dark' ? '/svg/theme-light.svg' : '/svg/theme-dark.svg'}
                alt="theme"
                width={24}
                height={24}
            />
        </Button>
    )
}