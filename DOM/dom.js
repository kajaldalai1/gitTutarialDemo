//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);
//GETELEMENTBYID//
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle);
// headerTitle.textContent
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].computedStyleMap.fontWeight = 'bold';
// items[1].backgroundColor = 'yellow';

// //Gives error
// //items[i].style.backgroundcolor = '#f4f4f4';
// for(var i=0;i<items.length;i++){
//     items[i].backgroundcolor = '#f4f4f4';
// }

// // GETELEMENTBYTAGNAME //

// var items = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// items[1].textContent = 'Hello 2';
// items[1].computedStyleMap.fontWeight = 'bold';
// items[1].backgroundColor = 'yellow';

// //Gives error
// //items[i].style.backgroundcolor = '#f4f4f4';
// for(var i=0;i<items.length;i++){
//     li[i].backgroundcolor = '#f4f4f4';
// }

//QUERYSELECTOR//

var header = document.querySelector('#main-header');
header.style.borderbottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'hello world';
var submit = document.querySelector('input[type="submit"]')
submit.value = "SEND"
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var  secondItem= document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';