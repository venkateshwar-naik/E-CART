import React from 'react';
import { cartState } from '../context/Context';
import SingleCard from './SingleCard';
import './styles.scss';
import Filter from './Filter';

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery }, // Fixed typo for searchQuery
  } = cartState();

  const transformProducts = () => {
  let sortedProducts = [...products]; // Create a copy of the array to avoid mutating the original

  // Sorting logic
  if (sort) {
    sortedProducts = [...sortedProducts].sort((a, b) =>
      sort === 'Ascending' ? a.price - b.price : b.price - a.price
    );
  }

  // Filter by stock
  if (!byStock) {
    sortedProducts = sortedProducts.filter((prod) => prod.inStock);
  }

  // Filter by fast delivery
  if (byFastDelivery) {
    sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
  }

  // Filter by rating
  if (byRating) {
    sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
  }

  // Filter by search query
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return sortedProducts;
};


  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((product) => (
          <SingleCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
