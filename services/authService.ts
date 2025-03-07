import { login } from "../redux/slices/authSlice";
import { fakeLoginService } from "@/models/authModel";


export const handleLogin = async (email: string, password: string, dispatch: any, t: any) => {
  if (!email || !password) {
    return { message: t("error.required") };
  }
  try {
    const response = await fakeLoginService(email, password);
    console.log("response", response);
    dispatch(login(response));
    return { message: t("success.login") };
  } catch (error) {
    return { message: error };
  }
};


export const loginService = async (email: string, password: string) => {
  try {
    const response = await fetch("https://tuapi.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Credenciales incorrectas");

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const registerService = async (email: string, password: string) => {
  try {
    const response = await fetch("https://tuapi.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Error al registrarse");

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
