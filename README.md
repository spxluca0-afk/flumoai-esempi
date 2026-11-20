# FlumoAI · esempi per l'API

Esempi pronti da copiare per usare [FlumoAI-1](https://flumo24studios.com/flumoai/api), il modello di Flumo24 Studios, dalle tue app.

L'API è gratuita fino a 100 richieste al giorno. La chiave la crei dalla [dashboard](https://flumo24studios.com/flumoai/api/dashboard) dopo l'accesso con Google.

```bash
export FLUMOAI_KEY="fa1_..."
```

## Cosa c'è qui

| Cartella | Cosa fa |
| --- | --- |
| `curl/` | Le richieste base da terminale: domanda, conversazione, JSON, streaming |
| `python/` | Con `requests` e con l'SDK ufficiale di OpenAI |
| `javascript/` | Node 18+ con `fetch`, anche in streaming |

## Già usi l'SDK di OpenAI?

L'API accetta anche il formato di OpenAI. Cambi due righe e basta:

```python
import os
from openai import OpenAI

client = OpenAI(base_url="https://flumo24studios.com/api/v1", api_key=os.environ["FLUMOAI_KEY"])
```

Il modello si chiama `flumoai-1`. Funzionano `stream`, `response_format` (JSON) e `max_tokens`.

## Due regole

- La chiave sta sul tuo server, mai dentro una pagina web o un'app.
- Se mostri le risposte ai tuoi utenti, scrivi che le ha scritte un'intelligenza artificiale (AI Act, art. 50).

Documentazione completa: [flumo24studios.com/documentazione/flumoai-1](https://flumo24studios.com/documentazione/flumoai-1)
Misure del modello: [Benchmark Lab](https://flumo24studios.com/documentazione/benchmark)
