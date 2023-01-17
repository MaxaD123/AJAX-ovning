var url = "https://dog.ceo/api/breeds/image/random";
var dogPic = document.querySelector(".dogPic");
var button = document.querySelector(".newDog");
button.addEventListener("click", function (event) {
    event.preventDefault();
    dogPic.innerHTML = "";
    var k = fetch(url);
    k.then(function (response) {
        return response.json();
    }).then(function (Image) {
        var dogPicURL = document.createElement("section");
        dogPicURL.id = "NewDogPic";
        dogPic.append(dogPicURL);
        dogPicURL.innerHTML = "".concat(Image.image);
    });
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
