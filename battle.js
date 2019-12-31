const kingDropdown = document.getElementsByClassName("dropdown")

    fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => kings.map(kingSelector))

    function kingSelector(king) {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.textContent = king.name
        option2.textContent = king.name
        option1.value = king.id
        option2.value = king.id
        kingDropdown[0].appendChild(option1)
        kingDropdown[1].appendChild(option2)
    }