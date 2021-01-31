zad1
let number = 0;
function myFunc() {
     if(number == 15){
         console.log("Koniec");
        return 0;
    }
    console.log("Cześć po raz"+number);
    setTimeout(myFunc, 3000); 
    ++number;
   
}
myFunc();
zad 2
let tab =[0,4,5,7,8];
let i =0;

setTimeout(console.log,2000,tab);

        const time = setInterval(() => {
    console.log(tab[0]);
    ++i;
}, 5000);

clearTimeout(time);

        const time2 = setInterval(() => {    if(i == 5){return 0}
    console.log(tab[i]);
    ++i;
}, 3000);
