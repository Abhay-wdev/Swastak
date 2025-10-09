// Function to fetch images from backend and save to localStorage
export const fetchAndStoreSlides = async () => {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbxOB-RM_OStPdJ3Gwi25DLBkwfZWn6Pd5eGu5g1N77F6vtg1uiWU_cmzgWJdPfi-JBwsg/exec'
    );
    const json = await res.json();

    if (json.images && Array.isArray(json.images)) {
      // Save the slides in localStorage
      localStorage.setItem('slides', JSON.stringify(json.images));

      console.log('Slides saved to localStorage:', json.images);
    } else {
      console.warn('No images received from API.');
    }
  } catch (err) {
    console.error('Error fetching slides:', err);
  }
};