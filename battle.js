const kingDropdown = document.getElementsByClassName("dropdown")
const battleForm = document.getElementById("battle-form")
const battleResultsDiv = document.getElementById("battle-results")
const battleButton = document.getElementById("battle-button")
const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")
let kings

fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(parsedKings => {
        kings = parsedKings
        kingSelector(kings)
    })

function kingSelector(kings) {
    battleButton.addEventListener("click", () => {
        event.preventDefault()
        kingBattle(kings)
    })
    kings.map(king => {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.textContent = king.name
        option2.textContent = king.name
        option1.value = king.id
        option2.value = king.id
        kingDropdown[0].appendChild(option1)
        kingDropdown[1].appendChild(option2)
    })
}


function kingBattle(kings) {
    attackKingID = kingDropdown[0].options[kingDropdown[0].selectedIndex].value
    defendKingID = kingDropdown[1].options[kingDropdown[1].selectedIndex].value

    attackerPower = 0
    defenderPower = 0
    
    kings.map(king => {
        if (king.id == attackKingID) {
            createOrUpdateAttacker(king)
        }

        if (king.id == defendKingID) {
            createOrUpdateDefender(king)
        }
    })

    function createOrUpdateAttacker(king) {
        let house = king.houses[Math.floor(Math.random() * king.houses.length)]
        let houseName = house.name
        let housePower = house.power

        if (card1.childNodes.length == 0) {
            let houseNameH2 = document.createElement("h2")
            let housePowerH2 = document.createElement("h2")
            houseNameH2.textContent = `House: ${houseName}`
            housePowerH2.textContent = `Power: ${housePower}`
            card1.append(houseNameH2, housePowerH2)

            attackerPower = housePower
        } else {
            console.log(card1.childNodes)
            card1.childNodes[0].textContent = `House: ${houseName}`
            card1.childNodes[1].textContent = `Power: ${housePower}`
            if (card1.childNodes[2]) {
                card1.childNodes[2].remove()
            }
            attackerPower = housePower
        }
    }

    function createOrUpdateDefender(king) {
        let house = king.houses[Math.floor(Math.random() * king.houses.length)]
        let houseName = house.name
        let housePower = house.power

        if (card2.childNodes.length == 0) {
            let houseNameH2 = document.createElement("h2")
            let housePowerH2 = document.createElement("h2")
            houseNameH2.textContent = `House: ${houseName}`
            housePowerH2.textContent = `Power: ${housePower}`
            card2.append(houseNameH2, housePowerH2)

            defenderPower = housePower
        } else {
            console.log(card2.childNodes)
            card2.childNodes[0].textContent = `House: ${houseName}`
            card2.childNodes[1].textContent = `Power: ${housePower}`
            if (card2.childNodes[2]) {
                card2.childNodes[2].remove()
            }
            defenderPower = housePower
        }
    }
    
    let winnerH1 = document.createElement("h1")
    winnerH1.innerHTML = `&Star; WINNER! &Star;`

    if (attackerPower > defenderPower){
        console.log("Attacker won")
        card1.appendChild(winnerH1)
    } else {
        console.log("Defender won")
        card2.appendChild(winnerH1)
    }
}
