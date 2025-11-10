
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

      <form name="help-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="help-contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" onChange={() => {}} /></label>
        </p>

        <div>
          <label className="block text-sm mb-1">{t('help.name')}</label>
          <input name="name" required className="w-full border border-gray-300 rounded-lg px-3 py-2"
                 value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
        </div>

        <div>
          <label className="block text-sm mb-1">{t('help.email')}</label>
          <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2"
                 value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
        </div>

        <div>
          <label className="block text-sm mb-1">{t('help.role')}</label>
          <input name="roles" placeholder={t('help.role_ph')} className="w-full border border-gray-300 rounded-lg px-3 py-2"
                 value={form.roles} onChange={(e)=>setForm({...form, roles:e.target.value})} />
          <p className="text-xs text-gray-500 mt-1">{t('help.role_hint')}</p>
        </div>

        <div>
          <label className="block text-sm mb-1">{t('help.message')}</label>
          <textarea name="message" rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
        </div>

        <button type="submit" disabled={busy} className="px-4 py-2 rounded-xl bg-gray-900 text-white disabled:opacity-60">
          {t('help.send')}
        </button>
      </form>
    </div>
  )
}
