"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("socioName", data.message.split("¡Hola, ")[1]?.split("!")[0] || "Socio");
        localStorage.setItem("membershipNumber", data.membershipNumber);
        router.push("/bienvenida");
      } else {
        setMessage(data.error || "Error al iniciar sesión.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: "20px", color: "black" }}>Portal de Café Aurora ☕</h1>
        
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "black",
            backgroundColor: "white"
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "black",
            backgroundColor: "white"
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#0070f3",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Iniciar Sesión
        </button>

        {message && (
          <p style={{
            marginTop: "20px",
            color: message.includes("Gracias") ? "green" : "red",
            fontWeight: "bold"
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
