import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Filters, SidebarFiltersProps } from "@/types";

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  filters,
  setFilters,
}) => {
  const [expanded, setExpanded] = useState({
    race: true,
    sexe: true,
    prix: true,
  });

  const handleCheckboxChange = (name: keyof Filters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: prevFilters[name] === value ? "" : value,
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name as "prixMin" | "prixMax"]: parseFloat(value),
    }));
  };

  const toggleExpand = (section: keyof typeof expanded) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const races = [
    "Labrador",
    "Golden Retriever",
    "Bulldog",
    "Shiba Inu",
    "Poodle",
  ];
  const sexes = ["Mâle", "Femelle"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filtres</h2>

      {/* Filtre par race */}
      <div className="border-b border-gray-200 py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleExpand("race")}
        >
          <h3 className="font-semibold text-gray-800">Race</h3>
          {expanded.race ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        {expanded.race && (
          <div className="mt-2 space-y-2">
            {races.map((race) => (
              <label key={race} className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  name="race"
                  value={race}
                  checked={filters.race === race}
                  onChange={() => handleCheckboxChange("race", race)}
                  className="mr-2 rounded-sm text-primary-80 focus:ring-primary-80"
                />
                {race}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Filtre par sexe */}
      <div className="border-b border-gray-200 py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleExpand("sexe")}
        >
          <h3 className="font-semibold text-gray-800">Sexe</h3>
          {expanded.sexe ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        {expanded.sexe && (
          <div className="mt-2 space-y-2">
            {sexes.map((sexe) => (
              <label key={sexe} className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  name="sexe"
                  value={sexe}
                  checked={filters.sexe === sexe}
                  onChange={() => handleCheckboxChange("sexe", sexe)}
                  className="mr-2 rounded-sm text-primary-80 focus:ring-primary-80"
                />
                {sexe}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Filtre par prix */}
      <div className="border-b border-gray-200 py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleExpand("prix")}
        >
          <h3 className="font-semibold text-gray-800">Prix</h3>
          {expanded.prix ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        {expanded.prix && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="min-price" className="text-sm">
                Min:
              </label>
              <input
                type="number"
                id="min-price"
                name="prixMin"
                value={filters.prixMin}
                onChange={handlePriceChange}
                className="w-full border rounded-md px-2 py-1 text-gray-700"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="max-price" className="text-sm">
                Max:
              </label>
              <input
                type="number"
                id="max-price"
                name="prixMax"
                value={filters.prixMax}
                onChange={handlePriceChange}
                className="w-full border rounded-md px-2 py-1 text-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFilters;
