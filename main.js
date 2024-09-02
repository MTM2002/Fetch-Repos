let input = document.querySelector(".get-repos input");
let button = document.querySelector(".get-button");
let data = document.querySelector(".show-data");


button.onclick = function () {
    getRepos();
}


function getRepos() {
    if(input.value== "") {
        data.innerHTML = "<span>Please Enter Your Username.</span>"
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then(repos => repos.json())
        .then(repos => {
            data.innerHTML = ""
            repos.forEach(repo => {
                let mainDiv = document.createElement("div")
                mainDiv.appendChild(document.createTextNode(repo.name))
                let theUrl = document.createElement("a")
                theUrlText = document.createTextNode("Visit")
                theUrl.appendChild(theUrlText)
                theUrl.href = `https://github.com/${input.value}/${repo.name}`
                theUrl.setAttribute("target","_blank")
                mainDiv.appendChild(theUrl)
                let starsSpan = document.createElement("span")
                let startsText = document.createTextNode(`Stars: ${repo.stargazers_count}`)
                starsSpan.appendChild(startsText)
                mainDiv.appendChild(starsSpan)
                mainDiv.className = "repo-box"
                data.appendChild(mainDiv)
            })
        })
    }
}