// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Importar useNavigate

// export default function Login({ setIsAuthenticated }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate(); // Inicializar useNavigate

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const validUsername = process.env.REACT_APP_USERNAME;
//     const validPassword = process.env.REACT_APP_PASSWORD;

//     if (username === validUsername && password === validPassword) {
//       setIsAuthenticated(true); 
//       navigate("/"); 
//     } else {
//       setError("Usuario o contraseña incorrectos");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded-lg shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <input
//           type="text"
//           placeholder="Usuario"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//           Ingresar
//         </button>
//       </form>
//     </div>
//   );
// }
