//Te han pedido un programa que al ingresar un número,
//obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe
//mostrar el factorial para los mismos números. El resultado debe ser mostrado por la consola
//del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener el
//siguiente resultado:

//1 x 3 = 3
//2 x 3 = 6
//3 x 3 = 9
//Factorial de 1 es: 1
//Factorial de 2 es: 2
//Factorial de 3 es: 6

// Requerimientos
// 1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
// el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
// rango, mostrar un mensaje al usuario: "número fuera del rango" (3 Puntos)

// 2. Utilizar las características propias de ES6 como let y arrow function para desarrollar
// el ejercicio (2 Puntos).

// 3. Generar y mostrar por consola el resultado de las operaciones. (3 Puntos)

// Aplicar un ciclo for anidado para obtener el factorial del número ingresado (2 Puntos).

// Crear una función para solicitar el número y validar el rango
const solicitarNumero = () => {
    // Pedir el número al usuario mediante un prompt
    let numero = prompt("Ingrese un número entre 1 y 20");
  
    // Convertir el número a un valor entero
    numero = parseInt(numero);
  
    // Verificar que el número sea válido y esté dentro del rango
    if (isNaN(numero) || numero < 1 || numero > 20) {
      // Mostrar un mensaje de error por la consola
      alert("Número fuera del rango");
    } else {
      // Llamar a la función que calcula las tablas de multiplicar y el factorial
      calcularTablasYFactorial(numero);
    }
  };
  
  // Crear una función que calcula las tablas de multiplicar y el factorial
  const calcularTablasYFactorial = (numero) => {
    // Usar un ciclo for para recorrer los números desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
      // Mostrar la tabla de multiplicar del número i por la consola
      alert(`Tabla del ${i}`);
      // Usar otro ciclo for para recorrer los multiplicadores desde 1 hasta el número ingresado
      for (let j = 1; j <= numero; j++) {
        // Calcular y mostrar el producto de i por j por la consola
        alert(`${i} x ${j} = ${i * j}`);
      }
      // Mostrar el factorial del número i por la consola
      alert(`Factorial de ${i} es: ${factorial(i)}`);
    }
  };
  
  // Crear una función que calcula el factorial de un número usando una arrow function
  const factorial = (n) => {
    // Inicializar el resultado en 1
    let resultado = 1;
    // Usar un ciclo for para recorrer los números desde 1 hasta n
    for (let k = 1; k <= n; k++) {
      // Multiplicar el resultado por el número k
      resultado = resultado * k;
    }
    // Retornar el resultado
    return resultado;
  };
  
  // Llamar a la función principal para ejecutar el programa
  solicitarNumero();