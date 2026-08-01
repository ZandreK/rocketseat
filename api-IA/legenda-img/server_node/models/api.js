const { Translator } = require('./Translator');

function translate(captionENG) {
    return Translator.traslate(captionENG);
}

exports.translate = translate;