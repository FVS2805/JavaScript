document.write("<h1> Hola <h1>");

/*Comentarios : Trabajar con la Consola*/

console.log("Datos de JavaScript");

//tipos de datos
let saludo="Hola Mundo"


console.log(saludo)

//array
let Nombres=['ana','Jose','Carlos']

console.log(Nombres)

let datos={Nombre:'Juan',edad:13,notas:[5.3,6,4.5]}

console.log(datos)

let num1=100
let num2=38

let resul=num1+num2

console.log("La suma es de", resul);
let Nombre='Carlos';
let Apellido='León';

let NombreCompleto=Nombre +" "+ Apellido

document.write("</br>"+" Nombre " + NombreCompleto);

//operadores relacionales
/*
!=Distinto
== Comparacion
=== Comparacion mas tipo
*/

let one=1
let one_again=1
let one_string="1"

console.log(one==one_again)
console.log(one==one_string)
console.log(one===one_string)

//estructuras de control

// IF

//Muestre si son iguales o distintos

let uno=1
let dos='1'

if(uno == dos){
    console.log('Son Iguales Iguales')
}
if(uno==dos){
    console.log('Son Iguales')
}else{
    console.log('Son distintos')
}

//switch

let tipoAlumno="Diurno"

switch(tipoAlumno){
    case 'Diurno':
        console.log('Es alumno Diurno')
        break;
    case 'Vespertino':
        console.log('Es alimno de noche')
        break;
    default:
        console.log('No es alumno');
}

//Ciclos

//Muestre los 10 primeros numeros positivos
//while

let i = 0;

while (i <= 9) {
    console.log(i);
    i++;
}


//For

let non=['ana','jose','Carlos']

console.log(nom[0])
console.log(nom.length)

for(let i=0;i<non,length;i++){
    console.log(nom(i))
}

for(let x in nom){
    console.log(nom(x))
}