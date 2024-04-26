import Image from 'next/image';
import SearchBar from '../../SearchBar';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-primary">
            <div className="flex w-full">
                <div className="container bg-secondary w-2/3 py-1 left-diagonal" />
                <div className="container w-1/4 py-1">
                    <div className="flex justify-center text-secondary font-bold">
                        <span>Frena seguro, frena Casul</span>
                    </div>
                </div>
                <div className="container bg-secondary w-2/3 py-1 right-diagonal" />
            </div>
            <div className="container mx-auto pb-5 flex justify-center relative">
                <div className="w-1/4 flex justify-center">
                    <Link href="/">
                        <Image src="/images/logo.png" width={100} height={100} alt={'Logo'} />
                    </Link>
                </div>
                <SearchBar />
            </div>
        </header>
    );
}
