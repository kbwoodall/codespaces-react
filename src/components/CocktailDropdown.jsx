import React, { useState } from 'react';

const cocktails = [
  {
    name: 'Margarita',
    ingredients: ['2 oz Tequila', '1 oz Lime juice', '1 oz Cointreau'],
  },
  {
    name: 'Mojito',
    ingredients: ['2 oz White rum', '1 oz Lime juice', '2 tsp Sugar', 'Mint leaves', 'Soda Water'],
  },
  {
    name: 'Old Fashioned',
    ingredients: ['2 oz Bourbon or Rye whiskey', 'Angostura bitters', '1 Sugar cube', 'Few dashes plain water'],
  },
  // Add more cocktails as needed
];

const CocktailDropdown = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const handleSelectChange = (event) => {
    const selectedName = event.target.value;
    const cocktail = cocktails.find((cocktail) => cocktail.name === selectedName);
    setSelectedCocktail(cocktail);
  };

  return (
    <div>
      <label htmlFor="cocktail-select">Choose a cocktail:</label>
      <select id="cocktail-select" onChange={handleSelectChange}>
        <option value="">--Please choose an option--</option>
        {cocktails.map((cocktail) => (
          <option key={cocktail.name} value={cocktail.name}>
            {cocktail.name}
          </option>
        ))}
      </select>

      {selectedCocktail && (
        <div>
          <h2>{selectedCocktail.name}</h2>
          <ul>
            {selectedCocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CocktailDropdown;
