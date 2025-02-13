// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //return nombre.charAt(0).toUpperCase() +nombre.slice(1)
  var letra1 = nombre [0].toUpperCase()
  //nombre = nombre.slice(1)
  return letra1 + nombre.slice(1)
}
// "sring".toUpperCase()>>>>> STRING
function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2)
  return cb;
}
function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //var suma = 0;
  //for (let i = 0; i < numeros.length; i++){
  //  suma = suma + numeros[i]
  //}
//
  //cb(suma);
  //cb(numeros.reduce((a,b)=> a+b))
 var suma = numeros.reduce(function(a,b){
   return a + b;
 })
 cb(suma);
 // el .reduce se puede usar en metodos de operacion (suma,multi,rest,division)
 // var suma = numeros.filter(function(numero1,numero2){return numero1 + numero2})
 //cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //.forEach funciona como un for
  array.forEach(function(valores){
    cb(valores)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //iterar pero no modificar al array prinicipal, creando uno nuevo
  const nuevoArray = array.map(function(valores){
    return cb(valores)
  })
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(function(elementosConA){
    return elementosConA [0] === "a"
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
