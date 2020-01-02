const kingID = new URLSearchParams(window.location.search).get("id")
const theKingDiv = document.getElementById("king-div")
const deadDiv = document.getElementById("dead-div")
const lordlessUL = document.getElementById("lordless-ul")

fetch(`http://localhost:3000/kings/${kingID}`)
    .then(response => response.json())
    .then(king => {
        makeWeddingHeader(king)
        makeWeddingFooter(king)
        fillLordlessList(king)
        deleteKing()
    })
    .catch(error => console.log(error))

function deleteKing(){
    console.log("Delete King called")
    fetch(`http://localhost:3000/kings/${kingID}`, {
        method: "DELETE"
    })
}

///HELPERS///
function makeWeddingHeader(king) {
    let kingH1 = document.createElement("h1")
    kingH1.innerText = `King ${king.name} has arrived at the wedding.`
    theKingDiv.appendChild(kingH1)
}

function makeWeddingFooter(king) {
    let deadH1 = document.createElement("h1")
    deadH1.innerText = `King ${king.name} has been killed.`
    deadDiv.appendChild(deadH1)
}

function fillLordlessList(king) {
    king.houses.map(house => {
        let houseLI = document.createElement("li")
        houseLI.innerText = house.name
        lordlessUL.appendChild(houseLI)
    })
}
///HELPERS END///