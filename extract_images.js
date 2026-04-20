// Image URL Extraction Script for Dogs of IISER
// This script helps you convert Google Drive folder links to direct image URLs

/**
 * Convert Google Drive folder/file link to direct image URL
 * @param {string} driveUrl - Original Google Drive URL
 * @returns {string} - Direct image URL
 */
function convertToDirectUrl(driveUrl) {
    // Handle folder links
    if (driveUrl.includes('/folders/')) {
        const folderId = driveUrl.match(/\/folders\/([^/?]+)/);
        if (folderId) {
            return `https://drive.google.com/drive/folders/${folderId[1]}`;
        }
    }
    
    // Handle file links
    if (driveUrl.includes('/file/d/')) {
        const fileId = driveUrl.match(/\/file\/d\/([^/?]+)/);
        if (fileId) {
            return `https://drive.google.com/uc?export=view&id=${fileId[1]}`;
        }
    }
    
    return driveUrl;
}

/**
 * Extract file IDs from Google Drive folder
 * You'll need to manually get these from the folder URLs
 */
const dogFolders = {
    'Dog 1': 'FOLDER_ID_DOG1',
    'Dog 2': 'FOLDER_ID_DOG2',
    'Dog 3': 'FOLDER_ID_DOG3',
    'Dog 4': 'FOLDER_ID_DOG4',
    'Dog 5': 'FOLDER_ID_DOG5',
    'Dog 6': 'FOLDER_ID_DOG6',
    'Dog 7': 'FOLDER_ID_DOG7',
    'Dog 8': 'FOLDER_ID_DOG8',
    'Dog 9': 'FOLDER_ID_DOG9',
    'Dog 10': 'FOLDER_ID_DOG10',
    'Dog 11': 'FOLDER_ID_DOG11',
    'Dog 12': 'FOLDER_ID_DOG12',
    'Dog 13': 'FOLDER_ID_DOG13',
    'Dog 14': 'FOLDER_ID_DOG14',
    'Dog 15': 'FOLDER_ID_DOG15',
    'Dog 16': 'FOLDER_ID_DOG16',
    'Dog 17': 'FOLDER_ID_DOG17',
    'Dog 18': 'FOLDER_ID_DOG18',
    'Dog 19': 'FOLDER_ID_DOG19',
    'Dog 20': 'FOLDER_ID_DOG20',
    'Dog 21': 'FOLDER_ID_DOG21',
    'Dog 22': 'FOLDER_ID_DOG22',
    'Dog 23': 'FOLDER_ID_DOG23',
    'Dog 24': 'FOLDER_ID_DOG24',
    'Dog 25': 'FOLDER_ID_DOG25',
    'Dog 26': 'FOLDER_ID_DOG26'
};

/**
 * Generate CSV with image URLs
 * Replace the FOLDER_ID_DOG# with actual folder IDs from your Google Drive
 */
function generateCSV() {
    let csv = 'Aadhaar ID name,Gender,Pet Name,Location,Colour/Pattern,Description,Collar colour/type,Neutering status,Date of latest vaccination,Pictures,Date of survery ( 29/03/26),( 12/4/26)\n';
    
    // This is a template - you'll need to fill in the actual data
    const dogsData = [
        {
            id: 'Dog 1',
            gender: 'Male',
            petName: '-',
            location: 'Tulita',
            color: 'chocolate brown',
            description: 'pointy ears,timid, black snout',
            collar: 'no collar',
            neutering: 'non neutered',
            vaccination: 'not vaccinated',
            images: ['FOLDER_ID_DOG1_IMAGE1', 'FOLDER_ID_DOG1_IMAGE2'], // Replace with actual file IDs
            spotted1: 'spotted',
            spotted2: '-'
        },
        // Add all other dogs here...
    ];
    
    dogsData.forEach(dog => {
        const imageUrls = dog.images.map(id => `https://drive.google.com/uc?export=view&id=${id}`).join(',');
        csv += `${dog.id},${dog.gender},${dog.petName},${dog.location},${dog.color},"${dog.description}",${dog.collar},${dog.neutering},${dog.vaccination},"${imageUrls}",${dog.spotted1},${dog.spotted2}\n`;
    });
    
    return csv;
}

console.log('Use this script as a guide to extract image URLs from your Google Drive folders.');
console.log('Steps:');
console.log('1. Open each dog folder in Google Drive');
console.log('2. Copy the file IDs from the image URLs');
console.log('3. Update the FOLDER_ID_DOG# placeholders');
console.log('4. Run generateCSV() to create the updated CSV');
