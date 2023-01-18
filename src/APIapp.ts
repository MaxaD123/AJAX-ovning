

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





// import axios from 'axios';

//       async function getRandomDogImages() {
//         try {
//           const promises = [1, 2, 3].map(async () => {
//             const response = await axios.get('https://dog.ceo/api/breeds/image/random');
//             return response.data.message;
//           });
//           const imageUrls = await Promise.all(promises);
//           const dogImages = [
//             document.getElementById('.dog-image-1'),
//             document.getElementById('.dog-image-2'),
//             document.getElementById('.dog-image-3'),
//           ];
//           dogImages.forEach((img, index) => {
//             img.src = imageUrls[index];
//           });
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       const newImagesButton = document.getElementById('.new-images-button');
//       newImagesButton.addEventListener('click', getRandomDogImages);

//       // Call the function to get the first images on page load
//       getRandomDogImages();






















//const url = "https://dog.ceo/api/breeds/image/random"
// const dogBtn = document.querySelector(".newDog") as HTMLElement;
// dogBtn.addEventListener('click') => {
// async function dogs() {
//     const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
//     const data = await response.json();

//     let dogPiCCes = document.querySelector('.dogPic') as HTMLElement;
//     dogPiCCes.innerHTML = ""
//     data.data.image((Obj: any) => {
//       dogPiCCes.innerHTML+= `<div><img src="${Obj.image}" alt="">`
//     })
//     return data;
// }}







//let button = document.querySelector(".newDog") as HTMLElement;
//button.addEventListener("click", (event) => {
  //  event.preventDefault();
    //dogPic.innerHTML = "";
    
    
    //const k = fetch(url)
//    k.then(response => {
  //      return response.json();
        
//    })
 //   k.then.(piccen => {
   //     const dogPicURL = document.createElement("img");
     //   dogPicURL.id = "NewDogPic";
       // dogPic.append(dogPicURL);
       // dogPicURL.innerHTML = `<img src="${piccen.image}" alt="">`;
   // })
    
//});

//const k = fetch(url)
//k.then(response => {
//    return response.json();
//}).then(Doggos => {
//    DoggoDisplay(Doggos)
//});

//console.log("hit? 2")

//function DoggoDisplay(dogs: any){
  //  let button = document.querySelector("newDog") as HTMLElement;
    //button.addEventListener("click", (event) => {
        
      //  })
   // })
//}