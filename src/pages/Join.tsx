
import React, { useEffect, useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { supabase } from '@/lib/supabase'

type CounterId = 'joined' | 'liked'

async function getValue(id: CounterId) {
  const { data, error } = await supabase
    .from('counters')
    .select('value')
    .eq('id', id)
    .single()
  if (error) return 0
  return Number(data?.value ?? 0)
}

async function inc(id: CounterId) {
  const { data, error } = await supabase.rpc('inc_counter', { counter_id: id })
  if (error) throw error
  return Number(data ?? 0)
}

export default function Join() {
  const { t } = useLang()
  const [joined, setJoined] = useState<number>(0)
  const [liked, setLiked] = useState<number>(0)
  const [busy, setBusy] = useState<CounterId | null>(null)
  const [ready, setReady] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      try {
        const [a, b] = await Promise.all([getValue('joined'), getValue('liked')])
        setJoined(a); setLiked(b)
      } catch {
        setReady(false)
      }
    })()
  }, [])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">{t('join.title')}</h1>
      <p className="text-gray-600">{t('join.subtitle')}</p>

      {!ready && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 text-amber-800 p-4">
          Supabase недоступен. Проверьте переменные окружения VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl shadow p-6 text-center">
          <div className="text-5xl font-bold">{joined}</div>
          <div className="mt-2 text-gray-500">{t('join.joined')}</div>
          <button
            className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white disabled:opacity-60"
            disabled={!!busy || !ready}
            onClick={async () => {
              try {
                setBusy('joined')
                const v = await inc('joined')
                setJoined(v)
              } finally {
                setBusy(null)
              }
            }}
          >
            {t('join.i_join')}
          </button>
        </div>

        <div className="rounded-2xl shadow p-6 text-center">
          <div className="text-5xl font-bold">{liked}</div>
          <div className="mt-2 text-gray-500">{t('join.liked')}</div>
          <button
            className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white disabled:opacity-60"
            disabled={!!busy || !ready}
            onClick={async () => {
              try {
                setBusy('liked')
                const v = await inc('liked')
                setLiked(v)
              } finally {
                setBusy(null)
              }
            }}
          >
            {t('join.i_like')}
          </button>
        </div>
      </div>
    </div>
  )
}
