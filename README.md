# 🎁 Amigo Secreto

Una **web simple** que permite ingresar los nombres de tus amigos y luego **sortear al azar** quién será el amigo secreto. Ideal para organizar regalos en grupos de amigos, familiares o compañeros de trabajo.

---

## 📌 Características

- Agregar nombres de amigos en una lista dinámica.  
- Validar entradas para evitar campos vacíos.  
- Mostrar la lista de amigos en tiempo real.  
- Selección aleatoria de un amigo secreto mediante sorteo.  
- Interfaz sencilla y fácil de usar.

---

## 💻 Tecnologías utilizadas

- **HTML** – Estructura de la página.  
- **CSS** – Estilos básicos y diseño limpio.  
- **JavaScript** – Lógica del proyecto, manejo de arrays, validaciones y sorteo aleatorio.

---

## 📝 Estructura del proyecto

```
amigo-secreto/
│
├─ index.html        # Página principal
├─ style.css         # Estilos de la web
└─ app.js         # Lógica de la aplicación
```

---

## 🔧 Funcionalidad clave en JavaScript

* Array `amigos` para almacenar los nombres ingresados.
* Función `nuevoAmigo()` para agregar participantes con validación.
* Función `listarAmigo()` para actualizar la lista en pantalla.
* Uso de `Math.random()` y `Math.floor()` para seleccionar un amigo secreto aleatorio en la función sortearAmigo.

---
