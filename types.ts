// Définition de l'interface pour les propriétés du composant PetCard
 export interface PetCardProps {
  imageSrc: string;
  petName: string;
  petId: string;
  gender: string;
  age: string;
  price: string;
}

// Définition de l'interface pour un seul animal dans le tableau
 export interface Pet {
  id: string;
  name: string;
  image: string;
  gender: string;
  age: string;
  price: string;
}





export interface Product {
    image: string;
    name: string;
    productType: string;
    details: string;
    price: string;
    gift: string;
    giftType: string;
}


