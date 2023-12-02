import { IoReload } from "react-icons/io5";
import Categories from '../assets/iconsFilters/Category.svg';
import Controller from '../assets/iconsFilters/Controllers.svg';
import Earbud from '../assets/iconsFilters/Earbuds.svg';
import Headset from '../assets/iconsFilters/Headsets.svg';
import Keyboard from '../assets/iconsFilters/Keyboards.svg';
import Mices from '../assets/iconsFilters/Mice.svg';
import Microphone from '../assets/iconsFilters/Microphones.svg';
import Monitor from '../assets/iconsFilters/Monitors.svg';
import Mousepad from '../assets/iconsFilters/Mousepads.svg';

const Selection = ({toggleCategoryOptions, filters, showCategoryOptions, categoriesWithAll, handleFilterChange, hasAppliedFilters, handleRefreshFilters}) => {
  const categoryImages = {
    Headsets: Headset,
    Microphones: Microphone,
    Monitors: Monitor,
    Mousepads: Mousepad,
    Earbuds: Earbud,
    Keyboards: Keyboard,
    Mice: Mices,
    Controllers: Controller,
  };
    return(
        <div className="grid grid-cols-4 gap-3 items-center m-3 " >
              <label className="col-span-1">
                <div className="relative inline-block select-container" onClick={toggleCategoryOptions}>
                  <div className="flex items-center cursor-pointer">
                    <span className="text-gray-700 p-2 bg-gray-100 rounded-tl-md rounded-bl-md">
                      {filters.category ? filters.category : "Categorias"}
                    </span>
                    <img
                      src={
                        filters.category
                          ? categoryImages[filters.category]
                          : Categories
                      }
                      alt={filters.category || "Categories"}
                      className="w-6 h-6 bg-gray-100 rounded-tr-md rounded-br-md p-2 "
                    />
                  </div>
                  {showCategoryOptions && (
                    <div className="absolute mt-2 bg-white border border-gray-300 rounded-md overflow-hidden shadow-md flex flex-col" style={{ zIndex: 1000 }}>
                      {categoriesWithAll.map((category) => (
                        <div
                          key={category}
                          onClick={() => {
                            handleFilterChange('category', category);
                            toggleCategoryOptions();
                          }}
                          className="flex items-center px-8 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <span className="text-gray-700">{category || "Categorías"}</span>
                          <img
                            src={categoryImages[category] || Categories}
                            alt={category}
                            className="w-5 h-5 ml-2"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </label>

              <label className="col-span-1 ml-5 mr-5">
                <select
                  value={filters.sale}
                  onChange={(e) => handleFilterChange('sale', e.target.value)}
                  className="p-2 bg-gray-100 rounded-lg"
                  style={{ zIndex: 1000 }}
                >
                  <option className='text-gray-200' value={3}>Descuentos</option>
                  <option value="1">Con descuentos</option>
                  <option value="0">Sin descuentos</option>
                </select>
              </label>

              <label className="col-span-1">
                <select
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  className="p-2 bg-gray-100 rounded-lg"
                  style={{ zIndex: 1000 }}
                >
                  <option value="">Todos</option>
                  <option value="highest">Más alto</option>
                  <option value="lowest">Más bajo</option>
                </select>
              </label>

              <div className={`col-span-${hasAppliedFilters ? '1' : '0'} pr-40`}>
                {hasAppliedFilters && filters.category !== '' && (
                  <button
                    onClick={handleRefreshFilters}
                    className="p-0 bg-gray-100 rounded-full align-middle"
                  >
                    <IoReload className="w-6 h-6 p-1"/>
                  </button>
                )}
              </div>
            </div>
    )
}

export default Selection