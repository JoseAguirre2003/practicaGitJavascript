const Calculadora = require('./clases/calculadora');
let colors = require('colors');

let calcu = new Calculadora();

console.log("Bienvenidos a los juegos".brightRed);

console.log('La suma de 7+8 es ' + calcu.suma(7,8));
console.log('La resta de 15-20 es ' + calcu.resta(15,20));

let multi = calcu.multiplicacion(-5,-100);

console.log('La suma de -5 x -100 es ' + multi);
console.log('la division es ' + calcu.division(multi, 50));

// imprime las salidas correspondientes 
// usando las funciones ya codificadas en las otras ramas
    //suma 7+8
       
    //resta 15-20

    //multiplica -5 * -100

    //divide el resultado de la multiplicacion entre 50
// 