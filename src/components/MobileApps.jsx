export default function MobileApps() {
  return (
    <section className="bg-[#F9FAF9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3C34]">Record anywhere</h2>
            <p className="mt-2 text-[#6B7280] max-w-xl">Native mobile apps for on-the-go sessions. Syncs instantly to the web dashboard.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white text-sm">
                 Download on the App Store
              </a>
              <a href="#" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white text-sm">
                ▶ Get it on Google Play
              </a>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-md bg-[#E4F5EC] flex items-center justify-center text-[#1A3C34]">
              Mobile app preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
