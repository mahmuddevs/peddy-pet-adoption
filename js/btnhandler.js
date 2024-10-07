const showDetails = (pet) => {
    const petDetailsModal = document.getElementById('petDetailsModal');
    const petDetailsContent = document.getElementById('petDetailsContent');
    petDetailsContent.innerHTML = `
            <figure class="rounded-lg">
                    <img src="${pet.image ? pet.image : "Not Available"}" alt="" class="petImg w-full" />
                </figure>
                <div class="card-body p-0 mb-2.5 mt-6">
                    <h4 class="text-xl">${pet.name ? pet.name : "Mister Tartosh"}</h4>
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
                                <p>Price: ${pet.price ? pet.price + " $" : "Not Available"}</p>
                        </li>
                    </ul>
                    <div class="">
                        <h3 class="text-base font-semibold">Details Information</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout.
                            The point of using is that it has a more-or-less normal distribution of letters, as opposed to
                            using.</p>
                    </div>
                </div>
                <div class="modal-action block">
                    <button class="btn border block w-full bg-[#0E7A81]/20 hover:bg-[#bed6d8] text-[#0E7A81] outline-none" onclick="petDetailsModal.close()">Close</button>
                </div>
        `;
    petDetailsModal.showModal();
}
