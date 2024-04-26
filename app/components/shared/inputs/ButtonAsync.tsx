'use client'

import { useState } from "react";

interface Props {
    onClick?: () => void;
    asyncAction?: () => Promise<void>;
    className?: string;
    children: React.ReactNode;
}
export default function ButtonAsync({
    onClick,
    asyncAction,
    className,
    children
}: Props) {
    const [loading, setLoading] = useState(false);

    const handleAsyncAction = async () => {
        setLoading(true);
        if (onClick) {
            onClick();
        }
        else if (asyncAction) {
            try {
                await asyncAction();
            } catch (error) {
                console.info(error);
            }
        }
        setLoading(false);
    }

    return (
        <button className={className} onClick={handleAsyncAction} disabled={loading}>
            {children}
        </button>
    )
}