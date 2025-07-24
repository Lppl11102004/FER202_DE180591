import React, { createContext, useReducer } from 'react';

export const CarContext = createContext();

const initialState = {
  cars: [],
  filteredCars: [],
};

const carReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        cars: action.payload,
        filteredCars: action.payload,
      };
    case 'FILTER_CARS':
      const filterPrice = Number(action.payload) || 0;
      return {
        ...state,
        filteredCars: filterPrice === 0 ? state.cars : state.cars.filter((car) => car.price <= filterPrice),
      };
    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};