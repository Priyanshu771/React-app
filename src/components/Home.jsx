<<<<<<< HEAD
import React, { useState, useEffect, useContext, useRef } from 'react';
=======
import React, { useState, useEffect, useContext } from 'react';
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '../pages/FormDataContext';
import Form from '../pages/Form';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import View from './View';

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
const Home = () => {
  const [formEntries, setFormEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { setViewFormData } = useContext(FormDataContext);
<<<<<<< HEAD
  const dataCountRef = useRef(0);


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d

  useEffect(() => {
    const storedEntries = localStorage.getItem('formEntries');
    if (storedEntries) {
<<<<<<< HEAD
      const parsedEntries = JSON.parse(storedEntries);
      setFormEntries(parsedEntries);
      dataCountRef.current = parsedEntries.length;
    }
  }, []);



  const handleFormSubmit = (formData) => {
    setFormEntries((prevEntries) => [...prevEntries, formData]);
    dataCountRef.current += 1;
    setShowForm(false);
  };



=======
      setFormEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleFormSubmit = (formData) => {
    setFormEntries((prevEntries) => [...prevEntries, formData]);
    setShowForm(false);
  };

>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
  const handleFormDelete = (index) => {
    setFormEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries.splice(index, 1);
<<<<<<< HEAD
      dataCountRef.current -= 1;
=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
      return updatedEntries;
    });
  };

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
  const handleFormView = (index) => {
    const formEntry = formEntries[index];
    setViewFormData(formEntry); // Set the form data in the context
    navigate(`view`);
  };

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
  const togglePopup = () => {
    setShowForm((prevState) => !prevState);
  };

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
  useEffect(() => {
    localStorage.setItem('formEntries', JSON.stringify(formEntries));
  }, [formEntries]);

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
  return (
    <div>
      <style>
        {`
          .popup {
            display: ${showForm ? 'block' : 'none'};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
          }

<<<<<<< HEAD
 

=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
          .popup-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }

<<<<<<< HEAD
 

=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-weight: bold;
            font-size: 18px;
          }

<<<<<<< HEAD
 

=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
          .btn-delete {
            background-color: #ff0000;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>

<<<<<<< HEAD


      <Navbar />



      <Container>
        <Row className="justify-content-between">
          <Col md={4} sm={6} xs={12} className="text-start">
            <p>Current Count: {dataCountRef.current}</p>
          </Col>
          <Col md={4} sm={6} xs={12} className="text-end">
=======
      <Navbar />

      <Container>
        <Row className="justify-content-start">
          <Col md={4} sm={6} xs={12}>
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
            <button className="btn btn-info add-btn p-2 m-2" onClick={togglePopup}>
              Add data
            </button>
          </Col>
        </Row>

<<<<<<< HEAD


=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
        {formEntries.length > 0 && (
          <Row>
            <Col>
              <h2>Form Entries:</h2>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formEntries.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.phone}</td>
                        <td>{entry.email}</td>
                        <td>{entry.address}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => handleFormDelete(index)}>
                            Delete
                          </button>
                          <button className="btn btn-info" onClick={() => handleFormView(index)}>
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        )}

<<<<<<< HEAD




=======
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={togglePopup}>
                X
              </button>
              <Form handleFormSubmit={handleFormSubmit} />
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD


export default Home;
=======
export default Home;
>>>>>>> 768bc94997bb783d14a175c83a7992a63973666d
