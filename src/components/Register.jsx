import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importa los iconos AiOutlineEye y AiOutlineEyeInvisible
import Sidebar from "./Sidebar";

function Register() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }

    const postData = { "usuario":usuario, "passw": password};
    try {
      const response = await fetch("http://localhost:3000/usuario/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      } else {
        const responseData = await response.json();
        console.log(JSON.stringify(responseData, null, 2));
        // navigate("/inicio"); // Redirige al usuario después del registro
        setMensajeAlerta('Usuario agregado correctamente');
        setMostrarAlerta(true);
        
        setTimeout(() => {
          setMostrarAlerta(false);
        }, 2000);
        setUsuario("")
        setPassword("")
        setConfirmPassword("")
        setShowPassword(false)
        setShowConfirmPassword(false)
      }
    } catch (error) {
      console.error("Error al realizar la petición POST:", error);
    }
  };

  return (
    <body>
      <header>
        <h1>WebCraft</h1>
      </header>
      <Sidebar page="3" />
      <main>
        <div className="page-title">
          <h2>Agregar usuario nuevo</h2>                    
          {mostrarAlerta && (
        <div className="alerta">
          {mensajeAlerta}
        </div>
      )}
        </div>
      
        <div className="main-container-register">
          <div className="register-form">
            <div className="login-mid">
              <input
                type="text"
                placeholder="Usuario"
                className="form-input"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <div className="passw-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="icon-passw">
                  {showPassword ? (
                    <AiOutlineEye
                      size={22}
                      opacity={0.7}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      opacity={0.7}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar Contraseña"
                  className="form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="icon-passw">
                  {showConfirmPassword ? (
                    <AiOutlineEye
                      size={22}
                      opacity={0.7}
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      opacity={0.7}
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <button
                type="button"
                className="main-btn"
                onClick={handleRegister}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Register;