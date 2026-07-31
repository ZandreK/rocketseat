import { pipeline } from "@huggingface/transformers"

export default class ImageCaptioner {
    static captioner = null;

    static async getCaptioner() {
        console.log("Getting captioner...");
        if(this.captioner === null) {
            console.log("Creating captioner...");
            this.captioner = await pipeline("image-to-text", "Xenova/vit-gpt2-image-captioning",{dtype: "fp32", divice: "wasm"});
            console.log("Captioner created!");
        }    
        return this.captioner;
    }
    
    static generateCaption(imageSrc) {
        return "Legenda do modelo";
    }
}