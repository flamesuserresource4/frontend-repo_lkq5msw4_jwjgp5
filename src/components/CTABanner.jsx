export default function CTABanner() {
  return (
    <section className="bg-white" id="signup">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-[#1A3C34] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Start for free</h3>
            <p className="mt-1 text-white/80">No credit card required. Upgrade anytime.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-[#1A3C34] font-semibold shadow-sm hover:opacity-90">Create Account</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#7CC79F] px-5 py-3 text-white font-semibold shadow-sm hover:brightness-95">Talk to Sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
