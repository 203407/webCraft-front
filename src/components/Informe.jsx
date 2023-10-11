import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Modal, Button, Form } from 'react-bootstrap';

import { Table } from 'react-bootstrap';
function Informe() {
  const { nombre } = useParams();    
  const [data, setData] = useState([{"elementosM":"", "diaM":"", "seccionM": "", "sexoM":""}]);
  const [showModal, setShowModal] = useState(false);
  const [fecha, setFecha] = useState({ f1: '', f2: '' });  

  useEffect( () => {     
     getdata()          
}, []); 


const getdata = async () => {

  const postData = {"nombre":nombre}

  try {
    const response = await fetch('http://localhost:3001/pages/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }else{
      const responseData = await response.json();       

        setData([{"elementosM":findMostCommonAndCount(responseData, 'mostClick'),
      "diaM": findMostCommonAndCount(responseData, 'diasMost'), 
      "seccionM":  findMostCommonAndCount(responseData, 'seccionMost'), 
      "sexoM":findMostCommonAndCount(responseData, 'sexo'), 
      "paisM": findMostCommonAndCount(responseData, 'location')
    }])
   
    }
    
  } catch (error) {
    console.error('Error al realizar la petición POST:', error);
  }
  
};


const getDataByFecha = async (f1,f2) => {
  console.log("aqui")
  const postData = {"f1":f1,"f2":f2,"nombre":nombre}

  try {
    const response = await fetch('http://localhost:3001/pages/get/fecha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }else{
      const responseData = await response.json();       

        setData([{"elementosM":findMostCommonAndCount(responseData, 'mostClick'),
      "diaM": findMostCommonAndCount(responseData, 'diasMost'), 
      "seccionM":  findMostCommonAndCount(responseData, 'seccionMost'), 
      "sexoM":findMostCommonAndCount(responseData, 'sexo'), 
      "paisM": findMostCommonAndCount(responseData, 'location')
    }])
   
    }
    
  } catch (error) {
    console.error('Error al realizar la petición POST:', error);
  }
  
};



function findMostCommonAndCount(data, key) {
  const countMap = {};

  for (const item of data) {
    const value = item[key];
    countMap[value] = (countMap[value] || 0) + 1;
  }
  
  const elementsArray = Object.entries(countMap);
  elementsArray.sort((a, b) => b[1] - a[1]);

  const elementsWithCount = elementsArray.map(entry => ({
    elemento: entry[0],
    cant: entry[1],
  }));

  return elementsWithCount;
}


const handleAgregarClick = () => {
  setShowModal(true);
};

const handleGuardarClick = async () => {       
  console.log(fecha.f1)
  
  getDataByFecha(fecha.f1,fecha.f2)
  setFecha({ f1: '', f2: '' });
  setShowModal(false);
   
};


  return (
    <body>
    <header>
        <h1>WebCraft</h1>
    </header>
    <Sidebar page = "2"/>
    <main>
    
      <div  className="page-title">
        <h2>Reporte {nombre}</h2>
        <Button variant="primary" onClick={handleAgregarClick}>Filtrar</Button>

    <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
          <Modal.Title>Filtrar por fecha</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form>
                     <Form.Group>
                      <Form.Label>Fecha 1</Form.Label>
                      <Form.Control
                           type="date"                            
                            onChange={(e) => setFecha({ ...fecha, f1: e.target.value })}
                      />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Fecha 2</Form.Label>
                        <Form.Control
                                type="date"                                
                                onChange={(e) => setFecha({ ...fecha, f2: e.target.value })}/>
                      </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleGuardarClick}>
                            Filtrar
                        </Button>
                        </Modal.Footer>
      </Modal>    
      </div>      
     
      <CardGroup>

        <div className="card-informe">     
        <Card border="dark">
          <Card.Header> <h2> Elementos con mas clicks</h2></Card.Header>
          <Card.Body>
              {/* <Card.Text onClick={() =>  data[0].diaM.map((dia, index) => console.log(dia.elemento))}>
            asdasd
            </Card.Text> */}
             
            <Table>
                <tbody>
                {                       
                (data[0].elementosM) ? (
                
                  data[0].elementosM.map((dia, index) => 
                  <tr key={index}>
                  <td>{dia.elemento}</td>                
                  <td>{dia.cant}</td>                
                  </tr>                                                
                )
                ) : (
                  <tr>
                    <td>No hay datos disponibles</td>
                  </tr>
                )
                  }
                </tbody>
              </Table>
              
            
          </Card.Body>
        </Card>      
        </div>      

        <Card border="dark" >
          <Card.Header><h2>Sexo de mayor vistas</h2></Card.Header>
          <Card.Body>
           
          <Table>
                <tbody>
                {                       
                (data[0].sexoM) ? (
                
                  data[0].sexoM.map((dia, index) => 
                  <tr key={index}>
                  <td>{dia.elemento}</td>                
                  <td>{dia.cant}</td>                
                  </tr>                                                
                )
                ) : (
                  <tr>
                    <td>No hay datos disponibles</td>
                  </tr>
                )
                  }
                </tbody>
              </Table>
              
          </Card.Body>
        </Card>
      </CardGroup>

      <div className="div-informe-down">
        <CardGroup>

          <div className="card-informe-down">     
          <Card border="dark">
            <Card.Header> <h2>Usuarios por pais</h2> </Card.Header>
            <Card.Body>

            <Table>
                <tbody>
                {                       
                (data[0].paisM) ? (
                
                  data[0].paisM.map((dia, index) => 
                  <tr key={index}>
                  <td>{dia.elemento}</td>                
                  <td>{dia.cant}</td>                
                  </tr>                                                
                )
                ) : (
                  <tr>
                    <td>No hay datos disponibles</td>
                  </tr>
                )
                  }
                </tbody>
              </Table>
              
            </Card.Body>
          </Card>      
          </div>      

          <div className="card-informe-down2">     
          <Card border="dark">
            <Card.Header><h2>Seccion con mas vistas</h2> </Card.Header>
            <Card.Body>                         

            <Table>
                <tbody>
                {                       
                (data[0].seccionM) ? (
                
                  data[0].seccionM.map((dia, index) => 
                  <tr key={index}>
                  <td>{dia.elemento}</td>                
                  <td>{dia.cant}</td>                
                  </tr>                                                
                )
                ) : (
                  <tr>
                    <td>No hay datos disponibles</td>
                  </tr>
                )
                  }
                </tbody>
              </Table>

            </Card.Body>
          </Card>      
          </div>      

          <div className="card-informe-down3">     
          <Card border="dark">
            <Card.Header><h2>Dias de mas ingreso</h2> </Card.Header>
            <Card.Body>                                

              <Table>
                  <tbody>
                  {                       
                  (data[0].diaM) ? (
                  
                    data[0].diaM.map((dia, index) => 
                    <tr key={index}>
                    <td>{dia.elemento}</td>                
                    <td>{dia.cant}</td>                
                    </tr>                                                
                  )
                  ) : (
                    <tr>
                      <td>No hay datos disponibles</td>
                    </tr>
                  )
                    }
                  </tbody>
                </Table>

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
