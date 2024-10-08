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

document.getElementById('sortByPrice').addEventListener('click', () => {
    const categoryActive = document.querySelector('.menu-active')
    const activeItem = categoryActive?.innerText
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

// fetch('https://openapi.programming-hero.com/api/peddy/pets')
//     .then(res => res.json())
//     .then(data => {
//         data.pets.sort((a, b) => b.price - a.price);
//         cardsContainer.innerHTML = ''
//         cardsContainer.appendChild(loader)
//         setTimeout(() => {
//             cardsContainer.removeChild(loader)
//             showAllData(data.pets)
//         }, 2000)
//     })