zad1
const Komputer = {
    KartaGraficzna: "Radeon vega 11",
    Procesor: "Ryzen 5 2500u",
    PamiecRam: "6gb",
}

console.log(Komputer);	
zad2
let string = "8gb";
const Komputer = {
    KartaGraficzna: "Radeon vega 11",
    Procesor: "Ryzen 5 2500u",
    PamiecRam: "6gb",
    update(date) {
        Komputer.PamiecRam = string;
    }
}
Komputer.update(string);
console.log(Komputer);
zad3
let tab = [3,4,5,7,8]

const NewObj ={
    sum : 0,
    
    NewMethod(tab){
        let buffor = 0;
        for(let i = 0;i<tab.length ;++i){
            buffor += tab[i]
        }
    
     NewObj.sum = buffor;
    }
}
NewObj.NewMethod(tab);

console.log(NewObj.sum);
zad4
const car = {
    name :"subaru" ,age: 20, weight: "1t",price: "1500zł"
}

console.log(car);
zad5
const car = {
    name :"subaru" ,age: 20, weight: "1t",price: "1500zł"
}

function CrateCar(name,age,weight,price) {
    return{
        name,
        age,
        weight,
        price,
    }
}

let car2 = CrateCar('Audi',12,'1.5t','20000zł');

console.log(car2);
zad 6
const car = {
    name :"subaru" ,age: 20, weight: "1t",price: "1500zł"
}

function Hi(){
    return console.log("Hello");
}
car.Engine = "V8";
car.Fun = Hi;
console.log(car);
console.log(car.Fun());