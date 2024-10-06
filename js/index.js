const categoryContainer = document.getElementById("categories")

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

