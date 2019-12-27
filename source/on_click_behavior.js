function pageReady(){
    let elements = document.getElementsByTagName("button")
    console.log(elements)
    let button = elements[0]
    console.log("button", button)
    button.onclick = function showAlert(){
        alert("something else")
    }
}
window.addEventListener('load', pageReady);