//const url = "https://dog.ceo/api/breeds/image/random"
//const dogPic = document.querySelector(".dogPic") as HTMLElement;

async function dogs() {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();

    let dogPiCCes = document.querySelector('.dogPic') as HTMLElement;
    dogPiCCes.innerHTML = ""
    data.data.image((Obj: any) => {
      dogPiCCes.innerHTML+= `<div><img src="${Obj.image}" alt="">`
    })
    return data;
}

dogs();







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