const steps = [
  { step: '1', title: 'Record', body: 'Start a secure recording on web or mobile.' },
  { step: '2', title: 'Recap', body: 'AI creates a structured summary with actions and highlights.' },
  { step: '3', title: 'Share', body: 'Send to clients or export to your tools.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl bg-[#E4F5EC] p-6 ring-1 ring-[#7CC79F]/40">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7CC79F] text-white font-semibold">
                  {s.step}
                </div>
                <h3 className="mt-3 font-semibold text-[#1A3C34]">{s.title}</h3>
                <p className="mt-1 text-sm text-[#6B7280]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
