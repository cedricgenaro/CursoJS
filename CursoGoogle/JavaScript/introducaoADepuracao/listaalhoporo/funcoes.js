export function addIngredient({name, kilos}, ingred) {
  
    if (isNaN(kilos)) {
      throw new Error(`kilos must be a number. got ${kilos} instead`);
    }
    ingred.push({
      name,
      kilos,
    });
    console.log(`Added ${name}, ${kilos} kilos, to the ingredients list.`);
  }
 