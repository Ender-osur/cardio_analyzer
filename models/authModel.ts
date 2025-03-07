export const fakeLoginService = async (email: string, password: string) => {
  return new Promise<{ token: string, email: string, name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "123456") {
        resolve({ 
          token: "fake_token_123",
          email: email,
          name: "Usuario de Prueba"
        });
      } else {
        reject("Credenciales inválidas");
      }
    }, 1000);
  });
};