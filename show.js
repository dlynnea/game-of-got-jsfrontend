const searchParams = new URLSearchParams(window.location.search)
const kingID = searchParams.get('id')

const houseDropdown = document.getElementById("dropdown")
const houseUL = document.getElementById("house-ul")
const divKing = document.getElementById("king-name")
const updateButton = document.getElementById("update-button")

fetch(`http://localhost:3000/kings/${kingID}`)
    .then(response => response.json())
    .then(king => {
        listKingsName(king)
        listKingsHouses(king)
})

fetch("http://localhost:3000/houses")
    .then(response => response.json())
    .then(houses => {
        fillOutEnlistHouseDropdown(houses)
})

updateButton.addEventListener("click", () => {
    let houseName = houseDropdown.options[houseDropdown.selectedIndex].textContent
    let houseID = houseDropdown.value
    fetch(`http://localhost:3000/houses/${houseID}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }, 
        body:JSON.stringify({name: houseName, king_id: kingID})
    })
})

///HELPERS///

function fillOutEnlistHouseDropdown(houses) {
    houses.map(house => {
        let houseOption = document.createElement('option')
        houseOption.textContent = house.name
        houseOption.value = house.id
        houseDropdown.appendChild(houseOption)
    })
}

function listKingsName(king) {
    let kingH2 = document.createElement('h2')
    kingH2.textContent = `King ${king.name}`
    divKing.appendChild(kingH2)
}

function listKingsHouses(king) {
    king.houses.map(house => {
        let houseLI = document.createElement('li')
        houseLI.textContent = house.name
        houseUL.appendChild(houseLI)
    })
}
///HELPERS END///


// updateButton.addEventListener('click', ()=> {
//         let houseId = houseDropdown.options[houseDropdown.selectedIndex].value
//         // console.log("houseId", houseId)
//         let houseKingId = ""
//         fetch(`http://localhost:3000/house_kings`)
//             .then(response => response.json())
//             .then(house_kings => house_kings.map(house_king => {
//             // console.log(house_king.house_id == houseId)
//             if (house_king.house_id == houseId) {
//                     houseKingId = "banana"
//                 } 
//             })) 
//             console.log(houseKingId)
//         updateHouse(houseKingId)
//     })

// function updateHouse(house){
//     console.log("id", house)
//     fetch(`http://localhost:3000/houses/${house}`, {
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json',
//             'Accept':'application/json'
//             }, 
//             body:JSON.stringify({name:"House Updated"})
//     })
// }