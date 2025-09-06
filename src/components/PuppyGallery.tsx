"use client"



import { useState, useEffect } from 'react';

// Le composant de tri/filtre

import { Chiot } from '../../types';

import FilterSort from './FiltrerMobile';

import { chiotsData } from '../../data';







const PuppyGallery = () => {

// État qui stocke les valeurs des filtres et du tri

const [filtres, setFiltres] = useState({

race: '',

prixMax: null,

sortBy: 'popular',

});



// État qui stocke la liste de chiots à afficher (initialement tous les chiots)

const [chiotsAfficher, setChiotsAfficher] = useState<Chiot[]>(chiotsData);



// Utilisez useEffect pour déclencher la mise à jour des chiots

useEffect(() => {

// 1. Appliquer les filtres

let resultat: Chiot[] = chiotsData.filter(chiot => {

const correspondRace = filtres.race === '' || chiot.race === filtres.race;

const correspondPrix = filtres.prixMax === null || chiot.prix <= filtres.prixMax!;

return correspondRace && correspondPrix;

});



// 2. Appliquer le tri sur les chiots filtrés

switch (filtres.sortBy) {

case 'price-asc':

resultat.sort((a, b) => a.prix - b.prix);

break;

case 'price-desc':

resultat.sort((a, b) => b.prix - a.prix);

break;

case 'popular':

default:

// Le tri par défaut (laissez tel quel)

break;

}



// 3. Mettre à jour l'état de la liste des chiots à afficher

setChiotsAfficher(resultat);


}, [filtres]); // Ce hook s'exécute à chaque fois que 'filtres' change



// Fonction pour mettre à jour les filtres (passée au composant enfant)

const handleSortChange = (value: string) => {

setFiltres(prevFiltres => ({ ...prevFiltres, sortBy: value }));

};



const handleFilterClick = () => {

// Logique pour basculer le panneau de filtre

console.log('Bouton de filtre cliqué !');

};



return (

<div className="flex w-full max-w-7xl mx-auto items-center ">

{/* Panneau de filtre latéral */}

<div className="w-1/4 p-4 border-r border-gray-200">

<h2 className="text-xl font-bold mb-4">Filtre</h2>

{/* Ajoutez ici d'autres filtres (input, radio, etc.) qui appellent setFiltres */}

</div>



{/* Contenu principal */}

<div className="flex-1 p-4">

<FilterSort

onSortChange={handleSortChange}

onFilterClick={handleFilterClick}

/>



{/* La liste des chiots */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

{chiotsAfficher.map(chiot => (

<div key={chiot.id} className="bg-white rounded-lg shadow-md overflow-hidden">

<img src={chiot.imageUrl} alt={chiot.nom} className="w-full h-48 object-cover" />

<div className="p-4">

<h3 className="text-md font-bold">{chiot.nom}</h3>

<p className="text-sm text-gray-600">{chiot.race}</p>

<p className="text-lg font-semibold mt-2">{chiot.prix} €</p>

<p className="text-lg font-semibold mt-2">{chiot.age} </p>
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