// import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import TablaComponent from './TablaComponent';
import React, { useState, useEffect  } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Home(){
    const navigate = useNavigate();
    // const paginas = [{ nombre: 'lotus', url: 'https://google.com' },        ];
    const [showModal, setShowModal] = useState(false);
    const [nuevaPagina, setNuevaPagina] = useState({ nombre: '', url: '' });
    const [paginas, setPaginas] = useState([{ id:'',nombre: '', url: '' }]);
      
    useEffect(() => {        
        fetch('http://localhost:3001/pageA/get')
          .then((response) => response.json())
          .then((data) =>  setPaginas(data))    
          .catch((error) => console.error('Error:', error));
        
    }, []); 
    
    const handleAgregarClick = () => {
        setShowModal(true);
    };
    
    const handleGuardarClick = async () => {       
        console.log(nuevaPagina)
        
        setNuevaPagina({ nombre: '', url: '' });
        setShowModal(false);
        
        try {
            const response = await fetch('http://localhost:3001/pageA/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(nuevaPagina),
            });
      
            if (!response.ok) {
              throw new Error('Error en la respuesta de la API');
            }else{
              const responseData = await response.json();            
              
              fetch('http://localhost:3001/pageA/get')
              .then((response) => response.json())
              .then((data) =>  setPaginas(data))    
              .catch((error) => console.error('Error:', error));
            }
            
          } catch (error) {
            console.error('Error al realizar la petición POST:', error);
          }          
    };
   

    return(
        <body>
            <header>
                <h1>WebCraft</h1>
            </header>
            <Sidebar page = "1"/>
            <main>
               <div className="page-title">
                    <h2>Páginas registradas</h2>
                    <div>
                <Button variant="primary" onClick={handleAgregarClick}>
                    Agregar
                </Button>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton>
                        <Modal.Title>Agregar Nueva Página</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group>
                            <Form.Label>Nombre de Página</Form.Label>
                            <Form.Control
                                type="text"
                                value={nuevaPagina.nombre}
                                onChange={(e) => setNuevaPagina({ ...nuevaPagina, nombre: e.target.value })}
                            />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>URL de Página</Form.Label>
                            <Form.Control
                                type="text"
                                value={nuevaPagina.url}
                                onChange={(e) => setNuevaPagina({ ...nuevaPagina, url: e.target.value })}
                            />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleGuardarClick}>
                            Registrar
                        </Button>
                        </Modal.Footer>
                    </Modal>
    </div>

    </div>
        <div className="content"><div>              
        <TablaComponent paginas={paginas} />
    </div>
              
               </div>
            </main>
        </body>

    );
}

export default Home;