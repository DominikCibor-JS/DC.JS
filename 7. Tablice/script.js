zad1
let tab = [3,3,2];
console.log(tab);
zad2
let tab = [3,3,2,"ww","qw",33,[3]];

console.log(tab[1],tab[6]); 
console.log(tab[6]);
console.log(tab);
for(let i=1;i<7;i+=2){
        console.log(tab[i]);
}
for(let i=0;i<7;++i){
if(isNaN(tab[i])){
    console.log(tab[i]);
}
}
for(let i=0;i<7;++i){
if(typeof tab[i] == "number" ){
    console.log(tab[i]);
}
}
zad3
let tab = [3,4,2,33,99];
 let buffor = 0;
for(let i=0;i<5;++i){
    buffor += tab[i];
}
console.log(buffor);

for(let i=0;i<5;++i){
    buffor -= tab[i];
}
console.log(buffor);

let i=0;
for(i;i<5;++i){
    buffor += tab[i];
}
buffor = buffor /i ;
console.log(buffor);

let i=0;
for(i;i<5;++i){
    if(tab[i]%2==0){
        console.log(tab[i]);
    }
}
let i=0;
for(i;i<5;++i){
    if(tab[i]%2==0){
    console.log(tab[i]);
    }
}
let i=0;
for(i;i<5;++i){
    if(tab[i]%2!=0){
    console.log(tab[i]);
    }
}

for (let i=0; i < tab.length; ++i) {
    if (buffor <= tab[i]) {
        buffor = tab[i];
    }
}
console.log(buffor);

for (let i=0; i < tab.length; ++i) {
    if (tab[i] > tab[i+1]){
        buffor = tab[i+i];
    }
}
console.log(buffor);

for (let i=4; i >= 0 ; --i) {
    console.log(tab[i]);
    }
zad 4

let tab = [4,8,7,44,22];

function update(tabAdd){
    let buffor = 0;
    for(let i=0;i<tabAdd.length;++i){
        buffor += tab[i];
    }
   return buffor;
}
 update(tab);
zad5

let tab = [4,8,7,44,22];

function update(tabAdd){
    let buffor = 0;
    for(let i=0;i<tabAdd.length;++i){
        buffor += tab[i];
    }
let average = buffor / tabAdd.length;
 for(let i=0;i<tabAdd.length;++i){
        console.log(tab[i]*average);
    }
}
 update(tab);
zad 6

let tab = [4,8,7,44,22];

function update(tabAdd){
    let buffor = 0;
    let abacus = 0;
    for(let i=0;i<tabAdd.length;++i){
        if(tab[i]%2===0){
        buffor += tab[i];
        ++abacus;
        }
    }
let average = buffor * abacus;
return average;
}
 update(tab);

zad7

let tab = [4,8,7,44,22];

function update(tabAdd){
    let buffor = 0;
    for(let i=0;i<tabAdd.length;++i){
        if(tab[i]<tab[i+1]){
        buffor = tab[i];
        tab[i] = tab[i+1];
        tab[i+1]=buffor;
        }
    }
}

for(let i = 0;i < 5 ;++i){
update(tab);
}
console.log(tab);
    
zad8
let tab1 =[3,8,9,22];
let tab2 =[-2,-5,2,33];

function myfun(Tab1,Tab2){
if(Tab1.length > Tab2.length){
    buffor = Tab1.length;
}
else{
    buffor = Tab2.length;
}
let tab3 = new Array(buffor);
for(let i=0;i<buffor ;++i){

    tab3[i] = Tab1[i]+Tab2[i];
}
return tab3
}
let NewTab = myfun(tab1,tab2);
console.log(NewTab);

zad9
let tab1 =[3,-8,9,-22];
function myfun(tab){
    let NewTab = new Array(tab.lenght);
    for(let i=0;i <tab.length;++i){
        NewTab[i] = tab[i] *(-1);
    }

    return NewTab
}
let NewTab = myfun(tab1);
console.log(NewTab);