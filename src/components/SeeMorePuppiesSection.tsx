// components/SeeMorePuppiesSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Puppy {
  id: number;
  image: string;
  code: string;
  name: string;
  age: string;
  price: string;
}

// Données fictives pour les chiots
const puppies: Puppy[] = [
  { id: 1, image: '/puppy1.png', code: 'MO231', name: 'Pomeranian White', age: '2 months', price: '6.900.000 VND' },
  { id: 2, image: '/puppy2.png', code: 'MO611', name: 'Poodle Tiny Yellow', age: '2 months', price: '3.900.000 VND' },
  { id: 3, image: '/puppy3.png', code: 'MO231', name: 'Poodle Tiny Sepia', age: '2 months', price: '6.900.000 VND' },
  { id: 4, image: '/puppy4.png', code: 'MO231', name: 'Alaskan Malamute Grey', age: '3 months', price: '8.900.000 VND' },
];

const PuppyCard: React.FC<{ puppy: Puppy }> = ({ puppy }) => (
  <Link href={`/puppy/${puppy.id}`} className="block bg-[#FCEED5] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <div className="relative w-full aspect-square">
      <Image src={puppy.image} alt={puppy.name} width={264}
                height={264}
                className="object-cover w-full h-full"/>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-gray-800 text-lg mb-1">{puppy.name}</h3>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Gender:</span> Male - <span className="font-semibold">{puppy.age}</span> old
      </p>
      <p className="font-bold text-xl text-[#002444]">{puppy.price}</p>
    </div>
  </Link>
);

const SeeMorePuppiesSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-[#002444] mb-4">What’s new? <br/>See More Puppies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {puppies.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </div>
    </section>
  );
};

export default SeeMorePuppiesSection;