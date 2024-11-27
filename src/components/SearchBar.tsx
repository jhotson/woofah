import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/Button';

export function SearchBar() {
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter city or zip code"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
          Breed
        </label>
        <input
          type="text"
          id="breed"
          placeholder="Any breed"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>
      <div className="flex items-end">
        <Button className="w-full md:w-auto">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}