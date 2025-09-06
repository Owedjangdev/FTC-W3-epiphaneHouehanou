"use client"

import { useState, useEffect } from 'react';
import FilterSort from './FiltrerMobile';
import { chiotsData } from '../../data';
import { Chiot } from '../../types';

const PuppyGallery = () => {
  const [filtres, setFiltres] = useState({
    race: '',
    prixMax: null,
    sortBy: 'popular',
  });

  const [chiotsAfficher, setChiotsAfficher] = useState<Chiot[]>(chiotsData);

  useEffect(() => {
    const resultat = chiotsData.filter(chiot => {
      const correspondRace = filtres.race === '' || chiot.race === filtres.race;
      const correspondPrix = filtres.prixMax === null || chiot.prix <= filtres.prixMax!;
      return correspondRace && correspondPrix;
    });

    switch (filtres.sortBy) {
      case 'price-asc':
        resultat.sort((a, b) => a.prix - b.prix);
        break;
      case 'price-desc':
        resultat.sort((a, b) => b.prix - a.prix);
        break;
      case 'popular':
      default:
        break;
    }

    setChiotsAfficher(resultat);
    
  }, [filtres]);

  const handleSortChange = (value: string) => {
    setFiltres(prevFiltres => ({ ...prevFiltres, sortBy: value }));
  };

  const handleFilterClick = () => {
    console.log('Bouton de filtre cliqué !');
  };

  return (
    // Conteneur principal: Centré avec une marge horizontale sur mobile
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {/* Panneau de filtre latéral : masqué sur mobile, visible sur les écrans plus grands */}
      <div className="hidden md:block md:w-1/4 md:pr-4 md:border-r md:border-gray-200">
        <h2 className="text-xl font-bold mb-4">Filtre</h2>
        {/* Ajoutez ici d'autres filtres */}
      </div>

      {/* Contenu principal */}
      <div className="w-full max-w-lg md:max-w-none flex-1">
        <FilterSort
          onSortChange={handleSortChange}
          onFilterClick={handleFilterClick}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {chiotsAfficher.map(chiot => (
            <div key={chiot.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={chiot.imageUrl} alt={chiot.nom} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{chiot.nom}</h3>
                <p className="text-sm text-gray-600">{chiot.race}</p>
                <p className="text-lg font-semibold mt-2">{chiot.prix} €</p>
                <p className="text-lg font-semibold mt-2">{chiot.age} </p>
                 <p className="text-lg font-semibold mt-2">{chiot.poids} </p>
                  <p className="text-lg font-semibold mt-2">{chiot.sexe} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PuppyGallery;