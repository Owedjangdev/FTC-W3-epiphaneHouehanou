"use client";

import { useState, useEffect } from "react";
import FilterSort from "./FiltrerMobile";
import { chiotsData } from "../../data";
import { Chiot } from "../../types";
import Pagination from "./Pagination";

const PuppyGallery = () => {
  const [filtres, setFiltres] = useState({
    race: "",
    prixMax: null,
    sortBy: "popular",
  });

  const [chiotsAfficher, setChiotsAfficher] = useState<Chiot[]>(chiotsData);
  // Définissez le nombre de chiots par page
  const CHIOTS_PAR_PAGE = 8;
  // Ajoutez un état pour la page actuelle
  const [currentPage, setCurrentPage] = useState(1);
  // Un état pour stocker les chiots après filtrage et tri, mais avant pagination
  const [chiotsFiltres, setChiotsFiltres] = useState<Chiot[]>(chiotsData);

  useEffect(() => {
    const resultat = chiotsData.filter((chiot) => {
      const correspondRace = filtres.race === "" || chiot.race === filtres.race;
      const correspondPrix =
        filtres.prixMax === null || chiot.prix <= filtres.prixMax!;
      return correspondRace && correspondPrix;
    });

    switch (filtres.sortBy) {
      case "price-asc":
        resultat.sort((a, b) => a.prix - b.prix);
        break;
      case "price-desc":
        resultat.sort((a, b) => b.prix - a.prix);
        break;
      case "popular":
      default:
        break;
    }

    setChiotsAfficher(resultat);
  }, [filtres]);

  const handleSortChange = (value: string) => {
    setFiltres((prevFiltres) => ({ ...prevFiltres, sortBy: value }));
  };

  const handleFilterClick = () => {
    console.log("Bouton de filtre cliqué !");
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

        <div className="grid grid-cols-2 md:grid-cols-3  gap-6 mt-4">
          {chiotsAfficher.map((chiot) => (
            <div
              key={chiot.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={chiot.imageUrl}
                alt={chiot.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-md font-bold">
                  {chiot.nom}-{chiot.race}
                </h3>

                <p className="text-sm font-semibold text-neutral-20 mt-2">
                  Gene:{chiot.sexe}{" "}
                </p>
                <p className="text-md font-semibold text-neutral-20 mt-2">
                  Age:{chiot.age}{" "}
                </p>
                <p className="text-md font-semibold mt-2">{chiot.prix} €</p>
              </div>
            </div>
          ))}
        </div>
        {/* Le composant de pagination, placé en bas de la grille */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PuppyGallery;
