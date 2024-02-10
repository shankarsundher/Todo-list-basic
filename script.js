const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        
        alert('Write something in the text box!');
		
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
	if{
		
	}
	else{
		
		
	}

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (i) {
    if (i.target.tagName === "LI") {
        i.target.classList.toggle("checked")
        saveData();
    }
    else if (i.target.tagName === "SPAN") {
        i.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();
