let incrementBtnElement = document.getElementById("incrementBtn");
let counterValueElement = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null){
    counterValueElement.textContent = 0;
}else {
    counterValueElement.textContent = clickCount;
    localStorage.clear();
}
function countIncrementer() {
    let previousCount = counterValueElement.textContent;
    let updatedCount = parseInt(previousCount) + 1;
    
    localStorage.setItem("clickCount", updatedCount);
    counterValueElement.textContent = updatedCount;
    
}