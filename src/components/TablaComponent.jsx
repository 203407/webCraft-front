import React from 'react';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

function TablaComponent({ paginas }) {  
  const handleClick = (contenido) => {
    console.log(contenido);  
  };

  return (        
    
    <Card style={{ width: '80rem' }}>
     
      <Card.Body>
       
        <Card.Text>
        <Table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
  
          {paginas.map((pagina) => (
      

            <tr key={pagina.id}>
            <td>
              <Link to={`/informe/${pagina.nombre}`}>
                {pagina.nombre}
              </Link>
            </td>
            <td>
              <a href={pagina.url} target="_blank" rel="noopener noreferrer">
                {pagina.url}
              </a>
            </td>
          </tr>
            
          ))}
        </tbody>
        </Table>
        </Card.Text>
        
      </Card.Body>
    </Card>


  );
}

export default TablaComponent;
