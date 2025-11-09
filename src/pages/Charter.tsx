
import React from 'react'
import { useLang } from '@/hooks/useLang'
import { TextLoader } from '@/components/TextLoader'

export default function Charter() {
  const { lang, t } = useLang()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{t('charter.title')}</h1>
      <p className="text-gray-600">{t('charter.subtitle')}</p>
      <TextLoader file={`txt/Charter-${lang}.txt`} />
    </div>
  )
}
