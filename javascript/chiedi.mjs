// node chiedi.mjs  (Node 18 o più recente)
const URL = 'https://flumo24studios.com/api/v1/chiedi'
const chiave = process.env.FLUMOAI_KEY

const r = await fetch(URL, {
  method: 'POST',
  headers: { Authorization: `Bearer ${chiave}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ domanda: 'Dammi 3 nomi per un server Discord di cucina', formato: 'json' }),
})
if (!r.ok) throw new Error(`${r.status} ${(await r.json()).errore}`)
const { risposta, modello } = await r.json()
console.log(JSON.parse(risposta))
console.log('-- ha risposto', modello)
