import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

function Register() {

  const navigate = useNavigate();
  const tipos = [{ tipe: 'lotus', data: 'https://google.com' },        ];


  return (
    <body>
    <header>
        <h1>WebCraft</h1>
    </header>
    <Sidebar page = "3"/>
    <main>
      <div  className="page-title">
        <h2>Agregar usuario nuevo</h2>
      </div>      
     
        
    </main>
</body>
  );
}

export default Register;
