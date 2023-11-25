import React from "react";
import restaurantsData from "./../public/data,.json";

const App = () => {
  const renderRestaurantsByState = () => {
    const groupedRestaurants = restaurantsData.reduce((acc, restaurant) => {
      if (!acc[restaurant.state]) {
        acc[restaurant.state] = [];
      }
      acc[restaurant.state].push(restaurant);
      return acc;
    }, {});

    return Object.entries(groupedRestaurants).map(([state, restaurants]) => (
      <div key={state}>
        <h2>{state}</h2>
        {restaurants.map((restaurant, index) => (
          <div key={index}>
            <p>Name: {restaurant.restaurant_name}</p>
            <p>State: {restaurant.state}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Restaurants</h1>
      {renderRestaurantsByState()}
    </div>
  );
};

export default App;
