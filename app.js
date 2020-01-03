const divCard = document.getElementById("king-card")
const divBattle = document.getElementById("battle")
const weddingDropdown = document.getElementById("wedding-dropdown")
const inviteButton = document.getElementById("invite-button")

fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => kings.map(showKings))

    function showKings(king) {
        let h2 = document.createElement('h2')
        h2.innerHTML = `<a href="show.html?id=${king.id}">${king.name}<br><br>♛<br><br>Houses: ${king.houses.length}</a>`
        divCard.appendChild(h2)
        }

let h1 = document.createElement('h1')
h1.innerHTML = `<a href="battle.html">Let's Battle!<br>&harrcir;</a>`
divBattle.appendChild(h1)

function deleteKing(id) {
    fetch(`http://localhost:3000/kings/${id}`, {
        method:'DELETE'
    })
}

// Refactor into earlier fetch later
fetch(`http://localhost:3000/kings`)
    .then(response => response.json())
    .then(kings => {
        fillInWeddingDropdown(kings)
    })
    .catch(error => console.log(error))

function fillInWeddingDropdown(kings){
    kings.map(king => {
        let kingOption = document.createElement("option")
        kingOption.innerText = king.name
        kingOption.value = king.id
        weddingDropdown.appendChild(kingOption)
    })
}

inviteButton.addEventListener("click", () => {
    kingID = weddingDropdown.value
    location.href = `http://localhost:3001/wedding.html?id=${kingID}`
})