zestaw 10
const lists = document.getElementsByClassName('list');

zad2
function getElByTag(tag) {
  return document.getElementsByTagName(tag);
}

const lis = getElByTag('li');
console.log(lis);

zad3
const list = document.getElementById('list');
console.log(list);

zad4
function elPrint(params) {
  params.forEach((param) => console.log(document.querySelectorAll(param)));
}

elPrint(['li', 'ul', 'span', 'div.list span', 'div#spans span']);