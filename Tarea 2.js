//10 variables con let
let nombre = "Grisel";
let edad = 22;
let altura = 1.66;
let peso = 55;
let pais = "Colombia";
let ciudad = "Medellin";
let profesion = "Programador";
let salario = 200000;
let hijos = 2;
let estadoCivil = "Casado";

//5 variables con const
const PI = 3.1416;
const GRAVEDAD = 9.81;
const LUZ_VELOCIDAD = 299792458; // m/s
const NOMBRE_EMPRESA = "FibrasyFiguras";
const FECHA_CREACION = 2018;

// Operaciones con las variables
let imc = peso / (altura * altura); // Índice de Masa Corporal
let esMayorDeEdad = edad >= 18; // Verificar si es mayor de edad
let salarioAnual = salario * 12; // Calcular salario anual
let diasTrabajados = 250; // Días trabajados en el año
let salarioPorDia = salarioAnual / diasTrabajados; // Calcular salario por día

// Operador ternario
let mensajeEdad = esMayorDeEdad ? "Es mayor de edad" : "Es menor de edad";
let mensajeHijos = hijos > 0 ? "Tiene hijos" : "No tiene hijos";
let mensajeSalario = salario > 30000 ? "Buen salario" : "Salario bajo";

// Resultados
console.log(`Nombre: ${nombre}`);
console.log(`IMC: ${imc.toFixed(2)}`); 
console.log(mensajeEdad);
console.log(mensajeHijos);
console.log(`Salario anual: $${salarioAnual}`);
console.log(mensajeSalario);
