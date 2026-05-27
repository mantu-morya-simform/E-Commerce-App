import type { Product } from "../types/productType";

export const products: Product[] = [
  // Phones
  {
    id: 1,
    title: "iPhone 15",
    price: 79999,
    category: "Phones",
    type: "phones",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1581508473167-1c80505e5e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHMyMHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Latest Apple smartphone with A16 Bionic chip.",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: 74999,
    category: "Phones",
    type: "phones",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "Premium Android flagship smartphone.",
    rating: 4.7,
    stock: 12,
  },

  // Tablets
  {
    id: 3,
    title: "iPad Air",
    price: 59999,
    category: "Tablets",
    type: "tablets",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    description: "Powerful tablet for work and entertainment.",
    rating: 4.8,
    stock: 8,
  },
  {
    id: 4,
    title: "Samsung Galaxy Tab S9",
    price: 54999,
    category: "Tablets",
    type: "tablets",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
    description: "Android tablet with premium display.",
    rating: 4.6,
    stock: 9,
  },

  // TV & Smart Home
  {
    id: 5,
    title: "Sony Bravia 55 Inch 4K TV",
    price: 65999,
    category: "TV & Smart Home",
    type: "smart-tv-home",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    description: "Ultra HD Smart TV with Dolby Vision.",
    rating: 4.7,
    stock: 5,
  },
  {
    id: 6,
    title: "Amazon Echo Dot",
    price: 4499,
    category: "TV & Smart Home",
    type: "smart-tv-home",
    brand: "Amazon",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
    description: "Smart speaker with Alexa support.",
    rating: 4.5,
    stock: 20,
  },

  // Smart Watch & Audio
  {
    id: 7,
    title: "Apple Watch Series 9",
    price: 42999,
    category: "Smart Watch & Audio",
    type: "smart-watch-audio",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwd2F0Y2glMjBzZXJpZXMlMjA5fGVufDB8fDB8fHww",
    description: "Advanced smartwatch with health tracking.",
    rating: 4.8,
    stock: 7,
  },
  {
    id: 8,
    title: "Sony WH-1000XM5",
    price: 29999,
    category: "Smart Watch & Audio",
    type: "smart-watch-audio",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Premium wireless noise cancelling headphones.",
    rating: 4.9,
    stock: 11,
  },
];
