// src/services/authService.ts
import { login } from "../redux/slices/authSlice";
import { AppDispatch } from "../redux/store";

const fakeLogin = async (): Promise<string> => {
  // Simula una llamada a la API para autenticación
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("12345"); // Token simulado
    }, 1000);
  });
};

export const handleLoginService = async (dispatch: AppDispatch) => {
  try {
    const token = await fakeLogin(); // Aquí harías la llamada real a la API
    dispatch(login({ token })); // Actualiza el estado global
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error; // Manejar errores si es necesario
  }
};
