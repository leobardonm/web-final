"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Bienvenida() {
  const [socioName, setSocioName] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("socioName");
    const number = localStorage.getItem("membershipNumber");
    
    if (!name || !number) {
      router.push("/");
      return;
    }

    setSocioName(name);
    setMembershipNumber(number);
  }, [router]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D2B48C"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: "20px", color: "black" }}>¡Bienvenido a Café Aurora! ☕</h1>
        <p style={{ fontSize: "1.2em", marginBottom: "10px", color: "black" }}>
          Hola, {socioName}
        </p>
        <p style={{ fontSize: "1.1em", color: "black" }}>
          Tu número de membresía es: {membershipNumber}
        </p>
      </div>
    </div>
  );
}
