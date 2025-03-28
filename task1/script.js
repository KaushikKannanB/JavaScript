function addTask() {
    let taskinput = document.getElementById("taskinput");
    let tasktext = taskinput.value.trim();

    if (tasktext === "") return;

    let li = document.createElement("li");
    let now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    let minutes = now.getMinutes().toString().padStart(2, "0"); // Ensuring 2-digit minutes
    let timestamp = `${hours}:${minutes} ${ampm}`;

    li.innerHTML = `<span>${tasktext} (added at ${timestamp})</span>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="completetask(this)">✅</button> 
        <button onclick="removetask(this)">X</button>`;

    document.getElementById("tasklist").appendChild(li);
    taskinput.value = "";

    setTimeout(() => {
        li.classList.add("show");
    }, 10);
}

function editTask(button){
    let li = button.parentElement;
    let span = li.querySelector("span");
    let oldtask = span.textContent.split(" (added at")[0];

    let input = document.createElement("input");
    input.type = "text";
    input.value = oldtask;

    input.onblur = function(){
        if(input.value !== ""){
            span.textContent = input.value.trim() + span.textContent.slice(span.textContent.indexOf(" (added at"));
        }
        li.replaceChild(span, input);
    }

    li.replaceChild(input, span);
    input.focus();
}

function completetask(button) {
    let li = button.parentElement;
    let taskText = li.querySelector("span").textContent.split(" (added at")[0];
    let timetext = li.querySelector("span").textContent.split(" (added at")[1];
    
    let now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let timestamp = `${hours}:${minutes} ${ampm}`;

    let cli = document.createElement("li");
    cli.innerHTML = `<span>${taskText} (added at ${timetext} completed at ${timestamp})</span> 
        <button onclick="removetask(this)">X</button>`;

    document.getElementById("completedlist").appendChild(cli);

    setTimeout(() => {
        cli.classList.add("show");
    }, 10);

    li.classList.remove("show");
    setTimeout(() => {
        li.remove();
    }, 500);
}

function removetask(button) {
    let li = button.parentElement;
    li.classList.remove("show");
    setTimeout(() => {
        li.remove();
    }, 500);
}