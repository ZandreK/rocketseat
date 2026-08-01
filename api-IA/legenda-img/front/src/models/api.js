import ImageCaptioner from './ImageCaptioner';

async function generateCaption(imageSrc) {
    ImageCaptioner.getCaptioner();
    return ImageCaptioner.generateCaption(imageSrc);
}

async function translate(captionENG) {
    return fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({captionENG})
    }).then(
        res => res.json() 
    );
}

export {generateCaption, translate};