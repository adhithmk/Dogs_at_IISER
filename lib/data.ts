import { Dog } from './csvParser';

export const sampleDogs: Dog[] = [
  {
    id: 'D1',
    originalId: 'Dog 1',
    name: '',
    gender: 'Male',
    location: 'Tulita',
    color: 'chocolate brown',
    description: 'pointy ears,timid, black snout',
    collar: 'no collar',
    neuteringStatus: 'non neutered',
    vaccinationStatus: 'not vaccinated',
    vaccinationDate: '',
    imageUrl: 'https://drive.google.com/drive/folders/1VqBKM59gAaWjlJab4r31FiRdE87HfIrn?usp=drive_link',
    images: ['https://drive.google.com/drive/folders/1VqBKM59gAaWjlJab4r31FiRdE87HfIrn?usp=drive_link'],
    spotted1: 'spotted',
    spotted2: '-'
  },
  {
    id: 'D2',
    originalId: 'Dog 2',
    name: 'Dora',
    gender: 'Female',
    location: 'Tulita',
    color: 'Tan with white patches',
    description: 'Black snout, dark eye rims,pointy ears',
    collar: 'red collar (without QR)',
    neuteringStatus: 'neutered',
    vaccinationStatus: 'mid of December',
    vaccinationDate: 'mid of December',
    imageUrl: 'https://drive.google.com/drive/folders/1RF8OeyF2Pw-PVdcuHzoVcHJHjgXUcZhn?usp=drive_link',
    images: ['https://drive.google.com/drive/folders/1RF8OeyF2Pw-PVdcuHzoVcHJHjgXUcZhn?usp=drive_link'],
    spotted1: 'spotted',
    spotted2: '-'
  }
];

export async function getDogsData(): Promise<Dog[]> {
  try {
    const response = await fetch('/dog id(Sheet1).csv');
    const csvText = await response.text();
    
    const { parseCSVData } = await import('./csvParser');
    return parseCSVData(csvText);
  } catch (error) {
    console.error('Error reading CSV:', error);
    return sampleDogs;
  }
}
