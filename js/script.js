function init() {

    document.getElementById("entrybutton").addEventListener("click", showMessage)
}

function showMessage() {
    let text = document.getElementById("entryinput").value;

    document.getElementById("textoutput").innerText = text;

    window.alert("Luis Matos: " + text);
}


window.addEventListener('load', init);



