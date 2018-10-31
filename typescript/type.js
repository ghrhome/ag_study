var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
var a3 = ["test", 5, null];
var a4 = ["test", null, 5];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bule"] = 2] = "Bule";
})(Color || (Color = {}));
var c = Color.Bule;
console.log(c)
console.log(Color[0])
