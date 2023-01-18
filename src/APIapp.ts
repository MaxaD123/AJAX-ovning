const url = "https://dog.ceo/api/breeds/image/random"
const dogPic = document.querySelector(".dogPic") as HTMLElement;

let button = document.querySelector(".newDog") as HTMLElement;
button.addEventListener("click", (event) => {
    event.preventDefault();
    dogPic.innerHTML = "";
    
    
    const k = fetch(url)
    k.then(response => {
        return response.json();
        
    }).then(data => {
        const dogPicURL = document.createElement("section");
        dogPicURL.id = "NewDogPic";
        dogPic.append(dogPicURL);
        dogPicURL.innerHTML = `<img src="${data.image}" alt="">`
    })
    
});











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