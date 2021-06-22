import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const [signalColor, setSignalColor] = useState({
    color: 'red'
  })
  

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };

  const changeSignal = (color) => {
    setSignalColor({
      color,
    });
  };

    const context = {
      cars,
      signalColor,
      moveCar: moveCar,
      changeSignal: changeSignal,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
