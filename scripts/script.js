var element = document.getElementById("software-dev").style.display = "none";

document.getElementById("revealer").addEventListener('click', function() {
    var x = document.getElementById("software-dev");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});
fetch('https://search.torre.co/opportunities/_search/?', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'search' })
    })
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))