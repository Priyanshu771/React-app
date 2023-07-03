import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import './ImageList.css';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: 'osjA8ec9RkhmKukl0es3QxfZns1cdq7rrkxuXc5ihr8',
        },
      });
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const filteredImages = useMemo(() => {
    return images.filter((image) =>
      image.alt_description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [images, searchQuery]);

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search images..."
          className="form-control search-input m-4"
        />
        <ul className="list-unstyled row image-list">
          {filteredImages.map((image) => (
            <li key={image.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text image-description">
                    {image.alt_description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ImageList;
