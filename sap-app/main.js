const searchBar = document.querySelector('input')
const submitBtn = document.querySelector('button')

submitBtn.addEventListener('click', showPet)

function showPet() {
    if(searchBar.value){
        populatePage()
    }else{
        alert('You didn\'t enter anything!')
    }
}

async function populatePage() {
    const userPet = searchBar.value
    const url = `/pets/${userPet}`
    const res = await fetch(url)
    const petObj = await res.json()

    const searchCard = document.querySelector('#search-card')
    const petCard = document.querySelector('#pet-card')

    searchCard.classList.add('hidden')
    petCard.classList.remove('hidden')

    document.querySelector('#pet-name').innerText = petObj.name
    document.querySelector('#pet-atk').innerText = petObj.attack
    document.querySelector('#pet-health').innerText = petObj.health
}