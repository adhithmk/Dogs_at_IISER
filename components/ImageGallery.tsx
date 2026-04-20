import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  dogName: string;
}

export default function ImageGallery({ images, dogName }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-100 to-earth-100">
        <div className="text-center">
          <div className="text-6xl mb-4">??</div>
          <div className="text-lg text-gray-600">No images available</div>
        </div>
      </div>
    );
  }

  const currentImage = images[currentImageIndex];
  const isGoogleDriveLink = currentImage.includes('drive.google.com');

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full">
      {/* Main Image Display */}
      <div className="relative h-full w-full overflow-hidden">
        {isGoogleDriveLink ? (
          <a 
            href={currentImage} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full group"
          >
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-100 to-earth-100 group-hover:from-primary-200 group-hover:to-earth-200 transition-colors">
              <div className="text-center">
                <div className="text-6xl mb-4">??</div>
                <div className="text-lg text-gray-600 mb-3">View Photos</div>
                <div className="text-primary-600 underline flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Click to open Google Drive
                </div>
              </div>
            </div>
          </a>
        ) : (
          <Image
            src={currentImage}
            alt={`${dogName} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        )}
      </div>

      {/* Navigation Controls - Only show if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-white scale-110'
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                {image.includes('drive.google.com') ? (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-600">{index + 1}</span>
                  </div>
                ) : (
                  <Image
                    src={image}
                    alt={`${dogName} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
