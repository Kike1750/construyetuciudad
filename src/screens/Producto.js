'use strict';
import React from "react";
import Navbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const e = React.createElement;

class Producto extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inicio: false };
//   }

  render() {
    return( <div>
    <Navbar> </Navbar>
<br/>
    <Row xs={2} md={8} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src="/images/oxxo.png" />
          <Card.Body>
            <Card.Title>Oxxo</Card.Title>
            <Card.Text>
              Tienda de conveniencia
            </Card.Text>
            <br/>
           
          </Card.Body>
        </Card>
      <button type="button" class="btn btn-outline-success">Comprar</button>
      <br/>
      <br/>
      </Col>
      
    ))}
  </Row>

  </div>)

    }
}


export default Producto