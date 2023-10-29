/*9.Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario. */
var nombre = prompt("Ingrese el nombre del usuario")
var apellido = prompt("Ingrese el apellido del  usuario")
var nombre_completo = nombre + " " + apellido
alert("Bienvenido " + nombre_completo);

/*10.Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416. */
var diametro = parseFloat(prompt("Ingrese el diámetro del círculo"));
alert("El área del círculo es: " + (3.1416 / 2 * Math.pow(diametro, 2)));
alert("El perímetro del círculo es: " + (3.1416 * diametro));

/*11.Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio. */
var num1 = parseFloat(prompt("Ingrese el valor de 1er número"));
var num2 = parseFloat(prompt("Ingrese el valor de 2do número"));
var num3 = parseFloat(prompt("Ingrese el valor de 3er número"));
var num4 = parseFloat(prompt("Ingrese el valor de 4er número"));
alert("El promedio de los cuatro números es: " + (num1 + num2 + num3 + num4) / 4);
alert("La suma de los cuatro números es: " + (num1 + num2 + num3 + num4) );

/*12.Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un programa para calcular e informar el sueldo mensual del empleado. */
var valor_hora = parseFloat(prompt("Ingrese el valor de la hora"));
var horas_trabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
alert("El sueldo del empleado es de: " + (valor_hora * horas_trabajadas) + " pesos");

/*13.Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.  */
var anios_antiguedad = parseFloat(prompt("Ingrese los años de antiguedad del empleado"));
var sueldo = (valor_hora * horas_trabajadas) * (1 + anios_antiguedad * 0.15);
alert("El sueldo del empleado considerando los años de antiguedad es de: " + sueldo +" pesos");

/*14.Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.  */
var n_seguros_vendidos = parseFloat(prompt("Ingrese la cantidad de seguros vendidos"));
var seguro_caro = parseFloat(prompt("Ingrese el valor del seguro más caro vendido"));
var bono_mas_caro = seguro_caro * 0.5;
var bono_nro_bonos = n_seguros_vendidos * 0.25 * sueldo;
var sueldo_completo = sueldo + bono_mas_caro + bono_nro_bonos
alert("el sueldo completo del empleado considerando los años de antiguedad y el valor y cantidad de los seguros vendidos es de: "+sueldo_completo +" pesos y el valor promedio de a hora trabajada es de :" +sueldo_completo/horas_trabajadas+" pesos/hora")