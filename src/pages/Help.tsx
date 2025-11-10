
import React, { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useNavigate } from 'react-router-dom'

function encode(data) {
  return Object.keys(data).map((k) => encodeURIComponent(k)+'='+encodeURIComponent(data[k])).join('&')
}

export default function Help() {
  const { t } = useLang()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', roles:'', message:'' })
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setBusy(true); setErr(null)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'help-contact', ...form })
      })
      if (res.ok) navigate('/thank-you')
      else setErr('Ошибка отправки. Попробуйте позже.')
    } catch {
      setErr('Ошибка сети.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold">{t('help.title')}</h1>
      <p className="text-gray-600">{t('help.subtitle')}</p>

      {err && <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">{err}</div>}

<form
  name="help"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thank-you"
>
  <input type="hidden" name="form-name" value="help" />
  <p style={{ display: "none" }}>
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  <label>Имя<input name="name" required /></label>
  <label>Email<input type="email" name="email" required /></label>
  <label>Роль/номер<input name="role" /></label>
  <label>Сообщение<textarea name="message" required /></label>

  <button type="submit">Отправить</button>
</form>
    </div>
  )
}
