import {addIngredient} from './funcoes.js';


let ingredients = [
    {
      name: 'potatoes',
      kilos: 4,
    },
    {
      name: 'carrots',
      kilos: 2,
    },
    {
      name: 'onions',
      kilos: 1,
    },
    {
      name: 'chickens',
      kilos: 'two',
    },
  ];
  
let leeks = {
  name: 'leeks',
  kilos : 1.5
};

function printTotalWeight() {
  let total = 0;
  for (let i of ingredients){
    total += i.kilos;
  }
  console.log('Total ingredient weight: ' + total + 'kilos');
};

function printIngredient(ingredient) {
  print(ingredient.kilos + ' kilos ' + ingredient.name);
};
function prepareRecipeCards() {
  try {
    addIngredient(leeks, ingredients);
    printTotalWeight();
    ingredients.forEach(printIngredient());
  }catch(e) {
    console.log(e);
  }
};


prepareRecipeCards();
