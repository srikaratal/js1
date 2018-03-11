// scripts.js
function drawTree(h) {
    for ( i=0; i<=h; i++) {
        var star = "";
        for(var j = 0; j < i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
console.log(drawTree(7));
//w konsoli pod choinką pojawia się "undefined"