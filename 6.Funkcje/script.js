zad1
function myfun(){
    console.log("Udało się")
}
myfun();
zad2
let number1 = 333;
function myfun(numer){
    console.log(numer);
}
myfun(number1);
zad3
let tab = [2,3,3,4];
function myfun(tabFun){
    console.log(tabFun);
}
myfun(tab);
zad4
let stopwatch = 0;
let string = "Tak OOooOO";
function myfun(Newstring){
    console.log(Newstring);
    ++stopwatch;
}
const time = setInterval(() => {if(stopwatch == 5){
    console.log("Koniec");
    clearInterval(time);
    return 0;
}
myfun(string);
}, 3000);
