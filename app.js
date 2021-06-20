console.log("Javascript is alive!");


//1. Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById('greeting').textContent = "Hello, World!";

//2. Set the background color of each `<li>` to `yellow`.

var list_items = document.querySelectorAll("li");
for (var i = list_items.length - 1; i >= 0; i--) {
  list_items[i].style.backgroundColor = "yellow";
}

//3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, 
//and append the to the `#greeting` div.
var greetingPic = document.createElement('img');

greetingPic.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
document.getElementById('greeting').appendChild(greetingPic);

//4. Create and add a ul element to the end of the body with a class of "todo-items"
var todo = document.createElement('ul');
todo.className = 'todo-items';
document.body.appendChild(todo);


//5. Go through the array `['make coffee','eat donut','change diapers','drive to work']` 
//and create an li element for each item e.g. `<li>make coffee</li>`
var coffee = document.createElement('li');
var donuts = document.createElement('li');
var diapers = document.createElement('li');
var work = document.createElement('li');


//6. Add each newly created li element to your ul of class "todo-items"

todo.appendChild(coffee);
coffee.appendChild(document.createTextNode('make coffee'));

todo.appendChild(donuts);
donuts.appendChild(document.createTextNode('eat donut'));

todo.appendChild(diapers);
diapers.appendChild(document.createTextNode('change diapers'));

todo.appendChild(work);
work.appendChild(document.createTextNode('drive to work'));


//Afterwards: 

//4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
oneList = document.getElementsByTagName("li");
function selectedFunction() {
  oneList = document.getElementsByTagName("li");
  oneList.className = 'selected';
}
selectedFunction(oneList);
//5. Change the image to be the most recently clicked food item.

//6. When the gray div is moused over, it's removed from the DOM.
var ghost = document.getElementById("ghosting");

  function removeDiv() {
    document.getElementById("ghosting").style.visibility = "hidden";
  }
  ghost.addEventListener("mouseover", removeDiv);

//7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
var resize = document.getElementById("resize");

  function resizeDiv() {
    document.getElementById("resize").style.width = "400px";
  }
  resize.addEventListener("mouseover", resizeDiv);

  function resizeDiv2() {
    document.getElementById("resize").style.width = "200px";
  }
  resize.addEventListener("mouseout", resizeDiv2)
//8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.

///9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"

//BONUS: If someone types the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
