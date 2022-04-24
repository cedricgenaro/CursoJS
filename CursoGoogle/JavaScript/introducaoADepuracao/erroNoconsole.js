let whichGrocery = 'Item currently in bag: ';
let groceryBag = {
  fruit: [
    'banana',
    'apple',
    'cherry',
   
  ],
  vegetables: [
    'potato',
    'carrot',
    'celery',
   
  ],
  grains: [
    'cereal',
    'pasta',
    'bread',
  
  ],
  
};
function picker(bag) {
  for (let item in bag) {
     let groceries = bag[item]; 
    console.log(whichGrocery + groceries);
  }
};
picker(groceryBag.vegetables);
