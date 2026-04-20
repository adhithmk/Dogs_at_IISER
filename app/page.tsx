'use client';

import { useState, useEffect } from 'react';
import { Dog } from '../lib/csvParser';
import { getDogsData } from '../lib/data';
import DogCard from '../components/DogCard';
import DogDetail from '../components/DogDetail';
import SearchFilter from '../components/SearchFilter';

export default function HomePage() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [neuteringFilter, setNeuteringFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        const dogsData = await getDogsData();
        setDogs(dogsData);
      } catch (error) {
        console.error('Error loading dogs data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDogs();
  }, []);

  const filteredDogs = dogs.filter(dog => {
    const matchesSearch = searchTerm === '' || 
      dog.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.originalId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGender = genderFilter === '' || dog.gender === genderFilter;
    const matchesNeutering = neuteringFilter === '' || dog.neuteringStatus === neuteringFilter;
    
    return matchesSearch && matchesGender && matchesNeutering;
  });

  if (selectedDog) {
    return (
      <DogDetail 
        dog={selectedDog} 
        onBack={() => setSelectedDog(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Dogs of IISER
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A living registry of campus community dogs
          </p>
        </header>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          genderFilter={genderFilter}
          onGenderFilterChange={setGenderFilter}
          neuteringFilter={neuteringFilter}
          onNeuteringFilterChange={setNeuteringFilter}
        />

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
            <p className="mt-4 text-gray-600">Loading dog data...</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600">
              Showing {filteredDogs.length} of {dogs.length} dogs
            </div>

            {filteredDogs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">??</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No dogs found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDogs.map((dog) => (
                  <DogCard
                    key={dog.id}
                    dog={dog}
                    onClick={() => setSelectedDog(dog)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
