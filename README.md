# Dogs of IISER

A modern, responsive web application to showcase and catalog the campus community dogs at IISER.

## Features

- **Dynamic Data Loading**: Automatically loads dog data from CSV file
- **Responsive Grid Layout**: Clean card-based design that works on all devices
- **Search & Filter**: Search by dog ID/name and filter by gender/neutering status
- **Individual Dog Pages**: Detailed information pages for each dog
- **Modern UI**: Earth-tone color palette with smooth animations
- **Mobile Optimized**: Fully responsive design

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Papa Parse** - CSV parsing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Data Structure

The application reads from `dog id(Sheet1).csv` with the following columns:

- Aadhaar ID name (Dog ID)
- Gender
- Pet Name
- Location
- Colour/Pattern
- Description
- Collar colour/type
- Neutering status
- Date of latest vaccination
- Pictures (Image URL)
- Survey dates

## Project Structure

```
dogs-of-iiser/
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- DogCard.tsx
|   |-- DogDetail.tsx
|   |-- SearchFilter.tsx
|-- lib/
|   |-- csvParser.ts
|   |-- data.ts
|-- public/
|   |-- dog id(Sheet1).csv
|-- ...
```

## Customization

### Colors
The theme uses earth tones defined in `tailwind.config.js`:

- Primary Green: `#1F3D2B`
- Earth Tones: Beige, brown, cream palette
- Status Colors: Green (vaccinated), Yellow (non-neutered), Red (non-vaccinated)

### Adding New Dogs
Simply add new rows to the CSV file. The application will automatically:
- Generate D1, D2, D3... IDs
- Create cards for new dogs
- Generate individual detail pages

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

This project is part of the IISER campus community initiative.
