const divEl = document.getElementById('king-div')

fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => kings.map(showKings))

    function showKings(king) {
        let h2 = document.createElement('h2')
        h2.innerHTML = `<a href="show.html?id=${king.id}">${king.name}</a>`
        divEl.appendChild(h2)
    }

let h3 = document.createElement('h3')
h3.innerHTML = '<a href="battle.html">Battle?</a>'
document.body.appendChild(h3)
