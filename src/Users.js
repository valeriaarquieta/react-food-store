// src/Users.js
let users = [
     { email: "ejemplo@correo.com", password: "123456" }
  ];
  
  // Simula guardar un nuevo usuario en el JSON
  export const addUser = (userData) => {
    users.push(userData);
  };
  
  // Simula obtener los usuarios desde el JSON
  export const getUsers = () => JSON.parse(JSON.stringify(users)); // Clonamos para evitar modificar el original
  
  export default users;
  