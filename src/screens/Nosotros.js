
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from "./Navbar";
import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';


function AdditionalContentExample() {
  return (
    <div>
    <Navbar> </Navbar>
    <Card>
      <Card.Img style={{  width: "100%", height: "200px" }} src="/images/kio.png" alt="Card image" />
      <Card.ImgOverlay>
        



        <Card.Title><h1 >NOSOTROS</h1></Card.Title>

      </Card.ImgOverlay>
    </Card>
      <p>
      
Nuestra historia
Este proyecto nace de los problemas que hay en la ciudad de Fortín, 
se observa que hay muchos lugares físicos donde se puede realizar un cambio,
 sea un parque, una tienda, un terreno solitario, entre otros.
</p>


<p>
Así nace "Construye Tu Ciudad". una aplicación interactiva en la que el usuario podrá visualizar su ciudad de una manera virtual y así mismo poder observar con detalle la ciudad, esto nos servirá para poder hacer cambios dentro de la aplicación en los que el usuario podrá mover, agregar, quitar elementos de la ciudad que hagan que esta sea un mejor lugar para vivir. Esto con la finalidad de poder llevar tus ideas a los lideres políticos para que sea posible el cambio, ya sea un árbol, un bote de basura, una farmacia, una tienda, un parque, el fin de esto es que sea posible el cambio.
      </p>
      
      
    
    </div>
  );
}

export default AdditionalContentExample;
