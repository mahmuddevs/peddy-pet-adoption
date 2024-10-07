const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => showCategories(data.categories))
}

fetchCategories()

const fetchAll = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
            cardsContainer.appendChild(loader)
            setTimeout(() => {
                cardsContainer.removeChild(loader)
                showAllData(data.pets)
            }, 2000)
        })
}

fetchAll()

