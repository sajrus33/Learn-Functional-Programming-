import loadImage from "./loadImagePromised.js"
const addImg = src => {
    const imgElement = document.createElement("img")
    imgElement.src = src;

    document.body.appendChild(imgElement)
}

loadImage("images/cat1.jpg")
    .then((img1) => {
        addImg(img1.src)
    })

loadImage("images/cat2.jpg")
    .then((img2) => {
        addImg(img2.src)
    })