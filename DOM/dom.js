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

// var header = document.querySelector('#main-header');
// header.style.borderbottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = 'hello world';
// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var  secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#ccc';
// }

// var  second= document.querySelectorAll('li:nth-child(second)');
// secondItem.style.backgroundColor = 'green';

// var  third= document.querySelectorAll('li:nth-child(second)');
// third.style.backgroundColor = '#f4f4f4';

// TRAVERSEING THE DOM //
var itemList = document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//Firstchild
// console.log(itemList.firstChild);
// itemList.firstChild.textContent = 'Hello 4';
//FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//lastChild
//console.log(itemList.lastElementCild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling

//previousSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// //createElement
// //Create a div
// var newDiv = document.createElement('div');
//  //Add id
// var newDivText = document.createTextNode('Hello World');
// //Add text to div
// newDiv.appendChild(newDivText);
// var  container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv, h1);


