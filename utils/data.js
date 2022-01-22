import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'book1',
      slug: 'book1',
      category: 'books',
      image: '/images/book.jpg',
      isFeatured: true,
      featuredImage: '/images/book.jpg',
      price: 70,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular book',
    },
    {
      name: 'book2',
      slug: 'book2',
      category: 'books',
      image: '/images/book.jpg',
      isFeatured: true,
      featuredImage: '/images/book.jpg',
      price: 80,
      brand: '',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular book',
    },
    {
      name: 'book3',
      slug: 'book3',
      category: 'books',
      image: '/images/book.jpg',
      price: 90,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular book',
    },
    {
      name: 'audio1',
      slug: 'audio1',
      category: 'audio',
      image: '/images/audio.jpg',
      price: 90,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'popular audio',
    },
    {
      name: 'audio2',
      slug: 'audio2',
      category: 'audio',
      image: '/images/audio.jpg',
      price: 95,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular audio',
    },
    {
      name: 'audio3',
      slug: 'audio3',
      category: 'audio',
      image: '/images/audio.jpg',
      price: 75,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular audio',
    },
  ],
};
export default data;
