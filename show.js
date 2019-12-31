const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const houseDropdown = document.getElementById("dropdown")
const divElement = document.getElementById("house-div")

fetch(`http://localhost:3000/houses/${id}`)
    .then(response => response.json())
    .then(house => {
        let h3 = document.createElement('h3')
        h3.textContent = house.name
        divElement.appendChild(h3)
    })

fetch("http://localhost:3000/houses")
    .then(response => response.json())
    .then(houses => houses.map(house => {
        let option = document.createElement('option')
        option.textContent = house.name
        option.value = house.id
        houseDropdown.appendChild(option)
    }))

