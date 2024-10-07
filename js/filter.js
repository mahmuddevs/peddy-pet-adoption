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

// Sort By Price
// document.getElementById('sortByPrice').addEventListener('click', () => {
//     fetch('https://openapi.programming-hero.com/api/peddy/pets')
//         .then(res => res.json())
//         .then(data => {
//             data.pets.sort((a, b) => b.price - a.price);
//             cardsContainer.innerHTML = ''
//             cardsContainer.appendChild(loader)
//             setTimeout(() => {
//                 cardsContainer.removeChild(loader)
//                 showAllData(data.pets)
//             }, 2000)
//         })
// })