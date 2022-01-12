var string = "TECHATCORE";
var count = {};
for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (count[element]) {
        count[element]++;
    }
    else {
        count[element] = 1;
    }
}
console.log(count);
