import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="xs:hidden sm:block">
        <div className="flex w-full">
          <div className="left-diagonal container w-2/3 bg-secondary py-1" />
          <div className="container py-1 md:w-1/2 xl:w-1/4">
            <div className="flex justify-center text-center font-bold text-secondary">
              <span>Frene SEGURO, Frene CASUL</span>
            </div>
          </div>
          <div className="right-diagonal container w-2/3 bg-secondary py-1" />
        </div>
        <div className="container relative mx-auto flex justify-center sm:pb-6 md:pb-5">
          <div className="flex w-1/4 justify-center">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                width={100}
                height={100}
                alt={"Logo"}
              />
            </Link>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="justify-center py-1 xs:flex sm:hidden">
        <Link href="/">
          <Image src="/images/logo.webp" width={50} height={50} alt={"Logo"} />
        </Link>
      </div>
    </header>
  );
}
