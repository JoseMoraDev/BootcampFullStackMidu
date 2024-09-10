    // mostrar información en consola
console.log('Hola Mundo');

    /* con let puedo modificar el contenido de la variable 
        la variable se crea dentro de un scope concreto
        puedo tener dos variables que se llamen iguales, independientes, en dos scopes distintos
    */
let variable = 'JS tiene un tipado débil y dinámico'
    // débil - puedo cambiar el tipo de dato
    // dinámico - detecta el tipo de la variable
console.log(variable)
variable = 1234
console.log(variable)

    // const no me permite reasignar el valor
const pi = 3.141592

    /* VAR
        var hoisting = ''
            tiene scope de función, no de bloque: 
                está disponible dentro de la función donde se declara, sin importar el bloque
            permite hoisting
                puedo usar una variable declarada con var antes de su declaración
            redeclarar en el mismo scope
                puedo redeclararla dentro del mismo scope
                    puede llevar a errores si accidentalmente se redeclara una variable
    */

    /*
    TIPOS PRIMITIVOS
        Son
            2
            'string'
            true/false
            undefined
            null
        Son inmutables
    
    Los objetos no son primitivos y son mutables
        Son
            arrays, objetos, maps, sets, funciones...
    */


const firstName = 'Jose'
    // los strings tienen distintos métodos
firstName.toUpperCase()
    // el string no se puede mutar, por eso no se ve firstName en mayúsculas
console.log(firstName)
    // to uppercase devueleve un nuevo string que puedo almacenar en una nueva variable
const firstNameToUpperCase = firstName.toUpperCase()
console.log(firstNameToUpperCase)


    // ARRAYS
const list = []

list.push(1)
list.push(157)

console.log(list);
console.log(list[0]);
console.log(list[1]);

// método concat, devuelve un nuevo array, no transforma a ni b
const a = [1, 2, 3]
const b = [4, 5, 6]
const ab = a.concat(b)
console.log(ab);


    // OBJETOS
const persona = {
    nombre: 'Jose',
    apellidos: 'MG',
    guitarras: ['Jackson', 'Ibanez']
}

console.log(persona.nombre);
console.log(persona.guitarras);
console.log(persona.guitarras[0]);

const propiedad = 'apellidos'
console.log(persona[propiedad]);
console.log(persona['apellidos']);


    //  FUNCIONES
        // function expression: Asignar una función a una constante
const sumar = (operando1, operando2) => {
    console.log(operando1);
    console.log(operando2);
    return operando1 + operando2
}

console.log(sumar(11, 22));
const resultado = sumar(11, 22)
console.log(resultado);

const op1 = 44
const op2 = 22
console.log(sumar(op1, op2));

        // función declarada: puede ser usada antes de su declaración en el orden del código, aunque lo habitual es crear la función y usarla después
function restar(operando1, operando2) {
    return operando1 - operando2
}


    // COMPARACIONES
console.log(2 == '2'); // true, compara valor
console.log(2 === '2'); // false, compara valor y tipo



