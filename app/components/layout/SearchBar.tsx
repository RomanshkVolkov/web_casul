import { ThemeSwitcher } from './ThemeSwitcher';
import WidgetFilters from '../WidgetFilters';
import InputSearch from '../shared/inputs/InputSearch';
import ButtonCatalog from '../shared/inputs/ButtonCatalog';

export default function SearchBar() {
  const startContent = <ButtonCatalog />;
  const endContent = <WidgetFilters id="search-nav--button" />;

  return (
    <div className="absolute sm:grid xs:hidden bg-primary grid-cols-1 xl:w-[1000px] md:w-[820px] sm:w-full py-4 bottom-[-22px] center-diagonal">
      <div className="absolute w-full bottom-0 col-span-1">
        <div className="w-full flex justify-center shadow-lg">
          <div className="contents">
            <ThemeSwitcher />
          </div>
          <div className="contents">
            <InputSearch startContent={startContent} endContent={endContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
