function _addIngredient({name, kilos}) {
    if (isNaN(kilos)) {
      throw new Error(`kilos must be a number. got ${kilos} instead`);
    }
    ingredients.push({
      name,
      kilos,
    });
    console.log(`Added ${name}, ${kilos} kilos, to the ingredients list.`);
  }
  defineModule(
    'cookbook',
    {
      addIngredient: _addIngredient,
    }
  );
  defineModule(
    'debugging',
    {
      itemWeight: 'Item Weight: ',
      totalWeight: 'Total Weight: ',
    }
  );