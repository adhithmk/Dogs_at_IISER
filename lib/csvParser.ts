import Papa from 'papaparse';

export interface Dog {
  id: string;
  originalId: string;
  name: string;
  gender: string;
  location: string;
  color: string;
  description: string;
  collar: string;
  neuteringStatus: string;
  vaccinationStatus: string;
  vaccinationDate: string;
  imageUrl: string;
  images: string[];
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  spotted1: string;
  spotted2: string;
}

export function parseCSVData(csvText: string): Dog[] {
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data.map((row: any, index: number) => {
    const dogNumber = index + 1;
    const imageUrl = row['Pictures'] || '';
    
    // Parse multiple images from the Pictures field (comma-separated URLs)
    const images = imageUrl ? imageUrl.split(',').map((url: string) => url.trim()).filter((url: string) => url) : [];
    
    // Convert Google Drive folder links to direct image URLs
    const processedImages = images.map((url: string) => {
      if (url.includes('/folders/')) {
        // For folder links, we'll use them as-is for now
        // The website will show "Click to open Google Drive" placeholder
        return url;
      } else if (url.includes('/file/d/')) {
        // Convert file links to direct image URLs
        const fileId = url.match(/\/file\/d\/([^/?]+)/);
        if (fileId) {
          return `https://drive.google.com/uc?export=view&id=${fileId[1]}`;
        }
      }
      return url;
    });
    
    return {
      id: `D${dogNumber}`,
      originalId: row['Aadhaar ID name'] || '',
      name: row['Pet Name'] || '',
      gender: row['Gender'] || '',
      location: row['Location'] || '',
      color: row['Colour/Pattern'] || '',
      description: row['Description'] || '',
      collar: row['Collar colour/type'] || '',
      neuteringStatus: row['Neutering status'] || '',
      vaccinationStatus: row['Date of latest vaccination'] === 'not vaccinated' ? 'not vaccinated' : 
                        row['Date of latest vaccination'] === 'vaccinated' ? 'vaccinated' :
                        row['Date of latest vaccination'] || '',
      vaccinationDate: row['Date of latest vaccination'] || '',
      imageUrl: imageUrl,
      image1: processedImages[0] || '',
      image2: processedImages[1] || '',
      image3: processedImages[2] || '',
      image4: processedImages[3] || '',
      image5: processedImages[4] || '',
      images: processedImages,
      spotted1: row['Date of survery ( 29/03/26)'] || '',
      spotted2: row['( 12/4/26)'] || '',
    };
  });
}
