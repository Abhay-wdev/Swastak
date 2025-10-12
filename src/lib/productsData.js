export const products = [];

// Function to fetch and store products in localStorage
export const fetchAndStoreProducts = async () => {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbzLZ57AjTGVIrv-U4t38sfgYWm6Fkp2cyBoZKw2JFv0oif6C8lwNSMVwmsLiJ2dNDmP/exec'
    );
    const json = await res.json();

    if (json.data && Array.isArray(json.data)) {
      // Clear existing products array
      products.length = 0;
      // Add fetched data to the array
      products.push(...json.data);

      // Save to localStorage
      localStorage.setItem('products', JSON.stringify(products));

      // ✅ Console log to check data
      console.log('Products fetched from API:', json.data);
      console.log('Products saved to localStorage:', getProductsFromLocalStorage());
    } else {
      console.warn('No data received from API.');
    }
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

// Function to get products from localStorage
export const getProductsFromLocalStorage = () => {
  const stored = localStorage.getItem('products');
  return stored ? JSON.parse(stored) : [];
};

// Call this function to fetch and store products
fetchAndStoreProducts();
