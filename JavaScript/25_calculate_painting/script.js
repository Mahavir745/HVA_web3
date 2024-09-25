//todo: Define callback functions for area calculations:

function areaOfRectangle(length, width) {
  return length * width;
}

function areaOfCircle(radius) {
  return 3.14 * (radius * radius);
}

function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

//todo: Define calculatePaintingCost Function:

function calculatePaintingCost(dimension1, dimension2, calculateArea) {
    const costPerUnit = 160;

    let area = calculateArea(dimension1, dimension2);

    return costPerUnit * area;
}

// todo: Call calculatePaintingCost with different callback functions:

console.log(calculatePaintingCost(5, 10, areaOfRectangle));

console.log(calculatePaintingCost(3, undefined, areaOfCircle));

console.log(calculatePaintingCost(6, 8, areaOfTriangle)); 
