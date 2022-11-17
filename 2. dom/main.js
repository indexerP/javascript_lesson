let cotainerBlock= document.querySelector(".cotainer");
console.log(cotainerBlock);

let title= document.createElement("h1"); //создание и отправка одного блока

cotainerBlock.appendChild(title);

title.textContent = `hello world ${name}`; 

title.classList.add("wriper");

let par= document.createElement("p"); 

par.textContent = 'привет пользователь';

// cotainerBlock.appendChild(par);

cotainerBlock.insertAdjacentElement('afterbegin', par);

// родитель.appendChild(дочерний элемент);


// ================================================================
let list= document.querySelector(".list"); //создание и отправка нескольких блоков

//создали html разметку
let blok_ul= `  
<div>
<h2>Hello JS</h2>
<ul class="listSecond">
  <li class="row">test3</li>
  <li class="row">test3</li>
  <li class="row">test3</li>
  <li class="row">test3</li>
</ul>
</div>
`
list.innerHTML = blok_ul; // встраиваем разметку в выбронный выше html div

