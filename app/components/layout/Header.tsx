import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="sm:block xs:hidden">
        <div className="flex w-full">
          <div className="container bg-secondary w-2/3 py-1 left-diagonal" />
          <div className="container xl:w-1/4 md:w-1/2 py-1">
            <div className="flex justify-center text-center text-secondary font-bold">
              <span>Frena seguro, frena Casul</span>
            </div>
          </div>
          <div className="container bg-secondary w-2/3 py-1 right-diagonal" />
        </div>
        <div className="container mx-auto md:pb-5 sm:pb-6 flex justify-center relative">
          <div className="w-1/4 flex justify-center">
            <Link href="/">
              <Image src="/images/logo.webp" width={100} height={100} alt={'Logo'} />
            </Link>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="xs:flex sm:hidden py-1 justify-center">
        <Link href="/">
          <Image src="/images/logo.webp" width={50} height={50} alt={'Logo'} />
        </Link>
      </div>
    </header>
  );
}
