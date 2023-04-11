// Q1:Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

        function createAdder(num) {
            return function(value) {
            return num + value;
            }}
        let result = createAdder(5);
        console.log(result(10)); 
 
// Q2:Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested. 

        function searchArray(arr, value) {
            if (arr.length === 0) {
            return false;
            }
            if (arr[0] === value) {
            return true;
            }
            return searchArray(arr.slice(1), value);
        }
        const myArray = [1, 2, 3, 4, 5];
        console.log(searchArray(myArray, 3)); 
    
// Q3: Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

            function addParagraph(text) {
                const newParagraph = document.createElement('p');
                newParagraph.textContent = text;
                document.body.appendChild(newParagraph);
              }
              addParagraph('Hello, world!');
 
//  Q4:Write a function that adds a new list item to an unordered list in an HTML
//  document. The function should take a string argument that will be used as
//  the text content of the new list item.

function addListItem(text) {
  var ul = document.getElementById("myList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
addListItem("New Item");



// Q5:Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

        function changeBackgroundColor(element, color) {
          element.style.backgroundColor = color;
        }
        var myDiv = document.getElementById("myDiv");
        changeBackgroundColor(myDiv, "red");

// Q6:Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


      let std={
              name: prompt("What id stduents name?"),
              Cnic: +prompt("What is your cnic?"),
              dob: prompt("What is your dob?"),
              rollno: +prompt("Enter roll number"),
              };
      let key="students";
    function saveToLocalStorage(key,std){
      let stringify=JSON.stringify(std);
      localStorage.setItem(key,stringify);
    };


// Q7:Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
  let std={
  name: "Zainab Lakho",
  Cnic: 672637267,
  dob: "26-04-2003",
  rollno: "21f-js-15124",
  };
  let students=[std];
  let stringify=JSON.stringify(students)
  localStorage.setItem("students",stringify)
function retrievingObject (students){
 let ifData=localStorage.getItem("students");
//  let prevData=JSON.parse(ifData)
 console.log(JSON.parse(ifData));
}

// Q8:Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

              let students=[];
                function provideStudentsDetails(){
                    let std={
                    name: prompt("What id stduents name?"),
                    Cnic: +prompt("What is your cnic?"),
                    dob: prompt("What is your dob?"),
                    rollno: +prompt("Enter roll number"),
                    };
                students.push(std);
                console.log(students);
                let stringify=JSON.stringify(students);
                localStorage.setItem("students",stringify)
                }

    