#!/usr/bin/env bash
# Prima: export FLUMOAI_KEY="fa1_..."
URL=https://flumo24studios.com/api/v1/chiedi

# una domanda secca
curl -s $URL -H "Authorization: Bearer $FLUMOAI_KEY" -H "Content-Type: application/json" \
  -d '{"domanda": "Scrivi uno slogan per una pizzeria di Roma"}'
echo

# conversazione con istruzioni
curl -s $URL -H "Authorization: Bearer $FLUMOAI_KEY" -H "Content-Type: application/json" -d '{
  "istruzioni": "Sei l assistente di una palestra. Risposte brevi.",
  "messaggi": [
    {"role": "user", "content": "A che ora aprite il sabato?"},
    {"role": "assistant", "content": "Il sabato apriamo alle 9."},
    {"role": "user", "content": "E la domenica?"}
  ]
}'
echo

# risposta in JSON
curl -s $URL -H "Authorization: Bearer $FLUMOAI_KEY" -H "Content-Type: application/json" \
  -d '{"domanda": "3 idee di post per un barbiere, con titolo e testo", "formato": "json"}'
echo

# streaming: arrivano pezzi "data: {...}" fino a "data: [FINE]"
curl -sN $URL -H "Authorization: Bearer $FLUMOAI_KEY" -H "Content-Type: application/json" \
  -d '{"domanda": "Spiegami cos e una CDN in tre righe", "stream": true}'
