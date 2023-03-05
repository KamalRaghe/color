const text= document.querySelector("h1")

function changeColor(event) {
    const  color= event.target.value
    text.style.color = color
}