import express from 'express'
import crypto from 'node:crypto'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDirectory = path.join(__dirname, 'data')
const enquiriesFile = path.join(dataDirectory, 'enquiries.json')

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5175' }))
app.use(express.json({ limit: '20kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many enquiries from this connection. Please try again later.' }
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'DeltaCode API' })
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, service, message } = req.body || {}
    if (
      typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80 ||
      typeof email !== 'string' || email.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof service !== 'string' || service.length > 80 ||
      typeof message !== 'string' || message.trim().length < 10 || message.length > 2000
    ) {
      return res.status(400).json({ message: 'Please check your details and try again.' })
    }

    await fs.mkdir(dataDirectory, { recursive: true })
    let enquiries = []
    try {
      enquiries = JSON.parse(await fs.readFile(enquiriesFile, 'utf8'))
      if (!Array.isArray(enquiries)) enquiries = []
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }

    enquiries.push({
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      service: service.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    })

    await fs.writeFile(enquiriesFile, JSON.stringify(enquiries, null, 2), { mode: 0o600 })
    return res.status(201).json({ message: 'Enquiry received successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ message: 'Server error. Please try again later.' })
  }
})

app.get("/", (req, res) => {
    res.send("Welcome to DeltaCode API 🚀");

});
app.listen(PORT, () => {
    console.log(`DeltaCode API running at http://localhost:${PORT}`);
});

