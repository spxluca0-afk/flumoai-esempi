# pip install openai
import os
from openai import OpenAI

client = OpenAI(base_url="https://flumo24studios.com/api/v1", api_key=os.environ["FLUMOAI_KEY"])

flusso = client.chat.completions.create(
    model="flumoai-1",
    messages=[
        {"role": "system", "content": "Rispondi come un tutor di informatica paziente."},
        {"role": "user", "content": "Cos'è una variabile in Python?"},
    ],
    stream=True,
)
for pezzo in flusso:
    print(pezzo.choices[0].delta.content or "", end="", flush=True)
print()
