// Variables y tipos de datos

let mivariable = 13;   // utilizamos let para definir una variable
let mivariable2 = "Hola";
let mivariable3 = "Mundo";
let mivariable4 = false;
let mivariable5 = true;
let mivariable6 = 3.12;
/*
console.log(typeof(mivariable)); // console.log se utiliza para crear un mensaje en la consola
console.log(typeof(mivariable2)); // typeof sirve para saber el tipo de dato de una variable
console.log(typeof(mivariable3));
console.log(typeof(mivariable4));
console.log(typeof(mivariable5));
console.log(typeof(mivariable6));
*/
//operaciones matematicas 

let suma = 2+1;
let resta = 3-1;
let multiplicacion = 3*4;
let division = 12/0;
let potencia = 3 ** 3;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(potencia);

// concatenar
/*
let texto = "Hola "+"Mundo"+" "+"con js";
console.log(texto);
let palabra = "HOLA";
let palabra2= "MUNDO";
let frase = palabra+" "+palabra2;
console.log(frase);
*/
// condicionales
// IF // ELSE // ELSE IF
/*
let suma2 = 1+1;
if (suma2 >= 4){
    console.log("suma2 es mayor que 4")
}else if(suma2 > 4 && suma2 < 6){
    console.log("suma2 es mayor que 4 y menor que 6")
}else{
    console.log("suma2 es menor que 4")
}
*/
// SWITCH 
/*
let suma3 = 4;

switch(suma3){
    case 0:
        console.log("El resultado es 0");
        break;
    case 7: 
        console.log("El resultado es 7");
        break;
    default:
        console.log("El resultado es distinto de 0 o 7");
        break;
}
*/

// FUNCIONES

function saludo(nombre){
    return "Hola "+ nombre + " como estuvo tu dia? "+ "Me alegro "+nombre;

}

console.log(saludo("juan"));

function saludo2(nombre){
    return `Hola ${nombre}, como estuvo tu dia? Me alegro ${nombre}`;
    
}
console.log(saludo2("Tomas"));

//alert(saludo("juan"));

//  POO CON JS
/*
class Inventario{
    constructor(nombre){
        this.nombre = nombre;
        this.articulos=[];
    }
    getNombre(){
        return this.nombre;
    }
    agregar(articulo,cantidad){
        this.articulos[articulo]=cantidad;
    }  

    cantidad(articulo){
        return this.articulos[articulo];
    }
    getArticulo(){
        
        return this.articulos
    }

}
let libro = new Inventario('libros');
libro.getNombre();
libro.agregar('Martin fierro',10);
libro.agregar('it',5);
//libro.cantidad('Martin fierro');

console.log(libro.getArticulo());
*/

// BUCLES
// WHILE
/*
function bucleWhile(num){
    let i = 1;
    while(i <= num){
        console.log(i);
        i++;
    }
}
bucleWhile(5);

*/
// DO WHILE
/*
function doWhile(num){
    let i = 0;
    do {
        console.log(i);
        i++;
    
    }
    while(i <= num)
        
    
}
doWhile(5);
*/

// BUCLE FOR
/*
function mifor(num){
for(let i = 0; i < num; i++){
    console.log("i = "+i);
}
}
mifor(10);
*/

// ARREGLOS O ARRAYS
/*
const objeto = {
    arreglo: new Array(100000)
}

function sinOptimizar(){
    console.time("mal");
    for(let i = 0;i<objeto.arreglo.length;i++){
        objeto.arreglo[i]='hola';

    }
    console.timeEnd("mal");
}

function optima(){
    console.time("bien");
    let arreglo =objeto.arreglo;
    longitud=arreglo.length
    for(let i=0 ; i<longitud; i++){
        arreglo[i] = 'hola';
    }
    console.timeEnd("bien");
}

sinOptimizar();
optima();

*/
// recorrer arreglo con FOREACH
/*
const arreglo = [1,2,3,4,5];
arreglo.forEach((item,indice)=>{
    console.log(`El valor del indice ${indice} es: ${item}`);
});

// LO MISMO QUE ARRIBA PERO CON FUNCION FLECHA

arreglo.forEach(function(item,indice){
    console.log(`El valor del indice ${indice} es: ${item}`);
});

*/
// recorrer un objeto como un arreglo o array
const libro = {
    titulo: "Martin Fierro",
    autor: "Jose Hernandez",
    paginas: 336,
    editorial: "Anaya",
    precio: 2000
}

const propiedad = Object.getOwnPropertyNames(libro);
propiedad.forEach(name =>{
    let valor = Object.getOwnPropertyDescriptor(libro,name).value;
    console.log(`La propiedad ${name} contiene: ${valor}`)
})

// lo mismo pero con la funcion forIn
//   llave p key    in objeto 
for(let propiedad1 in libro){
    console.log(`La propiedad ${propiedad1} contiene: ${libro[propiedad1]} `)
}














