function rangomax(max) {
  return Math.floor(Math.random() * max)  
}
var array = [];
for (let i = 1; i < 16; i++) {
  array.push(rangomax(3));
}
array;
//
//
function rango(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var array2 = [];
for (let i = 1; i < 16; i ++) {
  array2.push(rango(3, 8));
}
array2;
//
//
var a = 118811;
var b = "118811";
function asimetrico() {
  /*if (a == b) {
    return "Es asimetrico";
  } else {
    return "No es asimetrico";
  }*/
  return a == b ? "Es asimetrico" : "No es asimetrico";
}
asimetrico();
//
//
function ternario(a,b) {
  return a === b ? "Son iguales" 
       : a > b ? "a es mayor" 
       : "b es mayor";
}
ternario(8, 18);
//
//
// Objeto Inmutable:
let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff"
};
Object.freeze(colores);
/*
colores.amarillo = "#fff200";
console.log(colores);

colores.verde = "#345sg5";
console.log(colores);
*/
delete colores.azul;
//
//
const concatenateArrays = function(array1, array2) {
  return array1.concat(array2);
};
concatenateArrays([1, 2, 3], [3, 2, 1]);
//
//
const SUMA = function(num1, num2 = 5) {
  return num1 + num2;
}
SUMA(15);SUMA(15, 3);
//
//
const sumas = (num1, num2) => num1 + num2;
sumas(15,3);
//
//
var suma001 = (a, b) => {
  var c = a + b;
  return d = c * 2;
}
suma001(4, 6);suma001(2, 2);
//
//
// Operador rest:
function miFuncion(...variable) {  
  return variable;
  //return variable.length;
}
miFuncion(1, [2, 3, 4], 5, 6);
//
//
const suma002 = (...array) => {
  return array.reduce((acumulador, b) => acumulador + b, 0);
}
suma002(1000, 900, 90, 6);
//
//
// Operador spread:
const array001 = [1, 2, 3];
function suma003(x, y, z) {
  return x + y + z;
}
suma003(array001[0], array001[1], array001[2]);
suma003(...array001);
//
//
// Sintaxis de Desestructuracion:
const usuario001 = {
  name001: "Ariel",
  age001: 26,
  abc001: "def"
};
//const name001 = usuario001.name001;
//const age001 = usuario001.age001;
const {name001, age001, abc001} = usuario001;
name001;
age001;
abc001;

const usuario002 = {
  arielB: {
    lastName001: "Bravo",
    "age002": 26,
    "mail001": "ariel@hotmail.com",
  }
};
//const edadDelUs = usuario002.arielB.age002;
const {arielB: {lastName001, age002: edadDelUs, mail001: correoDelUs}} = usuario002;
lastName001;
edadDelUs;
correoDelUs;
//
//
var c = 20;
var d = 18;
var e = 2;
[c, d, e] = [1, 2, 3];
c;
d;
e;

var f;
var g;
var h;
[f, g, , , h] = [1, 2, 3, 4, 5, 6];
f;
g;
h;

var k = 18;
var l = 20;
[l, k] = [k, l];
"k = " + k;
"l = " + l;
//
//
var m;
var n;
var array002;
[m, n, ...array002] = [1, 2, 3, 4, 5, 6, 7];
m;
n;
array002;

const array003 = [1, 2, 3, 4, 5, 6, 7, 8];
function removeThreeFirst(anyArray) {
  const [ , , , ...newArray004] = anyArray;
  return newArray004;
}
const arrayFinal = removeThreeFirst(array003);
arrayFinal;
//
//
const newProfile = {
  name: "Ariel B",
  age: 26,
  country: "Argentino",
  location: "Argentina"
};
/*
const updateProfile = (profileInformation) => {
  const {name, age, nationality, location} = profileInformation;
  console.log(name);
  console.log(age);
  console.log(nationality);
  console.log(location);
};
updateProfile(newProfile);
*/
/*
const updateProfile = (profileInformation) => {
  console.log(profileInformation);
};
updateProfile(newProfile);
*/
const updateProfile = ({name, age, country: nationality, location}) => {
  console.log(name);
  console.log(age);
  console.log(nationality);
  console.log(location);
}
updateProfile(newProfile);

const statistics = {
  max: 47.80,
  desviacion: 2.22,
  mediana: 24.44,
  min: -3.40,
  average: 28.20
};
const half = ({max, min}) => (max + min) / 2.0;
half(statistics);
//
//
// String Templates:
function stringTemplates() {
  const a = 20;
  return `The value of a is ${a}, you can use "\`" (the backtick), or '' & "" (S & D quotes).`;
}
stringTemplates();

function stringTemplates2() {
  const array = [1, 2, 3, 4, 5];
  return `El array es ${array} o ${JSON.stringify(array)}`;
}
stringTemplates2();

function stringTemplates3() {
  const anyObject = {
    name: "ariel",
    age: 26
  };
  return `My name is ${anyObject.name} and i am ${anyObject.age} years. And i will be ${anyObject.age + 200} years old or even more XD.`;
}
stringTemplates3();
//
//
/*
const createPerson = (name, age, language) => {
  return {
    name: name,
    age: age,
    language: language
  };
};
createPerson("ariel", 26, "español");
*/
const createPerson = (name, age, language) => ({name, age, language});
createPerson("ariel", 26, "español");
//
//
class Libro {
  constructor(autor) {
    this._autor = autor;
  }
  get autor() {
    //console.log("Getter");
    return this._autor;
  }
  set autor(newAutor) {
    //console.log("Setter");
    this._autor = newAutor;
  }
}
const libro = new Libro("anonimo");
libro.autor; // --> function GETTER
libro.autor = "ariel";
libro.autor; // --> function SETTER
//
//
//
//





















