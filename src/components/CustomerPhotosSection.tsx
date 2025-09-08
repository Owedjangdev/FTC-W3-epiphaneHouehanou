
'use client';
import Image from 'next/image';

const customerPhotos = [
  '/customer2.png',
  '/customer1.png',
  '/customer3.png',
  '/customer4.png',
  '/customer5.png',
  '/customer6.png',
];

const CustomerPhotosSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold  text-primary-80 mb-8">Our lovely customer</h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-4 overflow-x-scroll no-scrollbar py-4 px-2">
          {customerPhotos.map((photo, index) => (
            <div key={index} className="flex-none w-64 h-64 rounded-[10px] overflow-hidden shadow-lg">
              <Image
                src={photo}
                alt={`Customer photo ${index + 1}`}
                width={248}
                height={340}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotosSection;