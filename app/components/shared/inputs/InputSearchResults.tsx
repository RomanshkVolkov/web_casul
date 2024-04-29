'use client';
import { Button, Input } from '@nextui-org/react';

export default function InputSearchResults() {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

   return <Input onChange={handleChange} endContent={<Button size="sm">x</Button>} />;
}
