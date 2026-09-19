from scipy.io.wavfile import write


def save_audio(audio, sample_rate, file_id):     
    # Implement the logic to save the audio file
    # This is a placeholder implementation
    path = f"audio/{file_id}.wav"
    audio = audio.numpy().squeeze()  # Convert to numpy array if it's a tensor

    #salvar audio com o path
    wavfile.write(path, rate = sample_rate, data = audio)  # Assuming a sample rate of 16kHz