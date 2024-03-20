interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, modelName };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional name-value pairs
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

console.log(myCar);
