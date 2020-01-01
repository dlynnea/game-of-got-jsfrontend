const divCard = document.getElementById("king-card")
const weddingDropdown = document.getElementById("wedding-dropdown")
const inviteButton = document.getElementById("invite-button")

fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => kings.map(showKings))

    function showKings(king) {
        let h2 = document.createElement('h2')
        h2.innerHTML = `<a href="show.html?id=${king.id}">${king.name}</a>`
        let deleteButton = document.createElement('button')
        deleteButton.textContent =  "delete"
        deleteButton.addEventListener('click', () => {
            event.target.parentNode.remove()
            deleteKing(king.id)
        })
        divCard.appendChild(h2)
        h2.appendChild(deleteButton)
    }

let h3 = document.createElement('h3')
h3.innerHTML = '<a href="battle.html">Battle?</a>'
document.body.appendChild(h3)

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