/* Meal Maker
A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/
const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
         if ( typeof mealToCheck === 'string') {
              return this._meal = mealToCheck;
              }
                         },
  set price(priceToCheck) {
     if (typeof priceToCheck === 'number') {
           return this._price = priceToCheck;
     }
  },
  get todaysSpecial() {
   if (this._meal && this._price) {
    return "Today’s Special is Spaghetti for $5!" ;
   }
   else {
   return  'Meal or price was not set correctly!'
   }
  }

} ;

// check to see menu._meal = 57; 
//console.log(menu._meal);
menu.price = 89
menu.meal = 'fries'

console.log(menu.todaysSpecial);


