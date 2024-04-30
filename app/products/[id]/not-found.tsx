import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { HiOutlineFaceFrown } from 'react-icons/hi2';

export default function NotFound() {
   return (
      <main className="flex h-full flex-col items-center justify-center gap-2 py-12 px-28">
         <HiOutlineFaceFrown className="text-9xl text-gray-400" />
         <h2 className="text-xl font-semibold">404 Página no encontrada</h2>
         <p>No pudimos encontrar el producto solicitado.</p>
         <Link href="/" className="mt-4 text-black transition-colors 0">
            <Button className="bg-black text-white">Regresar al inicio</Button>
         </Link>
      </main>
   );
}
