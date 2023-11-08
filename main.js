const textEl = document.getElementById("textHere")
const totalEl = document.getElementById("totalValue")
const remainingEl = document.getElementById("totalRemaining")

textEl.addEventListener("keydown",()=>{calculate()
})
calculate()
function calculate(){
    totalEl.innerText = textEl.value.length;
    remainingEl.innerText = textEl.getAttribute("maxLength") - textEl.value.length;
}