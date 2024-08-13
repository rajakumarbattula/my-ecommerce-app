import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  // Mock search results (replace with real API call)
  const products = [
    { id: 1, name: 'Product 1', description: 'This is Product 1' },
    { id: 2, name: 'Product 2', description: 'This is Product 2' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;

