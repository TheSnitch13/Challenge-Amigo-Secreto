# 🎁 Amigo Secreto

Una **web simple** que permite ingresar los nombres de tus amigos y luego **sortear al azar** quién será el amigo secreto. Ideal para organizar regalos en grupos de amigos, familiares o compañeros de trabajo.

---
<img width="1919" height="915" alt="image" src="https://github.com/user-attachments/assets/acf449a3-a640-4445-86a5-5def78cdd9b7" />


## 📌 Características

- Agregar nombres de amigos en una lista dinámica.  
- Validar entradas para evitar campos vacíos.  
- Mostrar la lista de amigos en tiempo real.  
- Selección aleatoria de un amigo secreto mediante sorteo.  
- Interfaz sencilla y fácil de usar.

<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/318f4e21-241e-4190-8028-b59ed9c34572" />
<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/d57d966d-19cd-42eb-9df2-e504120c61f8" />


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
