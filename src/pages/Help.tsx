import React from "react";

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">Связаться с NovaCiv</h1>
      <p className="text-sm text-gray-500 mb-8">Опиши, чем ты хочешь помочь или какой вопрос у тебя есть.</p>

      <form
        name="help"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="help" />
        <p className="hidden">
          <label>
            Не заполнять: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="block text-sm mb-1">Имя</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Руслан"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Роль/номер</label>
          <input
            name="role"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="например: дизайнер / разработчик / 1"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Сообщение</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Коротко и по делу…"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 shadow-sm hover:bg-gray-50"
        >
          Отправить
        </button>
      </form>
    </main>
  );
}
