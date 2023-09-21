import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

function Informe() {

  const navigate = useNavigate();
  const tipos = [{ tipe: 'lotus', data: 'https://google.com' },        ];


  return (
    <body>
    <header>
        <h1>WebCraft</h1>
    </header>
    <Sidebar page = "2"/>
    <main>
      <div  className="page-title">
        <h2>Reporte ?</h2>
      </div>  

      <CardGroup>

        <div className="card-informe">     
        <Card border="dark">
          <Card.Header>Elementos con mas clicks</Card.Header>
          <Card.Body>
          
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>      
        </div>      

        <Card border="dark" >
          <Card.Header>sexo de mayor vistas</Card.Header>
          <Card.Body>
           
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <div className="div-informe-down">
        <CardGroup>

          <div className="card-informe-down">     
          <Card border="dark">
            <Card.Header>Usuarios por pais</Card.Header>
            <Card.Body>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>      
          </div>      

          <div className="card-informe-down2">     
          <Card border="dark">
            <Card.Header>Paginas con mas vistas</Card.Header>
            <Card.Body>
             
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>      
          </div>      

          <div className="card-informe-down3">     
          <Card border="dark">
            <Card.Header>dias de mas ingreso</Card.Header>
            <Card.Body>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>      
          </div>      
          
        </CardGroup>

      </div>
     
        
    </main>
</body>
  );
}

export default Informe;
