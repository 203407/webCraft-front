import React from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <tr >            
              <td onClick={() => handleClick(pagina.nombre)}   style={{ cursor: 'pointer' }}>{pagina.nombre}</td>
              <td onClick={() => handleClick(pagina.url)}   style={{ cursor: 'pointer' }}>  <a href={pagina.url} target="_blank" rel="noopener noreferrer">{pagina.url}</a> </td>        
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
