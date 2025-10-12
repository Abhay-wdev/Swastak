// src/lib/slidesData.js

// Function to fetch images from backend and save to localStorage
export const fetchAndStoreSlides = async () => {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbxQnHqZ5WNVQYombMTmdpYb3-_ZKafAN9XRDQH6g6HrQ7WQhIten0EUpmWIlyDldtI1/exec'
    );
    const json = await res.json();

    if (Array.isArray(json) && json.length > 0) {
      // Convert into array of image URLs (flatten if needed)
      const slides = json.map(row => row.images || []);
      localStorage.setItem('slides', JSON.stringify(slides));
      console.log('Slides saved to localStorage:', slides);
    } else {
      console.warn('No images received from API.');
      localStorage.setItem('slides', JSON.stringify([]));
    }
  } catch (err) {
    console.error('Error fetching slides:', err);
  }
};

// Function to get slides from localStorage
export const getSlidesFromLocalStorage = () => {
  const stored = localStorage.getItem('slides');
  return stored ? JSON.parse(stored) : [];
};
