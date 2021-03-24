// predefine projects with details
const projects = {
    "aurora": {
        "name": "aurora",
        "tech-used": "JS, HTML, CSS, Express, PostgreSQL, Pug",
        "description": "Clone of Quora where users can sort questions by expertise level",
        "live-link": "https://aurora-quora.herokuapp.com/",
        "github-repo": "https://github.com/cellomatt/aurora"
    },
    "robinkarma": {
        "name": "robinkarma",
        "tech-used": "React, Redux, JS, HTML, CSS, Express, PostgreSQL",
        "description": "Clone of Robinhood where users buy shares of charitable projects",
        "live-link": "https://robinhood-karma.herokuapp.com/",
        "github-repo": "https://github.com/lettemax/authenticate-me"
    },
    "petstagram": {
        "name": "petstagram",
        "tech-used": "React, Redux, JS, Python, HTML, CSS, Express, PostgreSQL, Flask, SQLAlchemy, AWS S3",
        "description": "Clone of Instagram where users post photos of their pets",
        "live-link": "https://petstagram-3.herokuapp.com/",
        "github-repo": "https://github.com/lettemax/petstagram"
    },
    "zipnodes": {
        "name": "zipnodes",
        "tech-used": "React, Redux, JS, Python, HTML, CSS, Express, PostgreSQL, Flask, SQLAlchemy",
        "description": "Site for aspiring utilitarians to donate, volunteer and participate in politics",
        "live-link": "https://zipnodes.herokuapp.com/",
        "github-repo": "https://github.com/lettemax/zipnodes"
    }
};

// when page loads add project titles to projects-bar, default details to first project
window.addEventListener('DOMContentLoaded', event => {
    // get projects-bar
    const projBar = document.getElementById("projects-bar");
    // get project names
    let projs = Object.keys(projects);
    // create a project bar item for each project
    projs.forEach(proj => {
        let projBarItem = document.createElement("p");
        projBarItem.innerHTML = proj;
        projBarItem.classList.add("project");
        // add event listener to toggle project details on click
        projBarItem.addEventListener("click", event => {
            updateProjDetails(proj);
        });
        projBar.appendChild(projBarItem);
    });
    // load first project details
    updateProjDetails(projs[0]);
});

// function to update project details
function updateProjDetails(proj) {
    let techUsed = document.getElementById("tech-used");
    techUsed.innerHTML = projects[proj]["tech-used"];
    let description = document.getElementById("description");
    description.innerHTML = projects[proj]["description"];
    let liveLink = document.getElementById("live-link");
    liveLink.href = projects[proj]["live-link"]
    let githubRepo = document.getElementById("github-repo");
    githubRepo.href = projects[proj]["github-repo"];
    // loop through project names and indicate active project
    const projBar = document.getElementById("projects-bar");
    let projs = projBar.children;
    projs = Array.from(projs);
    projs.forEach((el) => {
        if (el.innerHTML == proj) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

