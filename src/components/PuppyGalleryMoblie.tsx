"use client";

import { useState, useEffect } from "react";

import Pagination from "./Pagination";
import { Chiot } from "@/types";
import { chiotsData } from "@/data/chiotData";
import FilterSort from "./FiltrerMobile";
import { Filter } from "lucide-react";

const PuppyGallery = () => {
  const [filtres, setFiltres] = useState({
    race: "",
    prixMax: null,
    sortBy: "popular",
  });

  const [chiotsAfficher, setChiotsAfficher] = useState<Chiot[]>(chiotsData);

  const CHIOTS_PAR_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {/* Contenu principal */}

      <div className="w-full max-w-lg md:max-w-none flex-1">
        <div className="flex justify-between items-center p-4">
          <FilterSort
            onSortChange={handleSortChange}
            onFilterClick={handleFilterClick}
          />
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold ">Filtre</h2>
            <Filter className="w-5 h-5" />
          </div>
        </div>
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
