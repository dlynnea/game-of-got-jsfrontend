const divCard = document.getElementById("king-card")
const divBattle = document.getElementById("battle")

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

let h1 = document.createElement('h1')
h1.innerHTML = `<a href="battle.html">Let's Battle!</a>`
divBattle.appendChild(h1)

function deleteKing(id) {
    fetch(`http://localhost:3000/kings/${id}`, {
        method:'DELETE'
    })
}
