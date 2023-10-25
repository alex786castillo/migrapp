import React, { useState } from "react";
import axios from "axios";

export default function EditSesion() {
  const [images, setImages] = useState([]);

  const changeInput = (e) => {
    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readMultiFiles(e, indexImg);

    newImgsToState.forEach((image) => {
      const formData = new FormData();
      formData.append("image", image.file);

      axios
        .post("http://localhost:3000/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Imagen subida exitosamente", response.data);
          // Eliminar la imagen de la interfaz después de enviarla a la base de datos
          deleteImg(image.index);
        })
        .catch((error) => {
          console.error("Error al subir la imagen", error);
        });
    });

    let newImgsState = [...images, ...newImgsToState];
    setImages(newImgsState);

    console.log(newImgsState);
  };

  const sendImagesToDatabase = () => {
    // Aquí puedes enviar las imágenes a la base de datos usando axios u otra librería
    console.log("Enviando imágenes a la base de datos...");
  };

  function readMultiFiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);

      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setImages(newImgs);
  }

  return (
    <div>
      <input type="file" multiple onChange={changeInput} />
      {images.map((image) => (
        <div key={image.index}>
          <img src={image.url} alt={image.name} />
          <button onClick={() => deleteImg(image.index)}>Eliminar</button>
        </div>
      ))}
      <button onClick={sendImagesToDatabase}>Enviar a la base de datos</button>
    </div>
  );
}

