// Sesión ligera del lado del cliente.
// Guarda los datos públicos del usuario (nunca la contraseña) para mostrar
// "Mi cuenta" y el saludo. No es un sistema de autenticación con token: la
// cuenta es opcional y la app funciona completa sin iniciar sesión.
const CLAVE = "migrapp_usuario";

export function guardarUsuario(usuario) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(usuario));
  } catch {
    // Modo privado o almacenamiento bloqueado: la app sigue funcionando.
  }
}

export function leerUsuario() {
  try {
    const datos = localStorage.getItem(CLAVE);
    return datos ? JSON.parse(datos) : null;
  } catch {
    return null;
  }
}

export function cerrarSesion() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    // Nada que limpiar si el almacenamiento está bloqueado.
  }
}
