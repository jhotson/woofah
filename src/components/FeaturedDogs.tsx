import React from 'react';

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  location: string;
  imageUrl: string;
}

const FEATURED_DOGS: Dog[] = [
  {
    id: '1',
    name: 'Max',
    breed: 'Golden Retriever',
    age: '2 years',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'German Shepherd',
    age: '1 year',
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'Labrador',
    age: '3 years',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1605897472359-85e4b94d685d?auto=format&fit=crop&q=80',
  },
];

export function FeaturedDogs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURED_DOGS.map((dog) => (
        <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={dog.imageUrl}
            alt={dog.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{dog.name}</h3>
            <p className="text-gray-600">{dog.breed}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-500">{dog.age}</span>
              <span className="text-sm text-gray-500">{dog.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}