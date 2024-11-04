// variables
let completedCount = 0;
const TodoArray = [];
const TodoObject = {};


// declare html el
const inputTodo = document.querySelector("#inputTodo");
const addBtn = document.querySelector("#addBtn");
const TodoList = document.querySelector("ul");
const infotext = document.querySelector("#infotext")
const InfoTodo = document.querySelector("#InfoTodo")

addBtn.addEventListener(
    "click",
    function () {
        // value from input
        let text = inputTodo.value;

        //check input not empty
        if (text.length === 0) {
            infotext.innerText = "Input must not be empty";
  
            startBlinkAnimation();
            return
        }
        else {
            infotext.innerText = "";
        }
        function startBlinkAnimation() {
            infotext.classList.add('blink'); // Add the blink class to the small element
        
            // Remove the class after animation duration (3 seconds)
            setTimeout(() => {
                infotext.classList.remove('blink');
            }, 3000); // Adjust time as needed
        }
        //new html el in ul
        const listItem = document.createElement("li");
        TodoList.appendChild(listItem);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        listItem.appendChild(itemLabel);

        // delete button 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑️"; 
        deleteBtn.setAttribute("class", "deleteBtn");
        listItem.appendChild(deleteBtn);

    // Apply flyUpp animation to the new list item
    listItem.style.animation = "flyUpp 1s forwards";
    deleteBtn.style.animation = "flyUpp 0.5s forwards"; 


        //eventlistener to new span-element
        itemLabel.addEventListener(
            "click",
            function () {

                if (listItem.getAttribute("class") == "completed") {

                    completedCount--;
                    listItem.setAttribute("class", "");
                }
                else {
                    completedCount++;
                    listItem.setAttribute("class", "completed");

                }

                InfoTodo.innerText = `${completedCount} completed`;


            }
        );

        // Event listener for the delete button (remove task)
        deleteBtn.addEventListener(
            "click",
            function () {
                listItem.remove()

                // If task was completed, update completedCount
                if (listItem.getAttribute("class") === "completed") {
                    completedCount--;
                    InfoTodo.innerText = `${completedCount} completed`;
                }

                // Optionally, remove task from TodoArray if needed
                const index = TodoArray.indexOf(text);
                if (index > -1) {
                    TodoArray.splice(index, 1);
                }
            }
        );

        TodoArray.push(text);

        // set input empty
        inputTodo.value = "";
    }
);