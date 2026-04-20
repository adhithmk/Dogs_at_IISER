import { Dog } from '../lib/csvParser';
// import Image from 'next/image';

interface DogCardProps {
  dog: Dog;
  onClick: () => void;
}

export default function DogCard({ dog, onClick }: DogCardProps) {
  const displayName = dog.originalId || dog.id;
  const statusInfo = `${dog.gender} ${dog.neuteringStatus}`;
  
  return (
    <div className="dog-card" onClick={onClick}>
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-100 to-earth-100">
          <div className="text-center">
            <div className="text-6xl mb-2">??</div>
            <div className="text-lg text-gray-600">Dog Profile</div>
            <div className="text-sm text-gray-500 mt-2">{displayName}</div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{displayName}</h3>
          <span className="info-badge">{dog.id}</span>
        </div>
        
        {dog.name && (
          <p className="text-sm text-gray-500 mb-2">Pet name: {dog.name}</p>
        )}
        
        <p className="text-sm text-gray-600 mb-3">{statusInfo}</p>
        
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {dog.location}
        </div>
        
        {dog.vaccinationStatus && (
          <div className="mt-2">
            <span className={`status-badge ${
              dog.vaccinationStatus === 'not vaccinated' ? 'status-non-vaccinated' : 'status-vaccinated'
            }`}>
              {dog.vaccinationStatus === 'not vaccinated' ? 'not vaccinated' : 'vaccinated'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
