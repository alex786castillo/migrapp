// Un único lugar donde se define la dirección del backend.
// En desarrollo apunta a tu PC (localhost:4001). Cuando se despliegue,
// bastará con definir REACT_APP_API_URL en el entorno de producción.
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4001/api",
});

export default api;
