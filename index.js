
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const res = await axios.post('/api/generate', { topic })
    setResult(res.data.result)
    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>StudyGPT</title>
      </Head>
      <h1>StudyGPT</h1>
      <p>Gib ein Thema ein und erhalte einen Lernplan mit Karteikarten und Testfragen:</p>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="z.B. Photosynthese" />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generiert...' : 'Erstellen'}
      </button>
      <pre>{result}</pre>
    </div>
  )
}
