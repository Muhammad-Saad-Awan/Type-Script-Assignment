function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach(function (ingredient) {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
