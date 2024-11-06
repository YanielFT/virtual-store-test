# Virtual Store Test
Ejercicio de Programación (Gestión de Productos)
=============================================

Contexto: Sistema de Gestión de Productos en una Tienda Virtual
--------------------------------------------------------
Tu tarea es desarrollar un sistema para una tienda virtual que vende productos tanto físicos como digitales. El sistema debe permitir gestionar los productos (agregar, modificar, consultar y eliminar) desde el backend, así como mostrar estos productos y manipularlos desde una interfaz web sencilla. A través de este ejercicio, aplicarás conceptos de CRUD, Webservices REST, y patrones de diseño en Java que estimes convenientes, y te conectarás desde el frontend utilizando JavaScript.

Parte 1: Backend en Java (Servicios REST)
Imagina que estás desarrollando el backend de esta tienda. Tendrás dos tipos de productos:

Producto Físico: Productos que requieren envío, como libros, ropa, dispositivos electrónicos, etc.
Producto Digital: Productos descargables, como e-books, música, software, etc.
Las propiedades de los productos varían a excepción que ambos tienen un código y un nombre de producto. Los productos físicos tienen costos de envío, mientras que los digitales tienen un enlace de descarga.
Requerimientos del Backend:

Gestionar productos (CRUD): Crear, leer, actualizar y eliminar productos.
El servicio que maneja los productos debe cumplir que solo exista una instancia de este servicio en toda la aplicación.
El sistema debe exponer las operaciones CRUD a través de una API REST.
Parte 2: Frontend en JavaScript (Conexión con el backend)
Ahora, desarrollarás una interfaz web sencilla que se conecte con el servicio REST del backend para realizar las operaciones CRUD sobre los productos. En la tienda virtual, los usuarios deben poder ver los productos disponibles, agregar nuevos productos, modificar los existentes y eliminarlos.

Requerimientos del Frontend:

Formulario de Producto: Crear un formulario HTML donde el usuario pueda ingresar los detalles de un producto (nombre, precio, tipo de producto, etc.) y seleccionar si es un producto físico o digital.
Conexión con el Backend: Utilizar JavaScript para enviar las solicitudes al WebService REST en Java para:
Mostrar la lista de productos existentes (solicitud GET).
Crear nuevos productos (solicitud POST).
Buscar un producto por su nombre o código.
Modificar productos existentes (solicitud PUT).
Eliminar productos (solicitud DELETE).
Mostrar Productos: Una sección en la página donde se muestran todos los productos recuperados desde el backend. Para cada producto, el usuario debe poder editar o eliminar el producto directamente desde la interfaz.
Requisitos de la Interfaz:

Crear una lista de productos con botones de editar y eliminar.
Un formulario para agregar un nuevo producto o modificar uno existente.
Se pueda buscar un producto y ordenar sería un plus.
Los cambios en el frontend deben reflejarse directamente en el backend utilizando las llamadas a la API REST.