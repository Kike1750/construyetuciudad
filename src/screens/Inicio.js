
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from "./Navbar";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';


function ImgOverlayExample() {
  return (
    <div>
      <Navbar></Navbar>



      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="/images/kioC.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/oxxoC.png"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/casaC.png"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>



<br/>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/images/codigo.png" />
        <Card.Body>
          <Card.Title>Código</Card.Title>
          <Card.Text>
          Visual Studio 2019, esta herramienta nos ayudara para la creación de los scripts y nuestra pagina web.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/Blender.jpg" />
        <Card.Body>
          <Card.Title>Animación 3D</Card.Title>
          <Card.Text>
          "Blender" se encarga del modelado el cual nos ayudara a presentar modelos de alta calidad.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/Unity.jpg" />
        <Card.Body>
          <Card.Title>Desarrollo</Card.Title>
          <Card.Text>
          Unity, nuestra herramienta la cual dará forma a nuestro proyecto y se complementa con las demás tecnologías.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
    </CardGroup>

           <Container>
                <div>
                    <h4 class="section-title">Nuestras Tecnologías</h4>
                    <h1 class="display-5 mb-4">Trabajamos con la más alta tecnología haciendo de nuestro proyecto sobresaliente al resto.</h1>
                </div>
                </Container>


      
    </div>




  );
}

export default ImgOverlayExample;