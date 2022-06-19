var menu =  ['steak','chicken','pizza','waffles','beef','cheese','bacon','corned beef','avocado','pasta','pineapple','peanut butter','hamburgers','sushi','pancakes','noodles','chocolate','blueberries','salmon','banana','ice cream','ham','oysters','mashed potatoes','soup','asparagus','sweet potato','donuts','turkey','candy','grapes','popcorn','cashew nuts','eggs','watermelon','tuna','cheese','shrimp','strawberries','artichokes','asparagus','fish','almonds','mango','meatballs','apples','lamb','sweetcorn','mushrooms','pudding','cake','salad','crab'];

function askServer(favorite){
    let found = false;
    for(var element of menu){
        if(favorite === element){
            found = true;
            console.log("Temos " + favorite);

        }
    }
    if(found === false){
        console.log("Desculpe não temos " + favorite);
    }
}

askServer('cake');

