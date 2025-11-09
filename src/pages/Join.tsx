
import React, { useState } from 'react'
import { useLang } from '@/hooks/useLang'

export default function Join() {
  const { t } = useLang()
  const [joined, setJoined] = useState(0)
  const [liked, setLiked] = useState(0)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">{t('join.title')}</h1>
      <p className="text-gray-600">{t('join.subtitle')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl shadow p-6 text-center">
          <div className="text-5xl font-bold">{joined}</div>
          <div className="mt-2 text-gray-500">{t('join.joined')}</div>
          <button className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white" onClick={() => setJoined(v => v+1)}>
            {t('join.i_join')}
          </button>
        </div>
        <div className="rounded-2xl shadow p-6 text-center">
          <div className="text-5xl font-bold">{liked}</div>
          <div className="mt-2 text-gray-500">{t('join.liked')}</div>
          <button className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white" onClick={() => setLiked(v => v+1)}>
            {t('join.i_like')}
          </button>
        </div>
      </div>
    </div>
  )
}
