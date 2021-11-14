function myFunction(divid) {

    var x = document.getElementById(divid);

    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
const div = document.getElementById("jobs"),
    url = "";
fetch(url).
then(response => {
    return response.json();
}).
then(data => {
    let jobs = data.jobs;

    let jobsLengthTitle = document.querySelector(".job-length");
    if (jobs.length === 0) {
        jobsLengthTitle.innerHTML = "Sorry no jobs to show right now";
    } else {
        jobsLengthTitle.innerHTML = `<h3>There are ${jobs.length} availible jobs right now.</h3>`;
    }

    jobs.forEach(job => {
        let output = '<div class="container">';

        function truncateString(myString, limit) {
            const shortened = myString.indexOf(" ", limit);
            if (shortened == -1) return myString;
            return (
                myString.substring(0, shortened) +
                `<a class="read-more" href="${job.url}" target="_blank"> Read More ...</a>`);

        }
        jobs.forEach(job => {
            output += `
        <div class="card">
          <div class="card-inner">
            <h1>${job.company_name}</h1>
            <span>${job.featured_text}</span>
            <p>${job.title}</p>
            <p>${job.remote}</p>
            <div class="term"> ${job.term}</div>
            <p class="space-b-sm">${truncateString(job.description, 250)}</p>
            <a class="btn btn-main" href=${
      job.url
      } target="_blank">Apply Now</a>
          </div>
        </div>
      `;
        });

        if (job.remote === true) {
            job.remote = "Location: Remote";
        } else {
            job.remote = "";
        }
        document.getElementById("jobs").innerHTML = output;
    });
}).
catch(error => console.log(error));