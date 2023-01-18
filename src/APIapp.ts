

const cardsContainer = document.getElementById("cardsContainer")!;
const newDogsButton = document.getElementById("newDogsButton")!;

async function getRandomDogPhotos() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
    const data = await response.json();
    return data.message;
}

function createDogCard(url: any) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = url;
    img.alt = "A cute dog";

    card.appendChild(img);
    return card;
}

async function showDogs() {
    cardsContainer.innerHTML = "";
    const dogUrls = await getRandomDogPhotos();
    dogUrls.forEach((url: string) => {
        const card = createDogCard(url);
        cardsContainer.appendChild(card);
    });
}

newDogsButton.addEventListener("click", showDogs);
showDogs();

