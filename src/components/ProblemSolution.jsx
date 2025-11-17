const items = [
  {
    title: 'The Problem',
    body: 'Coaches juggle note-taking, action items, and follow-ups. Details get lost and insights are hard to track over time.'
  },
  {
    title: 'The Cost',
    body: 'Manual documentation burns hours weekly, reduces presence in sessions, and creates inconsistent client experiences.'
  },
  {
    title: 'The Solution',
    body: 'Coach Recap automatically records, summarizes, and organizes each session — delivering clean notes, highlights, and next steps.'
  }
]

export default function ProblemSolution() {
  return (
    <section className="bg-white" id="problem-solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-[#1A3C34]">{card.title}</h3>
              <p className="mt-2 text-[#6B7280] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
