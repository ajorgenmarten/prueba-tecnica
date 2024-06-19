# Test de Conocimientos Generales para Desarrollador Fullstack


## Sección 1: Symfony

1. **Pregunta de Configuración:**
- Describe los pasos básicos para levantar un proyecto en Symfony.

 `Respuseta` Primero crear el proyecto con symfony new "nombre del proyecto", y para levantarlo con symfony server:start

2. **Pregunta de Código:**
- Crea un controlador en Symfony que maneje una ruta /hello/{name} y devuelva un saludo personalizado. Además, si el nombre no se proporciona, debe devolver un saludo predeterminado "Hello World". (opcional) Implementa también una prueba unitaria para verificar que la ruta devuelve el saludo correcto.

`Respuesta` Controlador: src/Controller/GreetController.php   Test: tests/GreetTest.php

3. **Pregunta Teórica:**
- Explica la arquitectura de Symfony y cómo se organiza un proyecto típico en términos de carpetas y archivos.

`Respuesta` `bin` contiene scripts ejecutables como el de la console de symfony, `config` Almacena todos los archivos de configuración del proyecto, incluyendo configuraciones de servicios, rutas, paquetes y otros, `migrations` Contiene los archivos de migración de la base de datos, `public` Es la raíz pública del proyecto. Contiene el archivo index.php, que es el punto de entrada de la aplicación. `src` Contiene el código fuente de la aplicación. Aquí es donde se encuentran los controladores, entidades, repositorios, servicios y otros componentes. `templates` Almacena las plantillas Twig utilizadas para renderizar las vistas de la aplicación. `var` Almacena archivos generados por la aplicación, como cachés, logs y otros archivos temporales. `vendor` esta es la carpeta que contiene las dependencias instaladas para el proyecto. `tests` Almacena los archivos de prueba (tests) de la aplicación

4. **Pregunta de Código:**
- Escribe un servicio en Symfony que se inyecta en un controlador y realiza una operación matemática básica (por ejemplo, sumar dos números). ¿Qué configuraciones son necesarias para poder usarlo? (opcional) Implementa también una prueba unitaria para verificar el correcto funcionamiento del servicio.

`Respuesta` `src/Service/MathService.php`

5. **Pregunta de Código:**
- Muestra cómo crear un formulario en Symfony para una entidad User con campos username y email.

6. **Pregunta Teórica:**
- Explica el concepto de Dependency Injection (DI) en Symfony y cómo se configura.

`Respuesta` La inyeccion de dependecia es un patron de diseño que permite a una clase recibir sus dependencias desde una fuente externa, cuyo principal objetivo es hacer que el codigo sea mas modular y reutilizable

7. **Pregunta de Código:**
- Escribe una consulta Doctrine en Symfony para obtener todos los registros de una entidad Product donde el precio sea mayor a 100.

8. **Pregunta Teórica:**
- ¿Qué es el Event Dispatcher en Symfony y para qué se utiliza?

9. **Pregunta de Código:**
- Crea un validador personalizado en Symfony para asegurar que el campo email de una entidad User no pertenece a un dominio específico (por ejemplo, "example.com"). Muestra cómo configurar este validador y cómo sería utilizado en la entidad User.

10. **Pregunta de Código:**
- Implementa un Event Subscriber en Symfony que escuche el evento kernel.request y registre en un archivo de log cada visita a cualquier página de la aplicación. Asegúrate de configurar el servicio correctamente para que el suscriptor se registre con el evento.


## Sección 2: JavaScript

1. **Pregunta Teórica:**
- Explica la diferencia entre var, let y const en JavaScript.

`Respuesta` La diferencia es que var define la variable en el entorno global o de función, y let en un entorno de bloque

2. **Pregunta de Código:**
- Escribe una función en JavaScript que invierta una cadena de texto.

`Respuesta`
```js
const revert = (text) => text.split('').reverse().join('')
```

3. **Pregunta Teórica:**
- ¿Qué es el Event Loop en JavaScript y cómo funciona?

`Respuesta` El event loop es el que permite que javascript ejecute funciones asíncronas sin bloquar la ejecución del código y getionar la pila de ejecución y la cola de tareas

4. **Pregunta de Código:**
- Escribe un script en JavaScript que filtre los números pares de un array de números y los muestre en la consola.

`Respuesta` 
```js
const evenNums = (numArr) => numArr.filter(num => { if ( num % 2 == 0 ) { console.log(num); return true } return false })
```

5. **Pregunta Teórica:**
- ¿Qué es el DOM y cómo se manipula usando JavaScript?

`Respuesta` El Document Object Model es como la interfaz de programacion para los documentos html que representa su estructura como un arbol de nodos donde cada es un objeto que representa una parte del documento, este se manipula a travez de metodos y propiedades del objeto `document`

6. **Pregunta de Código:**
- Escribe un código en JavaScript que añada un event listener a un botón con el id #myButton para mostrar una alerta con el mensaje "Hello World" al hacer clic.

`Respuesta`
```js
const button = document.getElementById('myButton')
button.addEventListener('click', () => {
    alert("Hello World")
})
```


7. **Pregunta Teórica:**
- Explica qué es una Promesa en JavaScript y proporciona un ejemplo básico.

`Respuesta` Una promesa en javascript es un objeto que representa la eventual finalizacion o falla de una operación
```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola Mundo')
    }, 300)
})
```

8. **Pregunta de Código:**
- Escribe una función en JavaScript que haga una petición AJAX (usando fetch) para obtener datos de una API y los muestre en un elemento con el id #result.

`Respuesta`
```js
const fetcher = async (api) => {
    const response = await fetch(api)
    if (!response.ok) throw new Error('Algo a ocurrido con '+ api)
    const text = await response.json()
    document.getElementById('result').innerText = text
}
```

9. **Pregunta Teórica:**
- ¿Cuál es la diferencia entre null, undefined y NaN en JavaScript?

`Respuesta` null indica que la variable existe, pero se le ha dado un valor vacío intencionalmente y en operaciones matemáticas se traduce a 0, undefined en cambio representa una variable que ha quedado sin definir, y NaN significa que no es un número y se obtiene tras el resultado de alguna operacion que deberían producir un número válido pero no pudieron como `0 / 0`, `parseInt('texto')`

10. **Pregunta de Código:**
- Implementa una función en JavaScript que use localStorage para guardar una clave-valor y luego recuperarla.

`Respuesta`
```js
const useStorage = (key, value) => {
    if (key == undefined) throw new Error('Debe proporcionar una key')
    if (value == undefined) {
        return localStorage.getItem(key)
    }
    else {
        localStorage.setItem(key, value)
    }
}
```

## Sección 3: Git

1. **Pregunta Teórica:**
- ¿Qué es Git y para qué se utiliza en el desarrollo de software?

`Respuesta` Git es un controlador de versiones de código, en el desarrollo de software se utiliza para organizar la resolucion de tareas en un equipo de programación

2. **Pregunta de Comandos:**
- ¿Cuál es el comando para clonar un repositorio de Git?

`Respuesta` git clone 

3. **Pregunta Teórica:**
- Explica qué es un "branch" (rama) en Git y para qué se utiliza.

`Respuesta` Un branch en Git es una forma de separar el código de la rama principal, lo cual a su vez permite que varios programadores trabajen en el mismo proyecto pero en diferentes partes

4. **Pregunta de Comandos:**
- Proporciona los comandos necesarios para crear una nueva rama llamada feature-xyz, cambiar a esa rama, y luego fusionarla con la rama main.

`Respuesta` `git branch feature-xyz` `git checkout feature-xyz` `git merge feature-xyz`

5. **Pregunta Teórica:**
- ¿Qué es un "merge conflict" y cómo se resuelve?

`Respuesta` Esto pasa cuando intentas fusionar dos ramas que tienen cambios en las mismas lineas de códigos de un archivo, esto se resuelve editando el codigo del archivo decidiendo cual se queda, luego agregas el archivo con `git add` y despues realizas un commit

6. **Pregunta de Comandos:**
- ¿Cuál es el comando para visualizar el estado actual del repositorio en Git?

`Respuesta` git status

7. **Pregunta Teórica:**
- Explica la diferencia entre git pull y git fetch.

`Respuesta` La diferencia es que git pull te aplica los ultimos cambios, y git fetch pone esos cambios en otra rama

8. **Pregunta de Comandos:**
- ¿Cuál es el comando para revertir el último commit en Git?

`git revert`

9. **Pregunta Teórica:**
- ¿Qué es un "remote repository" y cómo se configura en Git?

`Respuesta` Es una version del proyecto que se queda guardado en interntet, ya sea en Github, bitbucket, gitlab o cualquier otra, para configurarlo de hace agregando el origen `git remote add` le das un nombre y de pues la url

10. **Pregunta de Comandos:**
- Proporciona los comandos para añadir todos los cambios en los archivos al staging area y luego realizar un commit con el mensaje "Initial commit".

`Respuesta` `git add .` `git commit -m "Initial commit"`



## Sección 4: MySQL

1. **Pregunta de Código:**
- Escribe una consulta SQL para crear una base de datos llamada company y una tabla llamada employees con las siguientes columnas: id (INT, auto-increment, primary key), name (VARCHAR(100)), position (VARCHAR(50)), salary (DECIMAL(10, 2)), y hire_date (DATE).

`Respuesta`
```sql
CREATE TABLE company;

USE company;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);
```

2. **Pregunta Teórica:**
- Explica la diferencia entre una clave primaria (Primary Key) y una clave foránea (Foreign Key) en MySQL. ¿Cuándo y por qué se utilizan?

`Respuesta` La clave primaria es la que se utiliza para identificar cada elemento de una tabla, y la llave foránea es la que hace referencia a un elemento de otra tabla que se utiliza para crear relaciones entre tablas

3. **Pregunta de Código:**
- Escribe una consulta SQL para insertar tres registros en la tabla employees creada en la pregunta 2.

`Respuesta` 
```sql
INSERT INTO employees (name, position, salary, hire_date) VALUES
('Alejandro Jorgen', 'Gerente', 75000.00, '2023-01-15'),
('Angela Virginea', 'Desarrolladora', 60000.00, '2023-02-20'),
('Norka Torres', 'Analista', 55000.00, '2023-03-10');
```

4. **Pregunta de Código:**
- Muestra cómo actualizar el salario de un empleado específico en la tabla employees. Por ejemplo, actualiza el salario del empleado con id = 1 a 60000.00.

`Respuesta` 
```sql
UPDATE employees SET salary = 60000.00 WHERE id = 1
```

5. **Pregunta de Código:**
- Escribe una consulta SQL para seleccionar todos los empleados cuyo salario sea mayor a 50000.00 y ordenarlos por el campo hire_date en orden descendente.

`Respuesta`
```sql
SELECT * FROM employees WHERE salary > 50000.00 ORDER BY hire_date DESC
```

6. **Pregunta Teórica:**
- ¿Qué es una transacción en MySQL y cómo se utiliza? Proporciona un ejemplo de uso.

`Respuesta` Es un conjunto de operaciones que deben ejecutarse como una sola operacion, esto quiere decir que todas las operaciones dentro de esta deben completarse con exito
```sql
START TRANSACTION;

UPDATE employees SET salary = salary + 1000 WHERE hire_data < '2020-01-01'

UPDATE employees SET salary = salary + 7000 WHERE hire_data < '2015-01-01'

COMMIT;
```

7. **Pregunta de Código:**
- Crea una vista en MySQL llamada high_earning_employees que seleccione todas las columnas de los empleados cuyo salario sea mayor a 70000.00.

```sql
CREATE VIEW high_earning_employees AS 
SELECT * FROM employees WHERE salary > 70000.00;
```

¡Buena suerte!
