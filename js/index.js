const categoryContainer = document.getElementById("categories")
// Categories
const showCategories = (categories) => {
    categories.forEach(category => {
        const categoryItem = document.createElement('div')
        categoryItem.classList.add('flex', 'items-center', 'gap-4', 'border', 'border-[#0E7A81]/15', 'rounded-2xl', 'justify-center', 'lg:px-20', 'py-4')
        categoryItem.innerHTML = `
            <img src="${category.category_icon}" alt="">
            <h4>${category.category}</h4>
        `
        categoryContainer.appendChild(categoryItem)

        categoryItem.addEventListener('click', () => {
            const activeMenuItem = document.querySelector('.menu-active')
            if (activeMenuItem) {
                activeMenuItem.classList.remove('menu-active')
            }
            categoryItem.classList.add('menu-active')
            filterByCategory(category.category)
        })
    });
}

// Show All Pets
const cardsContainer = document.getElementById("cards-container")
const sortBtn = document.getElementById('sortByPrice')

const showAllData = (pets) => {
    if (pets.length === 0) {
        const errorSec = document.createElement('div')
        errorSec.classList.add('bg-[#13131308]', 'col-span-3', 'content-center', 'text-center', 'border', 'border-[#131313]/10', 'rounded-lg', 'w-full', 'h-96')
        errorSec.innerHTML = `
                    <img src="./images/error.webp" alt="" class="mx-auto">
                    <h3 class="font-bold text-[32px] text-[#131313]">No Information Available</h3>
                    <p>There is no information available of this category</p>
            `
        cardsContainer.appendChild(errorSec)
    }
    // Creating cards for each pets
    pets.forEach((pet) => {
        const petCard = document.createElement('div')
        petCard.classList.add('card', 'bg-base-100', 'shadow-sm', 'p-5', 'border', 'border-[#131313]/10', 'rounded-lg', 'min-w-64')
        console.log(pet)

        petCard.innerHTML = `
            <figure class="rounded-lg">
                <img src="${pet.image ? pet.image : "Not Available"}" alt="" class="petImg h-52"/>
            </figure>
            <div class="card-body p-0 mb-2.5 mt-6">
                <h4 class="text-xl font-inter">${pet.pet_name ? pet.pet_name : "Not Available"}</h4>
                <ul class="space-y-2.5 border-b-[1px] border-[#131313]/10 pb-4">
                    <li class="flex gap-2">
                        <img src="./icons/type.png" alt="">
                        <p>Breed: ${pet.breed ? pet.breed : "Not Available"}</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/date.png" alt="">
                        <p>Birth: ${pet.date_of_birth ? pet.date_of_birth : "Not Available"}</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/gender.png" alt="">
                        <p>Gender: ${pet.gender ? pet.gender : "Not Available"}</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/price.png" alt="">
                        <p>Price : ${pet.price ? pet.price + " $" : "Not Available"}</p>
                    </li>
                </ul>
                <div class="flex justify-between items-center gap-2 sm:gap-3 mt-4">
                    <div class="like cursor-pointer border border-[#0E7A81]/15 rounded-lg py-2 px-2.5 sm:px-3 text-[#0E7A81]">
                        <img src="./icons/like.png" alt="" class="max-w-5">
                    </div>
                    <div
                        class="adopt cursor-pointer text-xs sm:text-sm font-bold border border-[#0E7A81]/15 rounded-lg px-2.5 sm:px-3.5 py-2 text-[#0E7A81]">
                        Adopt
                    </div>
                    <div
                        class="details cursor-pointer text-xs sm:text-sm font-bold border border-[#0E7A81]/15 rounded-lg px-2.5 sm:px-3.5 py-2 text-[#0E7A81]">
                        Details
                    </div>
                </div>
            </div>
        `
        const likeBtn = petCard.querySelector('.like')
        likeBtn.addEventListener('click', () => {
            const likedPetContainer = document.getElementById('show-liked-pet')
            likedPetContainer.classList.remove('hidden')
            likedPetContainer.classList.add('grid')
            const imgUrl = petCard.querySelector('.petImg').src
            const likedPet = document.createElement('img')
            likedPet.classList.add('rounded-lg')
            likedPet.src = imgUrl
            likedPetContainer.appendChild(likedPet)
        })
        petCard.querySelector('.adopt').addEventListener('click', () => {
            handleAdopt(pet)
            setInterval(() => {
                const adaptBtn = petCard.querySelector('.adopt')
                adaptBtn.textContent = 'Adopted'
                adaptBtn.classList.add('pointer-events-none', 'bg-gray-300', 'text-slate-500')
            }, 3000)
        })

        //fetch details with pet id
        petCard.querySelector('.details').addEventListener('click', () => {
            fetchPetById(pet.petId)
        })

        cardsContainer.classList.remove('hidden')
        cardsContainer.classList.add('grid')
        cardsContainer.appendChild(petCard)

    })
}

// Loader
const loader = document.createElement('span')
loader.classList.add('loading', 'loading-ring', 'loading-lg', 'absolute', 'inset-0', 'm-auto')