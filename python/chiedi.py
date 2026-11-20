import os
import requests

URL = "https://flumo24studios.com/api/v1/chiedi"
CHIAVE = os.environ["FLUMOAI_KEY"]


def chiedi(domanda, **altro):
    r = requests.post(
        URL,
        headers={"Authorization": f"Bearer {CHIAVE}"},
        json={"domanda": domanda, **altro},
        timeout=120,
    )
    if r.status_code == 429:
        raise SystemExit("Limite raggiunto, riprova tra poco: " + r.json().get("errore", ""))
    r.raise_for_status()
    return r.json()


if __name__ == "__main__":
    risposta = chiedi("Qual è la differenza tra HTTP e HTTPS?", lunghezza="breve")
    print(risposta["risposta"])
    print("-- ha risposto", risposta["modello"])
