let lists = document.querySelectorAll(".list");
let right = document.getElementById("right");
let left = document.getElementById("left");

lists.forEach(list => {
    list.addEventListener("dragstart", function(ele){
        let selected = ele.target;
        right.addEventListener("dragover", function(ele){
            ele.preventDefault();
        });
        right.addEventListener("drop", function(ele){
            right.appendChild(selected);
            selected = null;
        });
        left.addEventListener("dragover", function(ele){
            ele.preventDefault();
        });
        left.addEventListener("drop", function(ele){
            left.appendChild(selected);
            selected = null;
        });
    })
});