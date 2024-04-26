import Image from "next/image";
import SearchBar from "../../SearchBar";

export default function Header() {
    return (
        <header className="bg-primary">
            <div
                className="flex w-full">
                <div className="container bg-secondary w-2/3 py-1 left-diagonal" />
                <div className="container w-1/4 py-1" >
                    <div className="flex justify-center text-secondary font-bold">
                        <span>¡BIENVENIDO!</span>
                    </div>
                </div>
                <div className="container bg-secondary w-2/3 py-1 right-diagonal" />
            </div>
            <div className="container mx-auto px-4 py-5 flex justify-center relative">
                <div className="w-1/4 flex justify-center">
                    <Image
                        src="/next.svg"
                        width={100}
                        height={100} alt={"Logo"} />
                </div>
                <SearchBar />
            </div>
        </header>
    );
}