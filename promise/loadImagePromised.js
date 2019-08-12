const loagImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve(image);
        }

        image.onerror = () => {
            const message = "Could not load image at " + url;
            reject(new Error(msg));
        }

        image.src = url;
    })


}
export default loagImage;

