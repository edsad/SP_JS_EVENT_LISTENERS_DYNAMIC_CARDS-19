console.log("dynamic cards");

function myFunc() {
    var words = document.getElementById("myTextarea").value;
    document.getElementById("myDIV").innerHTML = words;
}

function myFunction() {
    var box = document.getElementById('myDIV');
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}
