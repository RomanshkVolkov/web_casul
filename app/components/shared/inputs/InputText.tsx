'use client';

import { Input } from '@nextui-org/react';

interface Props {
   id?: string;
   value: string;
   onChange: (_: string) => void;
   className?: string;
   placeholder?: string;
   endContend?: React.ReactNode;
}

export default function InputText({
   id,
   value,
   onChange,
   className,
   placeholder,
   endContend,
}: Props) {
   return (
      <Input
         id={id}
         type="text"
         value={value}
         onChange={(e) => onChange(e.currentTarget.value)}
         className={className}
         placeholder={placeholder}
         labelPlacement="outside"
         variant="underlined"
         endContent={endContend}
      />
   );
}
