import { ShieldCheck, Globe2, Lock } from 'lucide-react'

export default function Compliance() {
  return (
    <section className="bg-[#F9FAF9]" id="privacy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3C34]">Supported Languages & Privacy</h2>
            <p className="mt-2 text-[#6B7280] max-w-xl">Transcription and summaries in 20+ languages. Data is encrypted at rest and in transit. We support GDPR, SOC 2, and HIPAA-compliant deployments.</p>
            <div className="mt-6 flex items-center gap-4 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#29B475] px-3 py-2 ring-1 ring-[#29B475]/40 shadow-sm">
                <Globe2 className="h-4 w-4 text-white" /> <span className="text-sm">20+ languages</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#29B475] px-3 py-2 ring-1 ring-[#29B475]/40 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-white" /> <span className="text-sm">GDPR/SOC2</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#29B475] px-3 py-2 ring-1 ring-[#29B475]/40 shadow-sm">
                <Lock className="h-4 w-4 text-white" /> <span className="text-sm">HIPAA options</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="grid gap-3 text-sm text-[#6B7280]">
              <div className="h-4 w-40 bg-[#E4F5EC] rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-11/12 bg-gray-100 rounded" />
              <div className="h-3 w-10/12 bg-gray-100 rounded" />
              <div className="h-3 w-9/12 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
