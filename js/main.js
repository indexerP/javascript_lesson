console.log(123);

let number= 728;
let numberSecond= 44;
let numberThert= 13;
let sum= (number + numberSecond + numberThert)/3;

console.log(typeof sum);

let name= "Tim";
let age= 1;
let result= `${name} ${age}, is my friend`; //конкатинация
console.log(result);

let first= 14;
let second= "10";
let w= Number(second);
let res= first + w;
console.log(res);

let user= "js";
user= 'php';
console.log(user);

const user1= "js2";
// user1= 'php2';
console.log(user1);

let cotainerBlock= document.querySelector(".cotainer");
console.log(cotainerBlock);

let title= document.createElement("h1"); //создание и отправка одного блока

cotainerBlock.appendChild(title);

title.textContent = `hello world ${name}`; 

title.classList.add("wriper");
// ================================================================
let list= document.querySelector(".list"); //создание и отправка нескольких блоков

//создали html разметку
let blok_ul= `  
<div>
<h1>Hello JS</h1>
<ul class="listSecond">
  <li class="row">test3</li>
  <li class="row">test3</li>
  <li class="row">test3</li>
  <li class="row">test3</li>
</ul>
</div>
`
list.innerHTML = blok_ul; // встраиваем разметку в выбронный выше html div


 

