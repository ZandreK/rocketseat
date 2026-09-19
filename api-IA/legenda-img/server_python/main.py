
from flask import Flask, request, send_from_directory
from flask_cors import cross_origin
from models.api import convert_text_to_audio

from utils import save_audio

import uuid 

app = Flask(__name__)

@app.route("/")
@cross_origin()
def hello():
    return "Hello"

@app.route("/text-to-audio", methods=["POST"]) # {"text": "texto para sintetização"}
@cross_origin()
def text_to_audio():
    # Implement your text-to-audio conversion logic here
    text =  request.json["text"]
    #gerar path
    file_id = uuid.uuid4()
    audio, sample_rate = convert_text_to_audio(text)

    save_audio(audio, sample_rate, file_id)

    #  chamar o modelo para sintetiar o audio
    # salvar o audio em um arquivo
    return [{"url":f"/audio/{file_id}.wav"}]


@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    # Implement your audio retrieval logic here
    return send_from_directory("audio", audio_file)