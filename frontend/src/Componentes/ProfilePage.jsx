// ProfilePage.js
import React, { useState } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Perfil de Usuario</h1>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Apellido:
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electrónico:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => alert("Datos guardados: " + JSON.stringify(userData))}
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default ProfilePage;

