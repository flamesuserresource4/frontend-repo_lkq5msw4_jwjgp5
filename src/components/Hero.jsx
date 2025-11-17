export default function Hero() {
  return (
    <section className="bg-[#F9FAF9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#E4F5EC] px-3 py-1 text-xs font-medium text-[#1A3C34] ring-1 ring-[#29B475]/30">
              AI coaching assistant
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A3C34]">
              Elevate Your Coaching Sessions With AI-Powered Summaries
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#6B7280] max-w-xl">
              Coach Recap records, summarizes, and organizes your sessions so you can focus on impact, not paperwork.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="inline-flex items-center justify-center rounded-full bg-[#29B475] px-6 py-3 text-white font-semibold shadow-sm shadow-[#29B475]/25 hover:brightness-95 transition">
                Start For Free
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[#1A3C34] font-semibold ring-1 ring-gray-200 hover:bg-gray-50 transition">
                Request Demo
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-gray-500 text-sm">
              <div className="h-8 w-8 rounded-full bg-[#29B475] ring-1 ring-[#29B475]/30 flex items-center justify-center text-white">★</div>
              <div className="h-8 w-8 rounded-full bg-[#29B475] ring-1 ring-[#29B475]/30 flex items-center justify-center text-white">★</div>
              <div className="h-8 w-8 rounded-full bg-[#29B475] ring-1 ring-[#29B475]/30 flex items-center justify-center text-white">★</div>
              <span className="ml-2">Trusted by executive and wellness coaches</span>
            </div>
          </div>

          <div>
            <div className="relative rounded-xl border border-[#29B475]/40 bg-white p-2 shadow-sm">
              <div className="rounded-lg bg-[#E4F5EC] p-2">
                <div className="aspect-[16/10] w-full rounded-md bg-white ring-1 ring-[#29B475]/30 p-4 grid grid-rows-[auto,1fr] gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#29B475]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#29B475]/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#29B475]/40" />
                  </div>
                  <div className="grid lg:grid-cols-5 gap-4 h-full">
                    <div className="lg:col-span-3 rounded-lg border border-gray-200 p-4">
                      <div className="h-4 w-24 bg-[#E4F5EC] rounded mb-3" />
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-100 rounded" />
                        <div className="h-3 w-11/12 bg-gray-100 rounded" />
                        <div className="h-3 w-10/12 bg-gray-100 rounded" />
                        <div className="h-3 w-9/12 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="lg:col-span-2 rounded-lg border border-gray-200 p-4 bg-[#F9FAF9]">
                      <div className="h-4 w-28 bg-[#E4F5EC] rounded mb-3" />
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-100 rounded" />
                        <div className="h-3 w-10/12 bg-gray-100 rounded" />
                        <div className="h-3 w-9/12 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">Product UI preview — framed in mint for clarity</p>
          </div>
        </div>
      </div>
    </section>
  )
}
