
import React, { useEffect, useState } from 'react'

export function TextLoader({ file }: { file: string }) {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetch(`/${file}?v=${Date.now()}`)
      .then(r => r.ok ? r.text() : Promise.reject(new Error(String(r.status))))
      .then(setText)
      .catch(() => setText(''))
  }, [file])

  if (!text) {
    return (
      <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 whitespace-pre-wrap">
        Текст не найден. Загрузите точный файл в папку /public/txt и обновите страницу.
      </div>
    )
  }

  return (
    <article className="prose max-w-none whitespace-pre-wrap text-justify">{text}</article>
  )
}
