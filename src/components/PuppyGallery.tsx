// src/components/PuppyGallery.tsx
"use client";

import { useState, useEffect } from 'react';

import SidebarFilters from './SidebarFilters';

import Pagination from './Pagination';
import { Chiot } from '@/types';
import { chiotsData } from '@/data/chiotData';
import FilterSort from './Filtrer';

const PuppyGallery: React.FC = () => {
  const CHIOTS_PAR_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [chiotsFiltres, setChiotsFiltres] = useState<Chiot[]>([]);
  const [filters, setFilters] = useState({
    race: '',
    sexe: '',
    prixMin: 0,
    prixMax: 90000000,
    sortBy: 'popular',
  });
  
  // Nouveaux états pour le chargement et l'erreur
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchChiots = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // Simulation d'une API call asynchrone avec un délai
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        let result = chiotsData.filter(chiot => {
          const matchesRace = filters.race === '' || chiot.race === filters.race;
          const matchesSexe = filters.sexe === '' || chiot.sexe === filters.sexe;
          const matchesPrix = chiot.prix >= filters.prixMin && chiot.prix <= filters.prixMax;
          return matchesRace && matchesSexe && matchesPrix;
        });

        switch (filters.sortBy) {
          case 'price-asc':
            result.sort((a, b) => a.prix - b.prix);
            break;
          case 'price-desc':
            result.sort((a, b) => b.prix - a.prix);
            break;
          case 'popular':
          default:
            break;
        }

        setChiotsFiltres(result);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.error("Failed to fetch puppies:", error);
      }
    };

    fetchChiots();
  }, [filters]);

  const handleSortChange = (value: string) => {
    setFilters(prev => ({ ...prev, sortBy: value }));
  };

  const handleFilterClick = () => {
    console.log('Bouton de filtre mobile cliqué !');
  };

  const firstIndex = (currentPage - 1) * CHIOTS_PAR_PAGE;
  const lastIndex = firstIndex + CHIOTS_PAR_PAGE;
  const chiotsActuels = chiotsFiltres.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(chiotsFiltres.length / CHIOTS_PAR_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Rendu conditionnel
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
          <p className="text-xl text-gray-500 font-semibold">Chargement des chiots...</p>
        </div>
      );
    }
    
    if (isError) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
          <p className="text-xl text-red-500 font-semibold">Une erreur est survenue lors du chargement des chiots. 😥</p>
        </div>
      );
    }

    if (chiotsFiltres.length === 0) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
          <p className="text-xl text-gray-500 font-semibold">Aucun chiot ne correspond à vos critères. 🐶</p>
        </div>
      );
    }

    return chiotsActuels.map(chiot => (
      <div key={chiot.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={chiot.imageUrl} alt={chiot.nom} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold ">{chiot.nom}- {chiot.race}</h3>
          <div className='flex items-center gap-4'> 
            <p className="text-sm text-neutral-40 font-semibold mt-2">Genre : {chiot.sexe}</p> .
            <p className="text-sm text-neutral-40 font-semibold mt-2">Age : {chiot.age}</p>
          </div>
          <p className="text-lg font-semibold mt-2">{chiot.prix} €</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex w-full max-w-7xl mx-auto items-start">
        <div className="hidden lg:block w-1/4 p-4 border-r border-gray-200 sticky top-0 self-start">
          <SidebarFilters filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-6">
            <div className='flex items-center gap-4'>
              <h1 className="text-3xl font-bold text-gray-800">Small Dog </h1>
              <p className='text-sm text-neutral-40 font-semibold mt-2'> {chiotsFiltres.length} Dog</p>
            </div>
            <FilterSort onSortChange={handleSortChange} onFilterClick={handleFilterClick} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {renderContent()}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PuppyGallery;