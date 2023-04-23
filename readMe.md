# Práctica SPA

---
## Inicio
Hay 2 alternativas para probar el proyecto:
* Acceder al siguiente [enlace](https://productos-spa.netlify.app/) de **Netlify**...
* Iniciar el proyecto desde la terminal del ordenador, ejecutando los siguientes pasos:  
  1. Clonar el proyecto copiando el siguiente [enlace](https://github.com/pablo2637/SPA.git).
  2. Abrir una terminal en la carpeta donde se ha clonado.
  3. Ejecutar primero el comando '***yarn***' y luego '***yarn dev***', esto nos proporcionará un enlace para acceder desde el navegador a la app.

---
### Tecnologías
* react: 18.2.0
* react-dom: 18.2.0
* react-router-dom: 6.10.0
* sass: 1.62.0

---
### Funcionalidad
* La *app* cuenta con una página principal y un **login**/**registro** de usuarios, necesarios para acceder.
* En este proyecto se utiliza el *Local Storage* para guardar los usuarios registrados, ya que no se requería el uso de bases de datos, pero **sí** se validan los datos de igual manera, por ejemplo: *no puede haber 2 usuarios registrados con el mismo email*...
* Los usuarios logueados tienen acceso a una *lista* de categorías, que al elegir alguna muestra los productos que contiene. Esto es posible haciendo un *fetch* a la api [dummyJSON](https://dummyjson.com/), en el evento **onChange** de la lista.
* Se utilizan 2 contextos:
    1. **Users**: se usa para verificar las rutas de la app, **no** permitiendo acceder a usuarios que no esten logueados a las rutas privadas.
    2. **Categories**: usado para **no** tener que hacer un *fetch* de las categorías cada vez que alguien se loguea, sino sólo la primera vez que se ejecuta la app.
*  Una vez dentro, por defecto, se muestra la **primera categoría** de la lista y se hace un *fetch* para obtener los artículos que contiene.
*  Los productos se muestran en *Cards*, con la posibilidad de ver más información pulsando el botón '**Más Info**'.
*  Hay posibilidad de realizar una búsqueda que se realiza sobre **todas** las categorías, los resultados devueltos se muestran también en **Cards**.