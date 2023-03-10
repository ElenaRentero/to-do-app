<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216581061-2788bd5a-6baa-49af-a528-ec5c53cf7c4e.png">

# To-Do-App 馃摑
En este repositorio puedes encontrar una **aplicaci贸n web responsive** que te permite administrar tus tareas, pudiendo a帽adirlas a una lista, filtrarlas, borrarlas, marcarlas como activas o completadas y ver un detalle de las mismas. Se ha utilizado **React** para su desarrollo.

> **Note**
> Enlace directo al proyecto pinchando en el siguiente [enlace](https://elenarentero-to-do-app.netlify.app/)

## 馃搶 Descripci贸n 

隆Bienvenido a To Do App - tu administrador de tareas! Si quieres llevar un mejor registro de las tareas que debes realizar esta es tu p谩gina. 

En este repositorio te presentamos una web sencilla, intuitiva y adaptada a cualquier tipo de dispositivo (m贸vil, tablet y PC) para que puedas echarle un vistazo en cualquier momento. Dise帽ado y desarrollado con HTML, Sass y React JS, encontrar谩s una aplicaci贸n que te permite administrar tus tareas.

<img width="1000" alt="sketchtodoapp" src="https://user-images.githubusercontent.com/111798280/220186977-cca973fa-f504-4b65-8298-ed2b9b26d46e.png">

## 馃摉 Requisitos

Se ha utilizado [Vite](https://vitejs.dev/) como punto de partida, una herramienta de compilaci贸n preconfigurada para generar recursos est谩ticos altamente optimizados para producci贸n. La aplicaci贸n consiste en desarrollar un sitio web utilizando los siguientes **elementos**:

- **HTML5**
- **Sass**
- **Flexbox**
- **Media queries**
- **JavaScript ES6**
- **React**

## 鈿? Funcionamiento

Cuenta con las siguientes **funcionalidades**:

- **Lista de tareas**

Lo primero que encontrar谩s al acceder a la aplicaci贸n web ser谩 una tabla con tu lista de tareas, las cuales se almacenan y son recogidas del **Local Storage**. En el caso de que no hayas a帽adido a煤n ninguna tarea encontrar谩s un mensaje indic谩ndote que **"Ning煤n resultado coincide con su b煤squeda"**. Las tareas aparecen ordenadas seg煤n se vayan a帽adiendo a la p谩gina web y la primera letra de las mismas siempre ser谩 **may煤scula**. Si el n煤mero de tareas es mayor que el tama帽o de la tabla, aparecer谩 un **scroll vertical** que le permitir谩 ver el resto de tareas.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216589249-707b4e5b-e38f-4ff3-86e2-75b2ce18622a.png">

- **A帽adir una nueva tarea**

El **input** le permite a帽adir una nueva tarea. En el caso, en el que la tarea que est谩 introduciendo no coincida con ninguna otra presente en la lista aparecer谩 un **bot贸n de "A帽adir"** y el **tick**, que en primer lugar es de color gris se pondr谩 de color verde 鉁?, indic谩ndole que la tarea que ha introducido puede ser a帽adida. Si la tarea introducida se corresponde con otra que ya est谩 en la lista, el tick quedar谩 de color gris y no aparecer谩 el bot贸n de "A帽adir".

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216590520-a58b662b-8f41-4ef7-9325-f3463e847669.png">

- **Filtrado de tareas**

El filtrado de tareas por el nombre se realiza a trav茅s del **input**. Si no hay ninguna tarea que se corresponda con lo introducido, se mostrar谩 el mensaje **"Ning煤n resultado coincide con su b煤squeda"**. Adem谩s, la aplicaci贸n cuenta con un **select** que permite al usuario filtrar las tareas por su **estado**.

- **Borrado de tareas**

Cada tarea cuenta con un bot贸n con una **papelera** que permite al usuario poder borrarla 馃棏锔?. Cuando el bot贸n se encuentra desactivado es de color gris, pero en el momento en el que el usuario se coloca encima para seleccionarlo cambia a **color negro**, permitiendo borrar la tarea. 

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216591620-ea1b0611-8279-4433-a3c5-536ac08240d5.png">

- **Marcar tareas como activas o completadas** 

Cada tarea puede marcarse como **activa o completada**, permitiendo al usuario llevar un mejor registro de las tareas que le falten por realizar.

- **Detalle de las tareas**

Cada tarea cuenta con un **bot贸n de un ojo** para poder ver su detalle 馃憗. En este detalle aparece el **nombre** de la tarea seleccionada, as铆 como un campo para a帽adir una **descripci贸n**. Cuando el usuario hace click en el **bot贸n de editar**, aparece una **谩rea de texto** para que podamos a帽adir una descripci贸n, tras esto el usuario debe hacer click en el tick, quedando esa descripci贸n asociada a esa tarea. Adem谩s, en el detalle de cada tarea la aplicaci贸n cuenta con un **link para poder volver** al listado de tareas de la p谩gina principal.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216593212-ee899cfa-e4eb-4011-8fd1-f38064725faa.png">

## 馃洜锔? Herramientas

El proyecto se ha desarrollado utilizando Vite, como herramienta de compilaci贸n. Tambi茅n contiene un motor de plantillas HTML, un preprocesador Sass y un servidor local, entre otros elementos.

A la hora de resolver el proyecto se han utilizado las siguientes herramientas:

- **HTML** con parciales para facilitar la lectura y organizaci贸n del proyecto
- **CSS/Sass**
  - Flexbox
  - Box model (size, padding and margin)
  - Media queries
- **React Native**
  - Local storage
  - Gesti贸n de eventos en el navegador
  - Estructura de 谩rbol: organizaci贸n del proyecto con una jerarqu铆a en forma de 谩rbol
  - Componentes: identifica componentes 煤nicos y reutilizables
  - UseState: variables de estado para todos los datos manipulados por el usuario
  - Props: flujo de informaci贸n de componentes padres a hijos
  - Lifting: trabajar con eventos y mover informaci贸n hacia arriba
- **Control de versiones GIT**
- **ESLint** para encontrar y arreglar problemas que puedan estar en mi c贸digo de JavaScript
- **Pretier** para formatear el c贸digo
- [**Netlify Drop**](https://app.netlify.com/drop) un servidor que permite alojar tu proyecto desplegado en la nube

## 馃捑 Si te gustar铆a instalarlo, sigue esta gu铆a de inicio r谩pido

En primer lugar, para tener el repositorio en tu ordenador:

1. Haz click en la esquina superior derecha > **Fork**.
1. Te pedir谩 que elijas a qu茅 usuario de GitHub quieres bifurcarlo. **Elige tu usuario**.
1. **Ve a github.com/tu-usuario/nombre-del-proyecto, cl贸nalo** y haz lo que quieras, puedes renombrar el repositorio, cambiar el c贸digo, volver a desplegarlo en GitHub Pages...
1. **Por 煤ltimo** y para que todo funcione correctamente, **debes desactivar GitHub Pages y volver a activarlo** para que GitHub genere la nueva URL correctamente.

Una vez **hecho el fork**:

1. 脕brelo en tu editor de c贸digo.
1. Abre una terminal e **instala las dependencias locales** ejecutando en la terminal de comandos...

```npm install```

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm run dev```

Este comando abre una ventana de Chrome y muestra tu p谩gina web.

Despu茅s de ejecutar ```npm run dev``` ya puedes empezar a editar todos los ficheros que est谩n dentro de la carpeta ```src/``` y programar c贸modamente 馃挮

## 鉁? Resultado final

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/216595897-c02b1bc8-ea44-4cac-a5c9-f50888df7cf6.png">

## 鉁? Feedback

Cualquier aportaci贸n ser谩 bienvenida.

隆隆隆Muchas gracias!!! 馃
