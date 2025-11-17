const benefits = [
  { title: 'Be fully present', body: 'Forget about taking notes mid-session. Stay focused on your coachee.' },
  { title: 'Clarity every time', body: 'Deliver structured recaps with goals, actions, and insights.' },
  { title: 'Progress over time', body: 'Track themes and outcomes across sessions for measurable growth.' },
  { title: 'Client alignment', body: 'Share highlights and next steps so everyone stays on track.' },
]

export default function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3C34]">Coachee Benefits</h2>
            <p className="mt-2 text-[#6B7280] max-w-xl">A better experience for clients and cohorts with clarity, alignment, and accountability after every session.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl bg-[#F9FAF9] p-6 ring-1 ring-gray-200">
                <h3 className="font-semibold text-[#1A3C34]">{b.title}</h3>
                <p className="mt-2 text-[#6B7280] text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
