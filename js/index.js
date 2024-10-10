const categoryContainer = document.getElementById('categories')
// Categories
const showCategories = categories => {
  categories.forEach(category => {
    const categoryItem = document.createElement('div')
    categoryItem.classList.add(
      'flex',
      'items-center',
      'gap-4',
      'border',
      'border-[#0E7A81]/15',
      'rounded-2xl',
      'justify-center',
      'lg:px-20',
      'py-4'
    )
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
  })
}

// Show All Pets
const cardsContainer = document.getElementById('cards-container')
const sortBtn = document.getElementById('sortByPrice')

const showAllData = pets => {
  if (pets.length === 0) {
    const errorSec = document.createElement('div')
    errorSec.classList.add(
      'bg-[#13131308]',
      'col-span-3',
      'content-center',
      'text-center',
      'border',
      'border-[#131313]/10',
      'rounded-lg',
      'w-full',
      'h-96'
    )
    errorSec.innerHTML = `
                    <img src="./images/error.webp" alt="" class="mx-auto">
                    <h3 class="font-bold text-[32px] text-[#131313]">No Information Available</h3>
                    <p>There is no information available of this category</p>
            `
    cardsContainer.appendChild(errorSec)
  }
  // Creating cards for each pets
  pets.forEach(pet => {
    const petCard = document.createElement('div')
    petCard.classList.add(
      'card',
      'bg-base-100',
      'shadow-sm',
      'p-5',
      'border',
      'border-[#131313]/10',
      'rounded-lg',
      'min-w-64'
    )

    petCard.innerHTML = `
            <figure class="rounded-lg">
                <img src="${
                  pet.image ? pet.image : 'Not Available'
                }" alt="" class="petImg h-52"/>
            </figure>
            <div class="card-body p-0 mb-2.5 mt-6">
                <h4 class="text-xl font-inter">${
                  pet.pet_name ? pet.pet_name : 'Not Available'
                }</h4>
                <ul class="space-y-2.5 border-b-[1px] border-[#131313]/10 pb-4">
                    <li class="flex gap-2">
                        <img src="./icons/type.png" alt="">
                        <p>Breed: ${pet.breed ? pet.breed : 'Not Available'}</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/date.png" alt="">
                        <p>Birth: ${
                          pet.date_of_birth
                            ? pet.date_of_birth
                            : 'Not Available'
                        }</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/gender.png" alt="">
                        <p>Gender: ${
                          pet.gender ? pet.gender : 'Not Available'
                        }</p>
                    </li>
                    <li class="flex gap-2">
                        <img src="./icons/price.png" alt="">
                        <p>Price : ${
                          pet.price ? pet.price + ' $' : 'Not Available'
                        }</p>
                    </li>
                </ul>
                <div class="flex justify-between items-center gap-2 sm:gap-3 mt-4">
                    <div class="like cursor-pointer border border-[#0E7A81]/15 rounded-lg px-2.5 sm:px-3.5 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
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
    //handle like functionality
    handleLike(petCard)

    //adoption modal
    petCard.querySelector('.adopt').addEventListener('click', () => {
      handleAdopt()
      setInterval(() => {
        const adaptBtn = petCard.querySelector('.adopt')
        adaptBtn.textContent = 'Adopted'
        adaptBtn.classList.add(
          'pointer-events-none',
          'bg-gray-300',
          'text-slate-500'
        )
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
loader.classList.add(
  'loading',
  'loading-ring',
  'loading-lg',
  'absolute',
  'inset-0',
  'm-auto'
)
