// ===== Case 1: User Data Cleaner (String & Array Interop) =====
const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedString = rawInput
  .trim()                                  // 1. bersihkan whitespace di awal & akhir
  .split(",")                              // 2. ubah jadi array nama
  .map((name) => name.trim().toLowerCase()) // 3. lowercase tanpa spasi liar
  .join(" | ");                            // 4. gabungkan kembali

console.log("Case 1:", cleanedString);
// riyanda_azis | arifian_saputra | hasan_harahap


// ===== Case 2: E-Commerce Product Filter (Array of Objects) =====
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

// 1. Saring produk yang active: true
const activeProducts = products.filter((product) => product.active === true);

// 2. Array baru berisi nama produk berhuruf kapital
const upperCaseNames = activeProducts.map((product) => product.name.toUpperCase());

// 3. Total harga semua produk aktif
const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("Case 2 - Produk aktif:", activeProducts);
console.log("Case 2 - Nama kapital:", upperCaseNames); // ["LAPTOP", "KEYBOARD"]
console.log("Case 2 - Total harga:", totalPrice);       // 1050