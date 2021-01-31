zad1
var Number1 = 13
var Number2 = 11
if (Number1 > Number2){
    console.log(Number1);
}
else{
    console.log(Number2);
}
zad2
var Number1 = 44
var Number2 = 11
var Number3 = 33
if(Number1>Number2 && Number1>Number3){
 console.log(Number1);
}

else if(Number2>Number1 && Number2>Number3){
 console.log(Number2);
}

else{
 console.log(Number1);
}
zad 3
for(var i=0;i<10;++i){
    console.log("Lubię JavaScript");
}
zad4
var result = 0
for(result;result<=10;++result){
  console.log(result);
}
zad5
var n = 0
for(n=0;n<5;++n){
if(n % 2 = 0){      
    console.log(n+"Parzysta");
}
else{
    console.log(n+"Nie parzysta");
}
}
zad6
for(var i=0;i<=10;++i){
for(var z=0;z<=10;++z){
console.log("Pętla1 "+i+" Pętla2 "+z);
console.log("Pętla1 "+i+" Pętla2 "+z);
}
}
zad7

for(i=0;i<=100;++i){
  if(i%3==0&&i%5==0){
    console.log("FizzBuzz");
  }
  else if(i%5==0){
    console.log("Buzz");
  }
   else if(i%3==0){
    console.log("Fizz");
  }
    else{
    console.log(i);
  }
}

zad8
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}

// b)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}

// d)
let stars = '*';
let spacer = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? stars : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += spacer;
        }
        result += stars;
    }
  
    console.log(result);
}