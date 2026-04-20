import { Dog } from '../lib/csvParser';
import Image from 'next/image';
import { ArrowLeft, MapPin, Calendar, Heart, Shield } from 'lucide-react';
import ImageGallery from './ImageGallery';

interface DogDetailProps {
  dog: Dog;
  onBack: () => void;
}

export default function DogDetail({ dog, onBack }: DogDetailProps) {
  const displayName = dog.originalId || dog.id;
  
  return (
    <div className="min-h-screen bg-earth-50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to all dogs
        </button>

        <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
          <div className="relative h-96 w-full overflow-hidden bg-gray-100">
            <ImageGallery 
              images={[dog.image1, dog.image2, dog.image3, dog.image4, dog.image5].filter(img => img && img.trim() !== '')} 
              dogName={displayName} 
            />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{dog.originalId || dog.id}</h1>
                <span className="info-badge text-lg">{dog.id}</span>
                {dog.name && (
                  <p className="text-gray-600 mt-2">Pet name: {dog.name}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Basic Information
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gender:</span>
                      <span className="font-medium">{dog.gender}</span>
                    </div>
                    
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Color:</span>
                      <span className="font-medium">{dog.color}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                    Location & Status
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{dog.location}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collar:</span>
                      <span className="font-medium">{dog.collar}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-500" />
                    Health Status
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-600 block mb-2">Neutering Status:</span>
                      <span className={`status-badge ${
                        dog.neuteringStatus === 'neutered' ? 'status-neutered' : 'status-non-neutered'
                      }`}>
                        {dog.neuteringStatus}
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 block mb-2">Vaccination Status:</span>
                      <span className={`status-badge ${
                        dog.vaccinationStatus === 'not vaccinated' ? 'status-non-vaccinated' : 'status-vaccinated'
                      }`}>
                        {dog.vaccinationStatus === 'not vaccinated' ? 'not vaccinated' : 'vaccinated'}
                      </span>
                    </div>
                    
                    {dog.vaccinationStatus !== 'not vaccinated' && dog.vaccinationDate && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {dog.vaccinationDate}
                      </div>
                    )}
                  </div>
                </div>

                {dog.description && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
                    <p className="text-gray-700 leading-relaxed">{dog.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
