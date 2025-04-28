import { miembro } from "../models/miembro";

// Datos de prueba o mock db 
const miembros: miembro[] = [
    { username: "sandra.g", password: "latte123", Name: "Sandra García", membershipNumber: 5001 },
    { username: "roberto.m", password: "capuccino456", Name: "Roberto Martínez", membershipNumber: 5002 },
    { username: "esteban.l", password: "espresso789", Name: "Esteban López", membershipNumber: 5003 }
  ];

  export const authenticateUser = (username: string, password: string) => {
    const miembro = miembros.find(m => m.username === username && m.password === password);
  
    if (miembro) {
      return {
        success: true,
        data: {
          Name: miembro.Name,
          membershipNumber: miembro.membershipNumber
        }
      };
    } else {
      return {
        success: false,
        error: "Usuario o contraseña incorrectos."
      };
    }
  };