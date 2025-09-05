import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, company, tookMs } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' })
    }
    // Basic anti-spam: honeypot field must be empty and form must take > 3s
    if ((company && company.trim() !== '') || (typeof tookMs === 'number' && tookMs < 3000)) {
      return res.status(202).json({ ok: true })
    }
    // Removed reCAPTCHA verification per request
    let transporter
    if (process.env.USE_ETHEREAL === 'true') {
      const testAccount = await nodemailer.createTestAccount()
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass }
      })
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })
    }

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: subject ? `[Contact] ${subject}` : '[Contact] New message',
      replyTo: email,
      text: `From: ${name} <${email}>
Subject: ${subject || ''}

${message}`
    })
    const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null
    res.json({ ok: true, id: info.messageId, previewUrl })
  } catch (e) {
    console.error('Contact API error:', e && e.message ? e.message : e)
    res.status(500).json({ ok: false, error: 'Email send failed' })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Contact API listening on :${port}`))


