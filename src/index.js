import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
import Calculator from './components/Calculator';
import View from './components/View';
import Vegetable from './orders/Vegetable';
import ImageList from './components/ImageList';
import WordCount from  './components/WordCount'
import { FormDataProvider } from './pages/FormDataContext';

const App = () => {
  const [savedData, setSavedData] = useState([]);
  const condition = true;

  const handleFormSubmit = (data) => {
    setSavedData((prevData) => [...prevData, data]);
  };

  return (
    <Router>
      <FormDataProvider>
        <div>
          <Routes>
            {condition ? (
              <>
                <Route path="/" element={<Home savedData={savedData} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/view" element={<View />} />
                <Route path="/order" element={<Vegetable />} />
                <Route path="/image" element={<ImageList />} />
                <Route path="/count" element={<WordCount />} />
                <Route
                  path="*"
                  element={
                    <>
                      <Navigate to="/not-found" replace />
                      <NotFound />
                    </>
                  }
                />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/not-found" replace />} />
                <Route path="/contact" element={<Navigate to="/not-found" replace />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/view" element={<Navigate to="/not-found" replace />} />
                <Route path="/order" element={<Vegetable />} />
                <Route path="/image" element={<ImageList />} />
                <Route path="/count" element={<WordCount />} />
                
              </>
            )}
          </Routes>
        </div>
      </FormDataProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
