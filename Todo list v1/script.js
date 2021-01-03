//grapping all the elements that i will use
let createBtn = document.querySelector(".create");
let header1 = document.querySelector(".header");
let header2 = document.querySelector("h2");
let list = document.querySelector(".list");

//an event listener that will create a new task when i click the button
createBtn.addEventListener("click",function(){
    //change the header
    header1.innerHTML = "<em>ToDO list </em>";
    //create a text area to the user
    let textArea = document.createElement("input");
    textArea.setAttribute("type","text");
    document.querySelector(".text").appendChild(textArea);    
    //create an event to the text area so that i can get the task
    textArea.addEventListener("keypress",function(event){
    //add the text to a list item
        if(event.key == 'Enter'){
            let task = document.createElement("li");
            task.textContent = textArea.value; //its just the user input
            if(task.textContent != ""){
                list.appendChild(task);
                //create a delete button
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "-";
                task.appendChild(deleteButton);
                //add the styling to a completed task
                completed(task);
                //making the delete button works
                deleteButton.addEventListener("click",function(){
                    list.removeChild(task);
                })
            }
            
            document.querySelector(".text").removeChild(textArea); //delete the text area after the user presses enter
        }
        

    })
    
 

})
    // a function for commpleting a task
    // i Already created a class to style the completed task. i'll just push it 
    function completed(element){
        //add the styling after one click
        element.addEventListener("click",function(){
            element.setAttribute("class","completed")
            
        
        })
    }

       



