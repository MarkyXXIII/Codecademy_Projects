const menu = {
  _courses: {
  appetizers: [],
  mains: [],
  desserts: []
},
  addDishToCourse: function (courseName,dishName,dishPrice) {
    let dish = {name: dishName, price: dishPrice}
    this['_courses'][courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName){
    let dishes = this['_courses'][courseName]
    let randomSelector = Math.floor(Math.random()*dishes.length)
    return dishes[randomSelector]
  
  },
  generateRandomMeal: function() {
    let appetizer = this.getRandomDishFromCourse('appetizers')
    let main = this.getRandomDishFromCourse('mains')
    let dessert = this.getRandomDishFromCourse('desserts')
    let bill = appetizer.price + main.price + dessert.price
    return `Your meal will begin with the ${appetizer.name}, to be followed by the ${main.name}, and finished with the ${dessert.name}.  The total bill will be £${bill}`
  }
}

menu.addDishToCourse('appetizers','Scallops', 12)
menu.addDishToCourse('appetizers','Mushroom Risotto', 8)
menu.addDishToCourse('appetizers','Arancini', 9)
menu.addDishToCourse('mains','Spaghetti Carbonara', 14)
menu.addDishToCourse('mains','Meatballs', 18)
menu.addDishToCourse('mains','Lasagne', 35)
menu.addDishToCourse('desserts','Tiramisu', 9)
menu.addDishToCourse('desserts','Canolli', 8)
menu.addDishToCourse('desserts','Affogato', 7)
console.log(menu._courses)

const meal = menu.generateRandomMeal();

console.log(meal)