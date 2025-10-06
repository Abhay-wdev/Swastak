export const products = [];

// Fetch data from Google Apps Script and populate products
fetch('https://script.google.com/macros/s/AKfycbzqLHSPfIRjN2_0hkqgxr-LbY2BTCCZtcxbK7vBUkjSDHYszDxHHfuBSJ2YbBPrtgyk2g/exec')
  .then(res => res.json())
  .then(json => {
    if (json.data) {
      products.push(...json.data); // Add all items to the products array
      console.log('Products updated:', products);
    }
  })
  .catch(err => console.error('Error fetching data:', err));
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