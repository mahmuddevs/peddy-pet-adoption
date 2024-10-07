const filterByCategory = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.innerHTML = ''
            cardsContainer.appendChild(loader)
            setTimeout(() => {
                cardsContainer.removeChild(loader)
                showAllData(data.data)
            }, 2000)
        })
}