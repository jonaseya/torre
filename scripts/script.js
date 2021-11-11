var element = document.getElementById("software-dev").style.display = "none";

document.getElementById("revealer").addEventListener('click', function() {
    var x = document.getElementById("software-dev");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});