var confirmBtn = document.getElementById('confirm');

function confirmFunct(){
    let text = "Are you sure you want to submit this?"
    if (confirm(text) == true) {
        event.preventDefault();
        window.location.href = "confirm.html";
    }
      
}
        confirmBtn.addEventListener('click', confirmFunct);