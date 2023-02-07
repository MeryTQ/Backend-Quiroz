## 🎯 **Desafío 1** 🎯
* Realizar una clase **“ProductManager”** que gestione un conjunto de productos.
* Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
* Cada producto que gestione debe contar con las propiedades:
    - **title** (nombre del producto)
    - **description** (descripción del producto)
    - **price** (precio)
    - **thumbnail** (ruta de imagen)
    - **code** (código identificador)
    - **stock** (número de piezas disponibles)
* Debe contar con un método **“addProduct”** el cual agregará un producto al arreglo de productos inicial.
    - Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    - Al agregarlo, debe crearse con un id autoincrementable
* Debe contar con un método **“getProducts”** el cual debe devolver el arreglo con todos los productos creados hasta ese momento.
* Debe contar con un método **“getProductById”** el cual debe buscar en el arreglo el producto que coincida con el id
    - En caso de no coincidir ningún id, mostrar en consola un error “Not found”

---

## 🎯 **Desafío 2** 🎯
* Realizar una clase de nombre **“ProductManager”**, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
* La clase debe contar con una variable **this.path**, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
* Debe guardar objetos con el siguiente formato:
    - **id** (se debe incrementar automáticamente, no enviarse desde el cuerpo)
    - **title** (nombre del producto)
    - **description** (descripción del producto)
    - **price** (precio)
    - **thumbnail** (ruta de imagen)
    - **code** (código identificador)
    - **stock** (número de piezas disponibles)
* Debe tener un método **addProduct** el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
* Debe tener un método **getProducts**, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
* Debe tener un método **getProductById**, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto.
* Debe tener un método **updateProduct**, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. **NO DEBE BORRARSE SU ID**.
* Debe tener un método **deleteProduct**, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.