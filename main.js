const removeBtn = document.getElementById("remove");
const addBtn = document.getElementById("add");
const counterNum = document.getElementById("number");
let count = 0;

removeBtn.addEventListener("click", function() {
    if(count == 0) {
        return counterNum.textContent = count;
    } else {
       counterNum.textContent = count--;
    };
})

addBtn.addEventListener("click", function() {
    count++;
    counterNum.textContent = count;
})