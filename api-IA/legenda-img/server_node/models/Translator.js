
class Translator {
    static translator = null;

    static async getTranslator() {
        if(this.translator === null) {
            const { pipeline } = await import("@huggingface/transformers");

            this.translator = await pipeline("translation",
                "Xenova/nllb-200-distilled-600M",
                {dtype: "q8", device: "wasm"});
        }
        return this.translator;
    }
    static async translate(captionENG) {
        return this.getTranslator(captionENG).then((translator) => 
            translator(captionENG, {src_lang: "eng_Latn", tgt_lang: "por_Latn"})
        );
    }
}

exports.Translator = Translator;
