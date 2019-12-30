fetch("http://localhost:3000/houses")
    .then(response => response.json())
    .then(houses => houses.map(showHouses))

    function showHouses(house) {
        let h2 = document.createElement('h2')
        h2.innerHTML = `<a href="show.html?if=${house.id}">${house.name}</a>`
        document.body.appendChild(h2)
    }

