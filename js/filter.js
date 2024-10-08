//filter by category
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

//Sort by price
document.getElementById('sortByPrice').addEventListener('click', () => {
    const categoryActive = document.querySelector('.menu-active')
    const activeItem = categoryActive?.innerText
    //if no category is clicked then fetch this 
    if (!categoryActive && !activeItem) {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => {
                data.pets.sort((a, b) => b.price - a.price);
                cardsContainer.innerHTML = ''
                cardsContainer.appendChild(loader)
                setTimeout(() => {
                    cardsContainer.removeChild(loader)
                    showAllData(data.pets)
                }, 2000)
            })
    }
    //if category is clicked fetch this 
    if (categoryActive && activeItem) {
        fetch(`https://openapi.programming-hero.com/api/peddy/category/${activeItem}`)
            .then(res => res.json())
            .then(data => {
                pets = data.data.sort((a, b) => b.price - a.price);
                cardsContainer.innerHTML = ''
                cardsContainer.appendChild(loader)
                setTimeout(() => {
                    cardsContainer.removeChild(loader)
                    showAllData(pets)
                }, 2000)
            })
    }

})

