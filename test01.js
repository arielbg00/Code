function numeromasgrande() {
  console.log(arguments[3]) // --> 8
  var numeromasgrande = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > numeromasgrande) numeromasgrande = arguments[i];
  }
  return numeromasgrande;
}
numeromasgrande(4,3,12,8); // --> 12
//
//
function mult() {
  console.log('argumento', arguments[0]) // --> 3
  var multiplicacion = 1;
  for (var i=0; i < arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i];
  }
  return multiplicacion;
}
mult(3,4,6); // --> 72
//
//
function empiezaconnueve(n) {
  var numtostring = n.toString();
  if (numtostring[0] === '9') return true;
  return false;
}
empiezaconnueve(111); // --> false
empiezaconnueve(9111); // --> true
//
//
function todosiguales() {
  for (var i = 0; i < arguments.length - 1; i++) {
    if (arguments[i] !== arguments[i + 1]) return false;
  }
  return true;
}
todosiguales(4,3,2,1); // --> false
todosiguales(4,4,4,4); // --> true
//
//
var str = "The Henry Challenge is close!";
var string = []
  for (var i = 0; i < str.length; i++) {
    string.unshift(str[i])
  }
str.split("").reverse().join("").split(" ").reverse().join(" ")
//
//
var num = 113411;
function cap(num) {
var capicua = num.toString().split("").reverse().join("");
if (num === Number(capicua)) {
  return "Es capicua";
} else {
  return "No es capicua";
}
}
cap(11311);
cap(11112);
//
//
var array = [1,2,3,4,5]
array
function pedazos(array, cantidad) {
  var newArray = [];
  for (var i = 0; i < array.length; i = i + cantidad) {
    newArray.push(array.slice(i, i + cantidad));
  }
  return newArray;
}
pedazos([1,2,3,4,5], 2)
//
//
var numeros = [5,6,4,65,8,4]
function abc (element) {
    var i = 0;
    for (i = 0; i < numeros.length; i++) {
      if (numeros[i] === element) {
        break;        
      }
    }
    if (i < numeros.length) {
      return i;
    } 
    return -1;
  }
abc(4);abc(8);abc(3)
//
// Hola
//
// Hola














