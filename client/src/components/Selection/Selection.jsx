import { useEffect, useState } from "react";
import CategorySelect from "./CategorySelect";
import PriceSelect from "./PriceSelect";
import ResetFiltersButton from "./ResetFiltersButton";
import SaleSelect from "./SaleSelect";
import SelectionContainer from "./SelectionContainer";

const Selection = () => {
 const { filters, categoriesWithAll, handleFilterChange } = SelectionContainer();
 const [hasAppliedFilters, setHasAppliedFilters] = useState(false);

 useEffect(() => {
    setHasAppliedFilters(filters.category !== '' || filters.sale !== '3' || filters.price !== '');
 }, [filters]);

 return (
    <div className="grid grid-cols-4 gap-3 items-center m-3 " >
      <CategorySelect filters={filters} categoriesWithAll={categoriesWithAll} handleFilterChange={handleFilterChange} />
      <SaleSelect filters={filters} handleFilterChange={handleFilterChange} />
      <PriceSelect filters={filters} handleFilterChange={handleFilterChange} />
      <ResetFiltersButton hasAppliedFilters={hasAppliedFilters} handleRefreshFilters={() => handleFilterChange('category', '')} />
    </div>
 );
};

export default Selection;