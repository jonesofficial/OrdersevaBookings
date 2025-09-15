 Orderseva Bookings - React Search and Booking UI

## Overview

Orderseva Bookings is a React-based user interface for searching locations and booking rooms. It features a responsive search modal with dynamic filtering of locations, recent and popular suggestions, and a simple booking form.

## Features

- **Search Modal:**  
  - Real-time search filtering on city names  
  - Recent searches (up to 2) and popular search suggestions (up to 5)  
  - Clicking a suggestion updates the search input  
- **Booking Form:**  
  - Collects user input for city/location, check-in/out dates, and number of guests  
  - Designed to be mobile-friendly and visually clean with TailwindCSS styling  
- **Responsive Design:** Works well on different screen sizes

## Technologies Used

- React (with hooks and functional components)  
- TypeScript for type safety  
- TailwindCSS for styling  
- Vite as the build tool and dev server  

## Project Structure

- `src/pages/HomePage.tsx`: Main homepage component with Hero, SearchBox, and booking form  
- `src/components/SearchBox.tsx`: Search box component triggering the modal  
- `src/components/SearchModal.tsx`: Search modal with filtering and suggestions  
- `src/data/cities.ts`: List of cities with detailed addresses  
- `src/assets/`: Folder containing images (hotel, stay, resort, etc.)  

## Running Locally

1. Install dependencies:
npm install

text

2. Run the dev server:
npm run dev

text

3. Open `http://localhost:3000` in your browser.

## Building

To build the production version:

npm run build

text

The output will be in the `dist` folder (default for Vite).

## Deployment

This project can be deployed easily to hosting services like Netlify or Vercel by configuring:

- Build Command: `npm run build`  
- Publish Directory: `dist`

## License

This project is open-source and free to use.

---

For questions or help, please contact [Your Contact Info or GitHub link].
