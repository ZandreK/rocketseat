from transformers import AutoProcessor, BarkModel

model_name = "suno/bark-small"

processor = AutoProcessor.from_pretrained(model_name)
model = BarkModel.from_pretrained(model_name)

def pipeline(model_name):
    processor = AutoProcessor.from_pretrained(model_name)   #caixa do processador
    model = BarkModel.from_pretrained(model_name)           # modelo de audio
    model = model.to_bettertransformers()                   #transforma o modelo para melhor performance
    sample_rate = model.generation_config.sample_rate        # taxa de amostragem do audio

    def pipe(text): #recebendo o imput
        model_input = processor(text, voice_prompt="v2/pt_speaker_8") # liga o input com o processador
        audio = model.generate(**model_input)                         # liga o processador com o modelo de audio
        return audio, sample_rate                                             # output do modelo de audio

    return pipe

class TextToAudio:
    def __init__(self):
        model_name = "suno/bark-small"
        self.pipe = pipeline(model_name)


    def convert(self, text):
        return self.pipe(text)