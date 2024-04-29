import { ThemeSwitcher } from './ThemeSwitcher';
import WidgetFilters from './WidgetFilters';
import InputSearch from './shared/inputs/InputSearch';

export default function SearchBar() {
   return (
      <div className="absolute bg-primary grid grid-cols-1 xl:w-[1000px] md:w-[720px] sm:w-full py-4 bottom-[-22px] center-diagonal">
         <div className="absolute w-full bottom-0">
            <div className="w-full flex justify-center">
               <div className="">
                  <ThemeSwitcher />
               </div>
               <InputSearch>
                  <WidgetFilters id="filters-button" />
               </InputSearch>
            </div>
         </div>
      </div>
   );
}
