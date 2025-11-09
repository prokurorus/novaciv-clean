
import React from 'react'
import { useLang } from '@/hooks/useLang'
import { TextLoader } from '@/components/TextLoader'

export default function Home() {
  const { lang, t } = useLang()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{t('manifest.title')}</h1>
      <p className="text-gray-600">{t('manifest.subtitle')}</p>
      <TextLoader file={`txt/Manifest-${lang}.txt`} />
    </div>
  )
}
