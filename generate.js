
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  const { topic } = req.body

  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Du bist ein Lerncoach. Generiere einen klaren Lernplan, 5 Karteikarten und 3 Multiple-Choice-Fragen zum Thema.'
      },
      {
        role: 'user',
        content: topic
      }
    ]
  })

  res.status(200).json({ result: completion.data.choices[0].message.content })
}
