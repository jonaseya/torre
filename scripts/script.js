function myFunction(divid) {

    var x = document.getElementById(divid);

    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function searchData() {
    fetch('https://search.torre.co/opportunities/_search/?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Alexander',
                professionalHeadline: 'Developer'
            })
        }).then(res => {
            if (!res.ok) {
                throw Error('Error Accured');
            }
            return res.json();

        })
        .then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error);
        });
}







// function fetchData() {
//     fetch('https://search.torre.co/people/_search/?')
//         .then(response => {
//             if (response.ok) {
//                 throw Error('Error Accured');
//             }
//             return response.json();
//         }).then(data => {
//             console.log(data.data);
//             const html = data.data
//                 .map(user => {
//                     return `
//                         <div class="user">
//                         <p><img src="${user.picture}" alt="${user.name}" /></p>
//                         <p>Name : ${user.name}</p>
//                         <p> professionalHeadline: ${user.professionalHeadline}</p>
//                     </div>
//                     `;
//                 })
//                 .join("");
//             document.querySelector("#app").insertAdjacentElement("afterbegin", html);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }
// fetchData();


// var url = "https://search.torre.co/opportunities/_search/?";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Content-Length", "0");

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(xhr.status);
//         console.log(xhr.responseText);
//     }
// };

// xhr.send();