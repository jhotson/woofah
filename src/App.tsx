import React from 'react';
import { Heart, PawPrint, Users } from 'lucide-react';
import { Button } from './components/ui/Button';
import { SearchBar } from './components/SearchBar';
import { FeaturedDogs } from './components/FeaturedDogs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Perfect Companion
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Connect with local shelters and rescues to find your new best friend.
            </p>
            <div className="mt-10">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <PawPrint className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Find Your Match</h3>
              <p className="mt-2 text-gray-600">
                Browse through our database of lovable dogs waiting for their forever homes.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Save Lives</h3>
              <p className="mt-2 text-gray-600">
                Every adoption helps save a life and makes room for another dog in need.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Join Our Community</h3>
              <p className="mt-2 text-gray-600">
                Connect with other dog lovers and share your adoption journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dogs Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Dogs</h2>
            <p className="mt-4 text-gray-600">
              Meet some of our wonderful dogs looking for their forever homes
            </p>
          </div>
          <FeaturedDogs />
          <div className="mt-12 text-center">
            <Button size="lg">View All Dogs</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;