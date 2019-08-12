import loadImage from "./loadImagePromised.js"
const addImg = src => {
    const imgElement = document.createElement("img")
    imgElement.src = src;

    document.body.appendChild(imgElement)
}

Promise.all([
    loadImage("images/cat2.jpg"),
    loadImage("images/cat1.jpg"),
    loadImage("images/cat2.jpg"),
    loadImage("images/cat1.jpg")
]).then((images) => {
    images.forEach(img => {
        addImg(img.src);
    });
})
