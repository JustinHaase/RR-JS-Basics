// Basic math formulaas
function addition(num1, num2){
  let result = num1 + num2;
  return result
}

function subtraction(num1, num2){
  let result = num1 - num2;
  return result;
}

function multiplication(num1, num2){
  let result = num1 * num2;
  return result;
}

function division(num1, num2){
  let result = num1 / num2;
  return result;
}

// Area formulas
function areaSquare(side){
  let result = Math.pow(side,2);
  return result;
}

function areaRectangle(length, width){
  let result = length * width;
  return result;
}

function areaParallelogram(base, height){
  let result = base * height;
  return result;
}

function areaTriangle(base, height){
  let result = base * height / 2
  return result;
}

function Circle(radius){
  let result = Math.pow(3.14, radius, 2)
  return result;
}

function Sphere(radius){
  let result = Math.pow(4 , 3.14, radius, 2);
  return result;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let result = Math.pow(side,6);
  return result;
}

function surfaceAreaCylinder(radius, height){
  let result = 2 * radius * height + Math.pow(2, 3.14, radius, 2);
  return result;
}



// Perimeter formulas
function perimeterSquare(side){
  let result = side * 4;
  return result;
}

function perimeterRectangle(length, height){
  let result = length + height * 2;
  return result;
}

function perimeterTriangle(side1, side2, side3){
  let result = side1 + side2 + side3;
  return result;
}

function perimeterCircle(diameter){
  let result = 2 * diameter * 3.14;
  return result;
}

/*
// Volume formulas
function volumeCube(side){
  let result =
  return result;
}

function volumeRectangular(length, width, height){
  let result =
  return result;
}

function volumeCylinder(radius, height){
  let result =
  return result;
}
*/