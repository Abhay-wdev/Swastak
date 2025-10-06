// products.js
export const products = [];

// Function to fetch and store products
export const fetchAndStoreProducts = async () => {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbzqLHSPfIRjN2_0hkqgxr-LbY2BTCCZtcxbK7vBUkjSDHYszDxHHfuBSJ2YbBPrtgyk2g/exec'
    );
    const json = await res.json();

    if (json.data) {
      // Update local array
      products.length = 0; // Clear existing
      products.push(...json.data);

      // Save to localStorage
      localStorage.setItem('products', JSON.stringify(products));
      console.log('Products updated and saved to localStorage:', products);
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

 /*
  const product = {
  id: "884fda91-7199-4585-824f-e2fff3068409",
  name: "Channa masala",
  category: "masala",
  description: "Disc",
  price: 80,
  stockQuantity: 1000,
  isActive: true,
  imageUrls: ["img1", "img2", "img3"], // Converted from comma string to array
  ingredients: "Imdgrents",
  nutritionalBenefits: "benifitss",
  faqs: ["f1", "f2", "f3", "f4", "f5"], // Converted from comma string to array
  shippingAndReturns: "shipping",
  lastUpdateTime: "2025-10-06T07:06:30.057Z"
};
*/