zad1*********************
function Person (FristName,LastName,Age,Nationality,City,Leangue){
    this.FristName = FristName;
    this.LastName = FristName;
    this.Age = Age;
    this.Nationality = Nationality;
    this.City = City;
    this.Leangue = Leangue;
    this.NewCity = function(NewCity) {
       this.City = NewCity;
    };
    this.NewAge = function(NewAge) {
       this.Age = NewAge;
    }
}
  
let Kowalski = new Person('Andrzej','Kowalski',21,'Germany','Berlin','Deustchland');

Kowalski.NewAge(90);
Kowalski.NewCity('NewYork');

console.log(Kowalski);
zad2

class Calclculator {
    constructor(number) {
        this.number = number;
        this.history = [];
    }
    add(name) {
        const result = this.number.reduce((a, b) => a + b);
        this.memory('Adding', result);
        return result;
    }
    substract(city) {
        const result = this.number.reduce((a, b) => a - b);
        this.memory('Substracting', result);
        return result;
    }
    divide() {
        const result = this.number.reduce((a, b) => a / b);
        this.memory('Dividing', result);
        return result;
    }
    multiply() {
        const result = this.number.reduce((a, b) => a * b);
        this.memory('Multiplying', result);
        return result;
    }
    History() {
        return this.history;
    }
    clearHistory() {
        this.history = [];
    }
    memory(actionName,result) {
        this.history.push({
            action: actionName,
            input: this.number,
            result: result
        }   )
    }
}
const Calclculator1 = new Calclculator([2,16]);
Calclculator1.multiply();
Calclculator1.add();
Calclculator1.divide();
console.log(Calclculator1.History());
Calclculator1.clearHistory();
console.log(Calclculator1.History());

const Calclculator2 = new Calclculator([33, -8, 1]);
Calclculator2.substract();
Calclculator2.multiply();
console.log(Calclculator2.History());

zad3
function RandNum() {
	this.Random = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	
	this.verification = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa od 5 ");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}
const Change = new RandNum();
const Check = new RandNum();
Change.Random();
Check.verification();