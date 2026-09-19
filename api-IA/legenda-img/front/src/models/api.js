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
        body: JSON.stringify({"text": captionENG[0]["generated_text"]})
    }).then(
        res => res.json() 
    );
}

async function convertToAudio(captionENG) {
    return fetch("http://localhost:3000/text-to-audio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"text": captionPTBR[0]["translation_text"]})
    }).then(
        res => res.json() 
    );
}

export {generateCaption, translate, convertToAudio};