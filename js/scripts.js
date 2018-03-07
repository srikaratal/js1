// scripts.js

function getTriangleArea(a, h) {
if (a <= 0) {
    document.write("Nieprawidłowe dane");
} else if (h <= 0) {
    document.write("Nieprawidłowe dane");
} else { return a*h/2;
}
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);