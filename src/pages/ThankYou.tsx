
import React from 'react'
import { useLang } from '@/hooks/useLang'

export default function ThankYou() {
  const { t } = useLang()
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-semibold">{t('thanks.title')}</h1>
      <p className="text-gray-600">{t('thanks.subtitle')}</p>
    </div>
  )
}
