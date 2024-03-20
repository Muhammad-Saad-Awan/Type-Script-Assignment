function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modelName: modelName };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
console.log(myCar);
