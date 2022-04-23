let readyToBake = 'You are ready to bake some pastries';
let needSupplies = 'Looks like you are missing something';
function hasSupplies(ingredients, appliance) {
  if (ingredients && appliance) {
    console.log(readyToBake);
  }else{
      console.log(needSupplies);
  }
};
hasSupplies('batter','oven');
