/*
🧾 What is the DOM?
DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects.

When a browser loads an HTML page, it converts the HTML into a DOM tree, where each element is a node (object) that can be accessed and manipulated using JavaScript.
Diagram of DOM search from google

Window Object:The global object that contains the document object and other browser features.

Document:The root object representing the entire HTML document (document object in JS).It has html object
Ex : <h1 id="title" class="main-heading">Welcome!</h1>
1. document.getElementById('title') : <h1 id="title" class="main-heading">Welcome!</h1>
2. document.getElementById('title').id : "title"
3. document.getElementById('title').className : "main-heading"
4. document.getElementById('title').getAttribute('id') : "title"

setAttribute() is a method used to add a new attribute or change the value of an existing attribute on an HTML element.
const heading = document.getElementById("title");

// Change the ID
heading.setAttribute("id", "main-title");

// Add a new class
heading.setAttribute("class", "highlighted");

// Set a custom data attribute
heading.setAttribute("data-user", "Vedant");


const box = document.getElementById("box");

// Change background color
box.style.backgroundColor = "lightblue";

// Change border radius
box.style.borderRadius = "10px";

// Change padding
box.style.padding = "20px";

📌 innerHTML vs innerText vs textContent in JavaScript

1. innerHTML
   - Returns or sets the HTML **content**, including tags.
   - Can be used to insert or extract HTML markup.
   ✅ Use when you want to get/set actual HTML.

2. innerText
   - Returns **visible text only**, as rendered on the screen.
   - Ignores hidden elements and respects CSS styles.
   ✅ Use when you want user-visible content.

3. textContent
   - Returns **all text**, including hidden content.
   - Does NOT parse HTML tags; just gives plain text.
   ✅ Use when you want raw text from DOM, regardless of visibility.

🔍 Example:
<div id="demo"><span style="display:none;">Hi</span>Hello</div>

document.getElementById("demo").innerHTML     // "<span style='display:none;'>Hi</span>Hello"
document.getElementById("demo").innerText     // "Hello"
document.getElementById("demo").textContent   // "HiHello"

📌 document.querySelector in JavaScript

🔹 What it does:
   - Selects the **first** element in the DOM that matches a given CSS selector.

✅ Syntax:
   const element = document.querySelector(selector)

🔸 Parameters:
   - selector: A string that specifies a CSS selector (e.g., "#id", ".class", "div", etc.)

🔸 Returns:
   - The first matching Element, or null if no match is found.

🔍 Examples:

   document.querySelector("#title")       // Selects element with id="title"
   document.querySelector(".btn")         // Selects first element with class="btn"
   document.querySelector("p")            // Selects first <p> tag
   document.querySelector("input[type='text']") // Selects first text input

⚠️ Note:
   - Only returns **one** element (first match).
   - To get **all** matching elements, use `document.querySelectorAll`.


📌 document.querySelectorAll in JavaScript

🔹 What it does:
   - Selects **all** elements in the DOM that match a given CSS selector.
   - Returns a **NodeList**, which is like an array (but not exactly an array).

✅ Syntax:
   const elements = document.querySelectorAll(selector)

🔸 Parameters:
   - selector: A string with any valid CSS selector (e.g., ".btn", "div p", "#title")

🔸 Returns:
   - A static NodeList of all matching elements.

🔍 Examples:

   document.querySelectorAll(".btn")       // All elements with class="btn"
   document.querySelectorAll("p")          // All <p> elements
   document.querySelectorAll("ul li")      // All <li> inside <ul>
   document.querySelectorAll("input[type='text']") // All text inputs

🛠️ How to use:
   elements.forEach(el => {
      console.log(el.textContent);
   });
   or elements[0].style.backgroundColor="red"

⚠️ Note:
   - NodeList is **not** a real array, but you can loop through it using forEach().
   - To get only the first match, use `document.querySelector()` instead.

   📌 document.getElementsByClassName in JavaScript

🔹 What it does:
   - Selects **all elements** that have a specific class name.
   - Returns an **HTMLCollection** (live collection of DOM elements).

✅ Syntax:
   const elements = document.getElementsByClassName("className")

🔸 Parameters:
   - className: The name of the class to search for (without the dot `.`)

🔸 Returns:
   - An HTMLCollection (like an array, but not exactly).
   - Live: Updates automatically if DOM changes.

🔍 Example:

   <div class="item">One</div>
   <div class="item">Two</div>

   const items = document.getElementsByClassName("item");
   console.log(items[0].textContent); // Output: One

🛠️ Looping Example:
   for (let i = 0; i < items.length; i++) {
       console.log(items[i].textContent);
   }

   HTML collection do not have forEach , so we need to first convert it into Array
   const arr=Array.from(items)
⚠️ Note:
   - Don’t include the `.` in the class name.
   - For newer syntax and more flexibility, prefer `document.querySelectorAll(".className")`



*/
