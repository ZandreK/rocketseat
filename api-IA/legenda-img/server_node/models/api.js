const { Translator } = require('./Translator');

async function translate(captionENG) {
    return Translator.traslate(captionENG);
}

exports.translate = translate;