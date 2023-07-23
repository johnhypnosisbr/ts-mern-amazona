import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
    {
        name: "Nike Slim Shirt",
        slug: "nike-slim-shirt",
        category: 'Shirts',
        image: "../img/shirt/nike-slim-shirt-fr.png",
        brand: 'Nike',
        price: 120,
        countInStock: 10,
        description: 'High quality sports shirt',
        rating: 4.5,
        numReview: 10
    },
    {
        name: "Adidas Fit Shirt",
        slug: "adidas-fit-shirt",
        category: 'Shirts',
        image: "../img/shirt/adidas-fit-shirt-fr.png",
        brand: 'Adidas',
        price: 120,
        countInStock: 10,
        description: 'High quality sports shirt',
        rating: 4.5,
        numReview: 10
    },
    {
        name: "Adidas Rio Pants",
        slug: "adidas-rio-pants",
        category: 'Pants',
        image: "../img/pants/adidas-rio-pants-fr.png",
        brand: 'Adidas',
        price: 160,
        countInStock: 10,
        description: 'High quality sports pants',
        rating: 4.1,
        numReview: 12
    },
    {
        name: "Jeans Slim",
        slug: "jeans-slim",
        category: 'Pants',
        image: "../img/pants/jeans-slim-fr.png",
        brand: 'Levi',
        price: 160,
        countInStock: 10,
        description: 'High quality jeans',
        rating: 4.4,
        numReview: 11
    }
]