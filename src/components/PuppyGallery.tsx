// src/components/PuppyGallery.tsx
"use client";

import { useState, useEffect } from 'react';
import { Chiot } from '../../types';
import { chiotsData } from '../../data';
import SidebarFilters from './SidebarFilters';
import FilterSort from './FiltrerMobile';
import Pagination from './Pagination';


const PuppyGallery: React.FC = () => {


    const CHIOTS_PAR_PAGE = 8;
  // Ajoutez un état pour la page actuelle
  const [currentPage, setCurrentPage] = useState(1);
  // Un état pour stocker les chiots après filtrage et tri, mais avant pagination
  const [chiotsFiltres, setChiotsFiltres] = useState<Chiot[]>(chiotsData);

  const [filters, setFilters] = useState({
    race: '',
    sexe: '',
    prixMin: 0,
    prixMax: 90000000, 
    sortBy: 'popular',
  });

  const [chiotsAfficher, setChiotsAfficher] = useState<Chiot[]>([]);

  useEffect(() => {
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

    setChiotsAfficher(result);
  }, [filters]);

  const handleSortChange = (value: string) => {
    setFilters(prev => ({ ...prev, sortBy: value }));
  };

  const handleFilterClick = () => {
    console.log('Bouton de filtre mobile cliqué !');
  };

  
  // Logique pour déterminer les chiots à afficher sur la page actuelle
  const firstIndex = (currentPage - 1) * CHIOTS_PAR_PAGE;
  const lastIndex = firstIndex + CHIOTS_PAR_PAGE;
  const chiotsActuels = chiotsFiltres.slice(firstIndex, lastIndex);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(chiotsFiltres.length / CHIOTS_PAR_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optionnel : remonter en haut de la page pour une meilleure expérience utilisateur
    window.scrollTo({ top: 0, behavior: "smooth" });
  };  return (
    <>
    <div className="flex w-full max-w-7xl mx-auto items-start">
      {/* Panneau de filtre latéral (pour les grands écrans) */}
      <div className="hidden lg:block w-1/4 p-4 border-r border-gray-200 sticky top-0 self-start">
        <SidebarFilters filters={filters} setFilters={setFilters} />
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
            <div className='flex  items-center gap-4'>
                <h1 className="text-3xl font-bold text-gray-800">Small Dog </h1>
          <p className='text-sm text-neutral-40 font-semibold mt-2'>52 Dog</p>
          </div>
          
          <FilterSort onSortChange={handleSortChange} onFilterClick={handleFilterClick} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {chiotsAfficher.length > 0 ? (
            chiotsAfficher.map(chiot => (
              <div key={chiot.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={chiot.imageUrl} alt={chiot.nom} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold ">{chiot.nom}- {chiot.race}</h3>
                  <div className='flex items-center  gap-4'> 
            <p className="text-sm text-neutral-40 font-semibold mt-2">  Genre :{chiot.sexe}</p> .
             <p className="text-sm text-neutral-40 font-semibold mt-2">Age :{chiot.age}</p>
           </div>
                  <p className="text-lg font-semibold mt-2">{chiot.prix} €</p>
                 
     </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">Aucun chiot ne correspond à vos critères.</p>
          )}


        </div>
      </div>


       
    </div>


    {/* Le composant de pagination, placé en bas de la grille */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </>
  );
};

export default PuppyGallery;