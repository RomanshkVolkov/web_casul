'use client'
import { useState } from "react";
import Image from "next/image";
import ButtonAsync from "./shared/inputs/ButtonAsync";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Input } from "@nextui-org/react";
import CustomModal from "./shared/CustomModal";
import WidgetFilters from "./WidgetFilters";

export default function SearchBar() {
    const [search, setSearch] = useState<string>('');

    const handleChange = (value: string) => {
        setSearch(value);
    }

    const handleSearch = async () => {

    }

    const filtersButton = (
        <Image src='/svg/filters.svg' alt="filter" width={24} height={24} />
    )
    return (
        <div className="absolute bg-primary w-1/2 py-4 bottom-[-22px] center-diagonal" >
            <div className="absolute flex justify-center w-full bottom-0">
                <ThemeSwitcher />
                <Input
                    id='search_input'
                    className='w-3/4 center-diagonal text-center focus:outline-none'
                    value={search} onChange={(e) => handleChange(e.currentTarget.value)}
                    placeholder='¿Qué estás buscando?'
                    endContent={
                        <CustomModal title="Filtros" button={filtersButton} size="sm" >
                            <WidgetFilters />
                        </CustomModal>
                    }
                />
                <ButtonAsync asyncAction={handleSearch}>
                    <Image src='/svg/search.svg' alt="clear" width={24} height={24} />
                </ButtonAsync>

            </div>
        </div>
    );
}