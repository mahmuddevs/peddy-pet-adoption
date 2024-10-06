// All pets
//https://openapi.programming-hero.com/api/peddy/pets
// Categories
// https://openapi.programming-hero.com/api/peddy/categories
// By ID
//https://openapi.programming-hero.com/api/peddy/pet/1
// by category
//https://openapi.programming-hero.com/api/peddy/category/dog


const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => showCategories(data.categories))
}

fetchCategories()

const fetchAll = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => console.log(data.pets))
}

fetchAll()