import React, { useContext } from 'react';
import { FormDataContext } from '../pages/FormDataContext';
import { Container, Card, Table } from 'react-bootstrap';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const View = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1 className="text-center">View Page</h1>
          {formData && (
            <Card>
              <Card.Body>
                <Card.Title>Form Data</Card.Title>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>{formData.name}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone:</strong></td>
                      <td>{formData.phone}</td>
                    </tr>
                    <tr>
                      <td><strong>Email:</strong></td>
                      <td>{formData.email}</td>
                    </tr>
                    <tr>
                      <td><strong>Address:</strong></td>
                      <td>{formData.address}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default View;
