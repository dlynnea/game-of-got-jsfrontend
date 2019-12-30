const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/houses/${id}`)
    .then(response => response.json())
    .then(house => {
        let h3 = document.createElement('h3')
        h3.textContent = house.name
        document.body.appendChild(h3)
    })