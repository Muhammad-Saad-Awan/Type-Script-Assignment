function makeSandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach(ingredient => {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
