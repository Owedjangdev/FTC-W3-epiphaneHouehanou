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

export interface Chiot {
  id: number;
  nom: string;
  race: string;
  sexe: "Mâle" | "Femelle";
  age: string;
  color: string;
  prix: number;
  imageUrl: string;
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




export interface Article {
    category: string;
    image: string;
    title: string;
    excerpt: string;
    link: string;
}

export interface ProductDetail {
  label: string;
  value: string;
}

export interface ProductAbout{
  name: string;
  price: string;
  sku: string;
  details: ProductDetail[];
  images: string[];
}