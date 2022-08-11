'use strict';
import React from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';


const e = React.createElement;

class Contactanos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inicio: false };
//   }

  render() {
    return( <div>
    <Navbar> </Navbar>
    <h1>¿TIENES DUDAS O SUGERENCIAS?</h1>
    <h2>Haznos saber
      <br />
      Tu opinión nos importa!
    </h2>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

<br />

<h1>SE PARTE DE NUESTRA COMUNIDAD</h1>



    <>
      {[
        'Success',
        
        
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Cesar Aldaraca</strong>
            <small>Hace 11 minutos.</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Este proyecto es increible.
          </Toast.Body>
        </Toast>
      ))}
    </>


    <>
      {[
        
        'Warning',
        
        
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Maria Reyna Zarate</strong>
            <small>Hace 40 minutos.</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Excelente trabajo.
          </Toast.Body>
        </Toast>
      ))}
    </>



    <>
      {[
        
        
        'Info',
        
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Francisco Cecilio</strong>
            <small>Hace 20 minutos.</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Cooooooooools =D.
          </Toast.Body>
        </Toast>
      ))}
    </>
    

  </div>)
    }

//     return e(
//       'button',
//       { onClick: () => this.setState({ inicio: true }) },
//       'Inicio'
//     );
//   }
}


export default Contactanos