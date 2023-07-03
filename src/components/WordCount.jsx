import React, { useState } from 'react';
import useCount from './CustomHook';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Count = () => {
  const [name, setName] = useState('');
  const { wordCount, letterCount } = useCount(name);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const getWordCountColor = () => {
    if (wordCount === 0) {
      return 'red';
    } else if (wordCount < 5) {
      return 'orange'; 
    } else {
      return 'green'; 
    }
  };

  const getLetterCountFontSize = () => {
    if (letterCount < 10) {
      return '16px'; 
    } else if (letterCount < 20) {
      return '20px';
    } else {
      return '24px'; 
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center mt-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{
            marginBottom: '10px', 
            padding: '5px',
            border: '1px solid #ccc', 
            borderRadius: '4px', 
            width: '300px', 
            textAlign: 'center', 
          }}
        />
        <p style={{ color: getWordCountColor() }}>
          Word Count: {wordCount}
        </p>
        <p style={{ fontSize: getLetterCountFontSize() }}>
          Letter Count: {letterCount}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Count;
