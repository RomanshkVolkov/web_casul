import { ThemeSwitcher } from './ThemeSwitcher';
import WidgetFilters from './WidgetFilters';
import InputSearch from './shared/inputs/InputSearch';

export default function SearchBar() {
   return (
      <div className="absolute sm:grid xs:hidden bg-primary grid-cols-1 xl:w-[1000px] md:w-[720px] sm:w-full py-4 bottom-[-22px] center-diagonal">
         <div className="absolute w-full bottom-0 col-span-1">
            <div className="w-full flex justify-center">
               <div className="contents">
                  <ThemeSwitcher />
               </div>
               <div className="contents">
                  <InputSearch>
                     <WidgetFilters id="filters-button" />
                  </InputSearch>
               </div>
            </div>
         </div>
      </div>
   );
}
