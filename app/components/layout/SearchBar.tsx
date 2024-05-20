import { ThemeSwitcher } from "./ThemeSwitcher";
import InputSearch from "../shared/inputs/InputSearchBar";
import ButtonCatalog from "../shared/inputs/ButtonCatalog";

export default function SearchBar() {
  const startContent = <ButtonCatalog />;
  //const endContent = <WidgetFilters id="search-nav--button" />;

  return (
    <div className="center-diagonal absolute bottom-[-22px] grid-cols-1 bg-primary py-4 xs:hidden sm:grid sm:w-full md:w-[820px] xl:w-[1000px]">
      <div className="absolute bottom-0 col-span-1 w-full">
        <div className="flex w-full justify-center shadow-lg">
          <div className="contents">
            <ThemeSwitcher />
          </div>
          <div className="contents">
            <InputSearch startContent={startContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
