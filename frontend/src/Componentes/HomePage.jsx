// HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido a la Página de Inicio</h1>
      </header>
      <section>
        <p>Personaliza según tus necesidades.</p>
      </section>
      <section style={{ display: "flex", marginTop: "20px" }}>
        <div style={newsCardStyle}>
          <h3>Título de la Noticia 1</h3>
          <p>Descripción de la noticia 1.</p>
        </div>
        <div style={newsCardStyle}>
          <h3>Título de la Noticia 2</h3>
          <p>Descripción de la noticia 2.</p>
        </div>
        {/* Agrega más noticias según sea necesario */}
      </section>
    </div>
  );
};

const newsCardStyle = {
  width: "30%",
  padding: "10px",
  border: "1px solid #ccc",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginRight: "10px",
  backgroundColor: "#fff",
};

export default HomePage;
