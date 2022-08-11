import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BrandExample() {
  return (
    <>
    <Navbar fixed="bottom" />
      <Navbar bg-color='#1abb22' variant-color='#1abb22'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logotipo.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          

          </Navbar.Brand>

          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="Contactanos">Contactanos</Nav.Link>
            <Nav.Link href="Producto">Producto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Container>







        
      </Navbar>
    </>
  );
}

export default BrandExample;