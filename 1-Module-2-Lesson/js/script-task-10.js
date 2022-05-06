const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  
  order(pizzaName, onSuccess, onError) {
    // for(let i = 0; i < this.pizzas.length; i++){
    //   if(this.pizzas[i] === pizzaName){
    //     console.log("onSuccess", this.pizzas[i]);
    //      return onSuccess(pizzaName);
    //   }
    // }
    numbers.forEach(function (number, index) {
      console.log(`Индекс ${index}, значение ${number}`);
    });

    pizzas.forEach((el, el.pizza === pizzaName) {
      return onSuccess(pizzaName);
    };
    console.log("error", pizzaName);
    return onError(pizzaName);
    )},
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;//`Error! There is no pizza with a name ${pizzaName} in the assortment.`
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
//console.log(pizzaPalace.order());
// console