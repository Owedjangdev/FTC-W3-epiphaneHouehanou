"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


type FilterSortProps = {
  onSortChange: (value: string) => void;
  onFilterClick?: () => void;
};

const FilterSort = ({ onSortChange, onFilterClick }: FilterSortProps) => {
 
  const [sortBy, setSortBy] = useState('popular');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="flex justify-between items-center p-4">
      {/* Menu de tri */}
      <div className="relative">
        <select
          className="appearance-none bg-white border border-gray-300 rounded-xl py-2 px-4 pr-8  leading-tight focus:outline-none "
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="popular">Short By : Populaire</option>
          <option value="price-asc">Prix : Croissant</option>
          <option value="price-desc">Prix : Décroissant</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         
        < ChevronDown size={14}/> 
             </div>
      </div>

    
    </div>
  );
};

export default FilterSort;