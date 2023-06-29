import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculation = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const handleButtonClick = () => {
    const sum = number1 + number2;
    setResult(sum);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="mt-4">Calculation</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <label className="form-label">Number 1:</label>
            <input
              type="number"
              className="form-control"
              value={number1}
              onChange={(e) => setNumber1(Number(e.target.value))}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Number 2:</label>
            <input
              type="number"
              className="form-control"
              value={number2}
              onChange={(e) => setNumber2(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={handleButtonClick}>
              Calculate
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <label className="form-label">Result:</label>
            <input type="text" className="form-control" value={result} readOnly />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculation;
