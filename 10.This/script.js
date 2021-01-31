zad1
class Person {
  constructor( imie, nazwisko, wiek, kraj, miasto ) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }
  Info() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
  addYearToAge() {
    ++this.wiek;
  }
}
const person1 = new Person('Dominik', 'Cibor', 21, 'Polska', 'Czaniec');
const person2 = new Person('Olaf', 'Nowak', 30, 'Austria', 'Wiedeń');
person1.Info();
person1.addYearToAge();
person1.Info();
console.log(" ");
person2.Info();
person2.addYearToAge();
person2.Info();
zad2
class Person {
  constructor( imie, nazwisko, wiek, kraj, miasto ) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }
  Info() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
  addYearToAge() {
    ++this.wiek;
  }
}
const person1 = new Person('Dominik', 'Cibor', 21, 'Polska', 'Czaniec');
const person2 = new Person('Olaf', 'Nowak', 30, 'Austria', 'Wiedeń');

person1.favDishes = ['Burito', 'Kebab', 'Curry', 'Rasberry'];
person2.favDishes = ['BiałkoSerwatkowe', 'Mąka', 'Jajko','Mąka'];

function Dishes() {
  console.log(this.favDishes);
}

function Dish(dish) {
  this.favDishes.push(dish)
}

person1.Dishes = Dishes;
person2.Dishes = Dishes;
person1.Dish = Dish;
person2.Dish = Dish;

person1.Dishes();
person2.Dish('Naleśnik');
person2.Dishes();
zad3
class Calclculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  Numbers(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  substract(invOrder) {
    return invOrder === true
      ? this.b - this.a
      : this.a - this.b;
  }

  divide(invOrder) {
    if (!invOrder && this.b === 0) {
      console.error('You cannot divide by 0');
      return;
    } else if (invOrder && this.a === 0) {
      console.error('You divide 0');
      return;
    }

    return invOrder === true
      ? this.b / this.a
      : this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

const abCalc = new Calclculator();
abCalc.Numbers(3, 5);
console.log(`add: ${abCalc.add()}`);
console.log(`multiply: ${abCalc.multiply()}`);
console.log(`substract: ${abCalc.substract()}`);
console.log(`divide: ${abCalc.divide()}`);

const zeroCalc = new Calclculator();
abCalc.Numbers(4, 0);
abCalc.divide();
zad4
class Ladder {
  constructor(steps) {
    this.steps = steps;
    this.Step = 0;
  }
  Up() {
    this.Step = this.Step <= 0 ? 1 : ++this.Step;
    if(this.Step > this.steps) {
      this.getOff();
    } else {
      console.log(`Idziesz stopień do góry jesteś na stopniu nr ${this.Step}`);
    }
  }
  Down(){
    this.Step = this.Step >= this.steps ? this.steps : --this.Step;
    if(this.Step <= 0) {
      this.getOff();
    }  else {
      console.log(`Idziesz stopień w dół jesteś na stopniu nr ${this.Step}`);
    }
  }
  getOff() {
    console.log('Zszedłeś z drabiny, nie możesz iść dalej');
  }
}

const stairs = new Ladder(12);
stairs.Up();
stairs.Up();
stairs.Down();
stairs.Down();
stairs.Down();
stairs.Up();