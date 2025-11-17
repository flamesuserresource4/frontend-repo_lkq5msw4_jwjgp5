import { Mic, FileText, Highlighter, Share2, BookText } from 'lucide-react'

const features = [
  { icon: Mic, title: 'Recording', body: 'Capture sessions securely with one click across web and mobile.' },
  { icon: FileText, title: 'Summaries', body: 'Receive structured notes with goals, actions, and insights.' },
  { icon: BookText, title: 'Transcripts', body: 'Searchable, accurate transcripts in multiple languages.' },
  { icon: Highlighter, title: 'Highlights', body: 'AI-detected moments, quotes, and decisions.' },
  { icon: Share2, title: 'Sharing', body: 'Send clean recaps to clients or export to your CRM.' },
]

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAF9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3C34]">Key Features</h2>
          <p className="mt-2 text-[#6B7280]">Everything you need to deliver consistent, high-quality coaching.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-[#E4F5EC] ring-1 ring-[#7CC79F]/40 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-[#1A3C34]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A3C34]">{title}</h3>
              <p className="mt-2 text-[#6B7280] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
