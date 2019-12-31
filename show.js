const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const houseDropdown = document.getElementById("dropdown")
const divElement = document.getElementById("house-div")
const divKing = document.getElementById("king-houses")
const list = document.getElementById("house-list")
const updateButton = document.getElementById("update-button")

fetch(`http://localhost:3000/kings/${id}`)
    .then(response => response.json())
    .then(king => {
        let h2 = document.createElement('h2')
        divKing.textContent = king.name
        king.houses.map(house => {
            let h4 = document.createElement('h4')
            h4.textContent = house.name
            list.appendChild(h4)
        })
        divElement.appendChild(h2)
})



function updateHouse(house){
    console.log("id", house)
    fetch(`http://localhost:3000/houses/${house}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
          }, 
          body:JSON.stringify({name:"House Updated"})
    })

}

fetch("http://localhost:3000/houses")
    .then(response => response.json())
    .then(houses => houses.map(house => {
        let option = document.createElement('option')
        option.textContent = house.name
        option.value = house.id
        houseDropdown.appendChild(option)
    }))

    ////
    // updateButton.addEventListener('click', ()=> {
    //     let houseId = houseDropdown.options[houseDropdown.selectedIndex].value
    //     // console.log("houseId", houseId)
    //     let houseKingId = ""
    //     fetch(`http://localhost:3000/house_kings`)
    //         .then(response => response.json())
    //         .then(house_kings => house_kings.map(house_king => {
    //             // console.log(house_king.house_id == houseId)
    //             if (house_king.house_id == houseId) {
    //                 houseKingId = "banana"
    //             } 
    //         })) 
    //         console.log(houseKingId)
    //     updateHouse(houseKingId)
    // })