<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216581061-2788bd5a-6baa-49af-a528-ec5c53cf7c4e.png">

# To-Do-App 📝
En este repositorio puedes encontrar una **aplicación web responsive** que te permite administrar tus tareas, pudiendo añadirlas a una lista, filtrarlas, borrarlas, marcarlas como activas o completadas y ver un detalle de las mismas. Se ha utilizado **React** para su desarrollo.

> **Note**
> Enlace directo al proyecto pinchando en el siguiente [enlace](https://elenarentero-to-do-app.netlify.app/)

## 📌 Descripción 

¡Bienvenido a To Do App - tu administrador de tareas! Si quieres llevar un mejor registro de las tareas que debes realizar esta es tu página. 

En este repositorio te presentamos una web sencilla, intuitiva y adaptada a cualquier tipo de dispositivo (móvil, tablet y PC) para que puedas echarle un vistazo en cualquier momento. Diseñado y desarrollado con HTML, Sass y React JS, encontrarás una aplicación que te permite administrar tus tareas.

## 📖 Requisitos

Se ha utilizado [Vite](https://vitejs.dev/) como punto de partida, una herramienta de compilación preconfigurada para generar recursos estáticos altamente optimizados para producción. La aplicación consiste en desarrollar un sitio web utilizando los siguientes **elementos**:

- **HTML5**
- **Sass**
- **Flexbox**
- **Media queries**
- **JavaScript ES6**
- **React**

## ⚙ Funcionamiento

Cuenta con las siguientes **funcionalidades**:

- **Lista de tareas**

Lo primero que encontrarás al acceder a la aplicación web será una tabla con tu lista de tareas, las cuales se almacenan y son recogidas del **Local Storage**. En el caso de que no hayas añadido aún ninguna tarea encontrarás un mensaje indicándote que **"Ningún resultado coincide con su búsqueda"**. Las tareas aparecen ordenadas según se vayan añadiendo a la página web y la primera letra de las mismas siempre será **mayúscula**. Si el número de tareas es mayor que el tamaño de la tabla, aparecerá un **scroll vertical** que le permitirá ver el resto de tareas.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216589249-707b4e5b-e38f-4ff3-86e2-75b2ce18622a.png">

- **Añadir una nueva tarea**

El **input** le permite añadir una nueva tarea. En el caso, en el que la tarea que está introduciendo no coincida con ninguna otra presente en la lista aparecerá un **botón de "Añadir"** y el **tick**, que en primer lugar es de color gris se pondrá de color verde ✅, indicándole que la tarea que ha introducido puede ser añadida. Si la tarea introducida se corresponde con otra que ya está en la lista, el tick quedará de color gris y no aparecerá el botón de "Añadir".

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216590520-a58b662b-8f41-4ef7-9325-f3463e847669.png">

- **Filtrado de tareas**

El filtrado de tareas por el nombre se realiza a través del **input**. Si no hay ninguna tarea que se corresponda con lo introducido, se mostrará el mensaje **"Ningún resultado coincide con su búsqueda"**. Además, la aplicación cuenta con un **select** que permite al usuario filtrar las tareas por su **estado**.

- **Borrado de tareas**

Cada tarea cuenta con un botón con una **papelera** que permite al usuario poder borrarla 🗑️. Cuando el botón se encuentra desactivado es de color gris, pero en el momento en el que el usuario se coloca encima para seleccionarlo cambia a **color negro**, permitiendo borrar la tarea. 

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216591620-ea1b0611-8279-4433-a3c5-536ac08240d5.png">

- **Marcar tareas como activas o completadas** 

Cada tarea puede marcarse como **activa o completada**, permitiendo al usuario llevar un mejor registro de las tareas que le falten por realizar.

- **Detalle de las tareas**

Cada tarea cuenta con un **botón de un ojo** para poder ver su detalle 👁. En este detalle aparece el **nombre** de la tarea seleccionada, así como un campo para añadir una **descripción**. Cuando el usuario hace click en el **botón de editar**, aparece una **área de texto** para que podamos añadir una descripción, tras esto el usuario debe hacer click en el tick, quedando esa descripción asociada a esa tarea. Además, en el detalle de cada tarea la aplicación cuenta con un **link para poder volver** al listado de tareas de la página principal.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216593212-ee899cfa-e4eb-4011-8fd1-f38064725faa.png">

## 🛠️ Herramientas

El proyecto se ha desarrollado utilizando Vite, como herramienta de compilación. También contiene un motor de plantillas HTML, un preprocesador Sass y un servidor local, entre otros elementos.

A la hora de resolver el proyecto se han utilizado las siguientes herramientas:

- **HTML** con parciales para facilitar la lectura y organización del proyecto
- **CSS/Sass**
  - Flexbox
  - Box model (size, padding and margin)
  - Media queries
- **React Native**
  - Local storage
  - Gestión de eventos en el navegador
  - Estructura de árbol: organización del proyecto con una jerarquía en forma de árbol
  - Componentes: identifica componentes únicos y reutilizables
  - UseState: variables de estado para todos los datos manipulados por el usuario
  - Props: flujo de información de componentes padres a hijos
  - Lifting: trabajar con eventos y mover información hacia arriba
- **Control de versiones GIT**
- **Netlify Drop** un servidor que permite alojar tu proyecto desplegado en la nube

## 💾 Si te gustaría instalarlo, sigue esta guía de inicio rápido

En primer lugar, para tener el repositorio en tu ordenador:

1. Haz click en la esquina superior derecha > **Fork**.
1. Te pedirá que elijas a qué usuario de GitHub quieres bifurcarlo. **Elige tu usuario**.
1. **Ve a github.com/tu-usuario/nombre-del-proyecto, clónalo** y haz lo que quieras, puedes renombrar el repositorio, cambiar el código, volver a desplegarlo en GitHub Pages...
1. **Por último** y para que todo funcione correctamente, **debes desactivar GitHub Pages y volver a activarlo** para que GitHub genere la nueva URL correctamente.

Una vez **hecho el fork**:

1. Ábrelo en tu editor de código.
1. Abre una terminal e **instala las dependencias locales** ejecutando en la terminal de comandos...

```npm install```

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm run dev```

Este comando abre una ventana de Chrome y muestra tu página web.

Después de ejecutar ```npm run dev``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente 💫

## ✅ Resultado final

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216595897-c02b1bc8-ea44-4cac-a5c9-f50888df7cf6.png">

## ✨ Feedback

Cualquier aportación será bienvenida.

¡¡¡Muchas gracias!!! 🤗
