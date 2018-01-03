### Javascript Basics
```javascript
//Numbers
4
9.3
-10

//strings
"Hello World"
"43"

//Booleans
true
false

//null and undefined
null
undefined
```

#### String
```javascript
//Single or Double quotes OK
"hello world"
'hello world'

// concatenation
"charlie" + "brown" // "charliebrown"

// Escape Characters start with "\"
"Singin \"Do wah diddy, diddy, dum diddy do\" "

//String have a length properpty
"hello world".length // 11

//Access individual characters using [] and an index
"hello"[0]   //"h"
"hello"[4]   //"o"
```

### Null and Undefined
```javascript
//The two other primitives are null and undefined

//Variables that are declared but not
//initialized are undefined
//The following variables are undefined:
var name;
var age;

//null is "explicitly noting"
var currentPlayer = "charlie";
currentPlayer = null;
```

#### Variables
```javascript
//Variables are simply containers that store values
//The follow this patter:
var yourVariableName = yourValue;

//The can store all the values we've seen
var name = "Rusty"
var secretNumber = 73;
var isAdorable = true;

// Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name

var num = 37;
num + 3 +10

// We can also update esisting variables
var name = "Robert";
name = "Bob";
```



### Control flow
#### Comparison Operators
`==` performs type coercion, while `===` does not.
```javascript
var x = 5;

// == Equal to
// === Equal value and type
x == "5" //true
x === "5" //false

var y = null;
y == undefined //true
y === undefined //false
```


### DOM
#### Selector Methods
The document comes with a bunch of methods for selecting elements.
* `document.getElementById()`
* `document.getElementByClassName()`
* `document.getElementByTagName()`
* `document.querySelector()`
* `document.querySelectorAll()`

#### Manipulation 
We'are going to cover different ways of:
* changing an element's style
* adding/removing classes
* changing the content of a tag
* changing attributes(src, href, etc.)

For example, we use `classList` to add or remove css style class.
``` css
/* Define A class in CSS */
.another-class {
  color: purple;
  fontSize: 76px;
}
```
``` javascript
var tag = document.querySelector("h1");

// Add a class to the selected element
tag.classList.add("another-class");
//Remove a class
tag.classList.remove("another-class");
// Toggle a class
tag.classList.toggle("another-class");
```

#### Add an event listener
`element.addEventListener(type, functionToCall);`
For example,
``` javascript
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

### jQuery
#### Selecting with jQuery
``` javascript
$("selectorGoesHere")
```
Selecting with jQuery is very similar to `querySelectorAll`, in that we provide a CSS style selector and jQuery will return all matching elements.
``` javascript
// to select all img tags
$("img")
// to select all elements with class 'sale'
$(".sale")
// to select element with id "bonus"
$("#bonus")
// to select all a tags inside of li's
$("li a")
```
#### Manipulating Style
The .css() method is jQuery's interface to styling.
```
$(selector).css(property, value)
```

#### Common jQuery Methods
* `val()`
* `text()`
* `attr()`
* `html()`
* `addClass()`
* `removeClass()`
* `toggleClass()`