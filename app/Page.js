import React, { useState } from 'react'
import axios from 'axios'

export default function HomePage() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    const res = await axios.post('/api/generate', { topic })
    setResult(res.data.result)
    setLoading(false)
  }

  return (
    <main style={{ padding: '2rem', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>StudyGPT</h1>
      <p>Gib dein Thema ein und erhalte einen KI-generierten Lernplan:</p>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Thema eingeben"
        style={{ width: '100%', padding: '0.5rem', margin: '1rem 0', fontSize: '1rem' }}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generieren...' : 'Erstellen'}
      </button>
      {result && (
        <pre style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{result}</pre>
      )}
    </main>
  )
}
