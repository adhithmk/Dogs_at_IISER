import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  genderFilter: string;
  onGenderFilterChange: (gender: string) => void;
  neuteringFilter: string;
  onNeuteringFilterChange: (status: string) => void;
}

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  genderFilter,
  onGenderFilterChange,
  neuteringFilter,
  onNeuteringFilterChange,
}: SearchFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by dog ID or name..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={genderFilter}
              onChange={(e) => onGenderFilterChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={neuteringFilter}
              onChange={(e) => onNeuteringFilterChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Neutering Status</option>
              <option value="neutered">Neutered</option>
              <option value="non neutered">Non-neutered</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
