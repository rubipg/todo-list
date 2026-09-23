// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    // These are the items that will already be on the list when the page loads
    "Review choreography",
    "Stretch for 10 minutes",
    "Practice turns"
];

// 2. Create variables for each interactive DOM element

// Connects the Add button in the HTML to javascript
const addItemButton = document.getElementById('add-item-button');
// add more variables below

// Connects the list in the HTML to javascript
const list = document.getElementById('list');

// Connects the text input section in the HTML to javascript
const textInput = document.getElementById('text');

// Connects the Sort button in the HTML to javascript
const sortBtn = document.getElementById('sort');

// Connects the Clear button in the HTML to javascript
const clearBtn = document.getElementById('clear');



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here

    // Clears the list before displaying it again 
    // This prevents the items from being duplicated
    list.innerHTML = "";

    // Loops through every item in the todoItems array
    for (let i = 0; i < todoItems.length; i++){

        // Creates a new <li> element for each item
        let listItem = document.createElement ("li");

        // Puts the current array item inside the <li>
        listItem.textContent = todoItems [i];

        // Allows the user to click on an item to remove it
        listItem.addEventListener ("click", function (){

            // Removes 1 item from the array at the clicked item's position
            todoItems.splice(i,1);

            // Updates the list after the item is removed
            updateList();
        });
        // Adds the new <li> to the <ul> on the webpage
        list.appendChild(listItem);
    }
}

// Runs the function when the page first loads 
// This displays the starting items on the page
updateList();

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here

    // Gets the text that the user typed into the input
    let newItem = textInput.value;

    // Checks that the input is not empty before adding it
    if (newItem !== ""){
        // Adds the new item to the end of the array
        todoItems.push(newItem);
        // Clears the input box after the item is added
        textInput.value = "";
        // Updates the list so the new item appears on the page
        updateList ();
    }
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here

    // Sorts all of the items in the array alphabetically
    todoItems.sort(function (a, b) {
        //localeCompare compares two variables using the current language
    return a.localeCompare(b);
});
    // Updates the list to show the new alphabetical order
    updateList();
});


// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here

    // Replaces the current array with an empty array 
    // This removes all of the items from the list
    todoItems = [];

    // Updates the page so the list becomes empty
    updateList();
});