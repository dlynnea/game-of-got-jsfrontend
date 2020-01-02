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
        updateHousesToLordless(king)
    })
    .then(result => deleteKing())
    .catch(error => console.log(error))

function updateHousesToLordless(king) {
    console.log("Structurally important console log, provides a return value")
    king.houses.map(house => {
        fetch(`http://localhost:3000/houses/${house.id}`, {
            method:'PUT',
            headers:{  
                'Content-Type':'application/json',
                'Accept':'application/json'
            }, 
            body:JSON.stringify({name: house.name, king_id: null})
        })
    })
}

function deleteKing(){
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