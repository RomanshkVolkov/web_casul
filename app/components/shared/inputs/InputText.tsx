'use client'

import { Input } from '@nextui-org/react'

interface Props {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    nuiCSS?: string;
}

export default function InputText({
    id,
    value,
    onChange,
    className,
    placeholder,
    nuiCSS
}: Props) {
    return (
        <Input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
            className={className}
            placeholder={placeholder}
            labelPlacement='outside'
            variant='underlined'
        // css={nuiCSS}
        />
    );
}