import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const postData = {"passw":password,"usuario":email}
    try {
      const response = await fetch('http://localhost:3000/usuario/login', {
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
        console.log((JSON.stringify(responseData, null, 2)));
            navigate("/inicio");
      }
      
    } catch (error) {
      console.error('Error al realizar la petición POST:', error);
    }
  };

  return (
    <>
      <body>
        <div className="main-container-login">
          <div className="login-form">
            <div className="login-top">
              <h1 className="title">WebCraft</h1>
              <p className="subtitle">Bienvenido otra vez</p>
            </div>
            <div className="login-mid">
              <input
                type="text"
                placeholder="Correo electronico"
                className="form-input"
                id="email-login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <div className="passw-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input"
                id="passw-login"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="icon-passw">
                {showPassword ? 
                <AiOutlineEye size={22} opacity={0.7} onClick={togglePasswordVisibility}/> : 
                <AiOutlineEyeInvisible size={22} opacity={0.7} onClick={togglePasswordVisibility}/> 
                }
              </div>
              </div>
            </div>
            <div className="login-bottom">
              <button type="button" className="main-btn" onClick={handleLogin}>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
