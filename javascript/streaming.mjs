// le parole arrivano mentre il modello scrive
const r = await fetch('https://flumo24studios.com/api/v1/chiedi', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.FLUMOAI_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ domanda: 'Raccontami in breve la storia del Colosseo', stream: true }),
})

const dec = new TextDecoder()
let resto = ''
for await (const pezzo of r.body) {
  resto += dec.decode(pezzo, { stream: true })
  const eventi = resto.split('\n\n')
  resto = eventi.pop()
  for (const e of eventi) {
    const dati = e.replace(/^data: /, '')
    if (dati === '[FINE]') continue
    process.stdout.write(JSON.parse(dati).testo ?? '')
  }
}
console.log()
