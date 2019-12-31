const kingDropdown = document.getElementsByClassName("dropdown")

    fetch("http://localhost:3000/kings")
    .then(response => response.json())
    .then(kings => kings.map(kingSelector))

    function kingSelector(king) {
        let option = document.createElement('option')
        option.textContent = king.name
        option.value = king.id
        kingDropdown.appendChild(option)
    }