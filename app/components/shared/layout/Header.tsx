import Image from 'next/image';
import SearchBar from '../../SearchBar';
import Link from 'next/link';

export default function Header() {
   return (
      <header className="bg-primary">
         <div className="md:flex sm:hidden  w-full">
            <div className="container bg-secondary w-2/3 py-1 left-diagonal" />
            <div className="container xl:w-1/4 md:w-1/2 py-1">
               <div className="flex justify-center text-center text-secondary font-bold">
                  <span>Frena seguro, frena Casul</span>
               </div>
            </div>
            <div className="container bg-secondary w-2/3 py-1 right-diagonal" />
         </div>
         <div className="container mx-auto md:pb-5 sm:pb-6 flex md:justify-center sm:justify-between relative">
            <div className="w-1/4 md:flex sm:hidden   justify-center">
               <Link href="/">
                  <Image src="/images/logo.webp" width={100} height={100} alt={'Logo'} />
               </Link>
            </div>
            <SearchBar />
         </div>
      </header>
   );
}
