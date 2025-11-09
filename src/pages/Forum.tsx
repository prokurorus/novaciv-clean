
import React from 'react'
import { useLang } from '@/hooks/useLang'

export default function Forum() {
  const { t } = useLang()
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{t('forum.title')}</h1>
      <p className="text-gray-600">{t('forum.subtitle')}</p>
      <div className="rounded-xl border border-gray-200 p-6">
        <p className="text-gray-500">{t('forum.placeholder')}</p>
      </div>
    </div>
  )
}
