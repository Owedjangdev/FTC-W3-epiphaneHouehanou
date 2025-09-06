"use client"
import { useState } from 'react';


// Définissez les types des props pour que le composant soit réutilisable
type FilterSortProps = {
  onSortChange: (value: string) => void;
  onFilterClick: () => void;
};

const FilterSort = ({ onSortChange, onFilterClick }: FilterSortProps) => {
  // Optionnel : état local pour le tri si vous voulez gérer son apparence
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
          className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="popular">Trier par : Populaire</option>
          <option value="price-asc">Prix : Croissant</option>
          <option value="price-desc">Prix : Décroissant</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* Icône de la flèche de la liste déroulante */}
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707 5-5-1.414-1.414L10 10.828 6.414 7.242 5 8.656l4.293 4.293z"/></svg>
        </div>
      </div>

      {/* Bouton de filtre */}
      <button 
        className="flex items-center space-x-2 text-gray-700 font-bold" 
        onClick={onFilterClick}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-6 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm12-8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-6 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM2 6h4v-2h-4v2zm6 0h4v-2h-4v2zm6 0h4v-2h-4v2zm-12 6h4v-2h-4v2zm6 0h4v-2h-4v2zm6 0h4v-2h-4v2z"/></svg>
        <span>Filtre</span>
      </button>
    </div>
  );
};

export default FilterSort;