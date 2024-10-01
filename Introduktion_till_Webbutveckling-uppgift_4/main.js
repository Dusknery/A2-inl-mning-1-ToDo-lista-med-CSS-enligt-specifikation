// variables
let completedCount = 0;
const TodoArray = [];
const TodoObject ={};


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
            infotext.innerText = "Du måste skriva något!";
            return
        }
        else {
            infotext.innerText = "";
        }

        //new html el in ul
        const listItem = document.createElement("li");
        TodoList.appendChild(listItem);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        listItem.appendChild(itemLabel);

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

                InfoTodo.innerText = `Number of completed tasks ${completedCount}`;


            }
        );

        TodoArray.push(text);

            // set input empty
        inputTodo.value = "";
    }
);