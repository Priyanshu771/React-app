import React, { useReducer } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const Vegetable = () => {
  const initialOrderState = {
    Potato: 0,
    Onion: 0,
    Tomato: 0,
    total: 0,
  };

  const [orderState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'Potato':
        return {
          ...state,
          Potato: state.Potato + action.value,
          total: state.total + action.value * 42, 
        };
      case 'Onion':
        return {
          ...state,
          Onion: state.Onion + action.value,
          total: state.total + action.value * 35, // a coke costs 0.5$
        };
      case 'Tomato':
        return {
          ...state,
          Tomato: state.Tomato + action.value,
          total: state.total + action.value * 68, // a fries set costs 1$
        };
      case 'RESET':
        return initialOrderState;
      default:
        return state;
    }
  }, initialOrderState);

  const buttonHander = (type, value) => {
    dispatch({
      type: type,
      value: value,
    });
  };

  const resetOrder = () => {
    dispatch({ type: 'RESET' });
  };

  const submitOrder = () => {
    alert(`You have successfully  order Vegetables- ${orderState.total}`);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="text-center">
        <h3>Order Your Vegetables</h3>
      </div>
      <hr />

      <div>
        <div className="row">
          <div className="col-md-4">
            <h5>Potato</h5>
            <p>Price: Rs42 / Kg</p>
            <p>
              Quantity: {orderState.Potato}
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={() => buttonHander('Potato', 1)}
              >
                +
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => buttonHander('Potato', -1)}
                disabled={orderState.Potato === 0}
              >
                -
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Onion</h5>
            <p>Price: Rs35 / Kg</p>
            <p>
              Quantity: {orderState.Onion}
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={() => buttonHander('Onion', 1)}
              >
                +
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => buttonHander('Onion', -1)}
                disabled={orderState.Onion === 0}
              >
                -
              </button>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Tomato</h5>
            <p>Price: Rs68 / Kg</p>
            <p>
              Quantity: {orderState.Tomato}
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={() => buttonHander('Tomato', 1)}
              >
                +
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => buttonHander('Tomato', -1)}
                disabled={orderState.Tomato === 0}
              >
                -
              </button>
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-4">
            <strong>Total: Rs{orderState.total.toFixed(2)}</strong>
          </p>
          <div>
            <button className="btn btn-danger mx-2" onClick={resetOrder}>
              Reset
            </button>
            <button className="btn btn-success" onClick={submitOrder}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Vegetable;
