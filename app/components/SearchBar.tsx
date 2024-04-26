'use client'
import { useState } from "react";
import InputText from "./shared/inputs/InputText";
import Image from "next/image";
import ButtonAsync from "./shared/inputs/ButtonAsync";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function SearchBar() {
    const [search, setSearch] = useState<string>('');

    const handleChange = (value: string) => {
        setSearch(value);
    }

    const handleSearch = async () => {

    }
    return (
        <div className="absolute bg-primary w-1/2 py-4 bottom-[-22px] center-diagonal" >
            <div className="absolute flex justify-center w-full bottom-0">
                <ThemeSwitcher />
                <InputText
                    id='search_input'
                    className='w-3/4 center-diagonal text-center focus:outline-none'
                    value={search} onChange={handleChange}
                    placeholder='¿Qué estás buscando?'
                />
                <ButtonAsync asyncAction={handleSearch}>
                    <Image src='/svg/search.svg' alt="clear" width={24} height={24} />
                </ButtonAsync>

            </div>
        </div>
    );
}