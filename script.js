const input = document.getElementById("input");
const addBtn = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// function check(){
//     if (input && addBtn && taskList){
//         console.log("active");
//     } else {
//         console.log("Not active");

//     }
// }

// check()



addBtn.addEventListener("click", (e)=>{ 
    const inputValue = input.value.trim();
    if(inputValue === ""){
        console.log("empty input");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = inputValue;
    taskList.appendChild(newTask);
    input.value = '';
});
