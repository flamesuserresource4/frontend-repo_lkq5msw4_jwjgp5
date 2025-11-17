import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Compliance from './components/Compliance'
import HowItWorks from './components/HowItWorks'
import MobileApps from './components/MobileApps'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F9FAF9] text-gray-900">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <Compliance />
      <HowItWorks />
      <MobileApps />
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {["Starter", "Pro", "Team"].map((tier, idx) => (
              <div key={tier} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#1A3C34]">{tier}</h3>
                <p className="mt-1 text-sm text-[#6B7280]">Great for {idx === 0 ? 'solo coaches' : idx === 1 ? 'growing practices' : 'teams & orgs'}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#1A3C34]">${idx === 0 ? '0' : idx === 1 ? '29' : '79'}</span>
                  <span className="text-[#6B7280] text-sm">/mo</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
                  <li>Unlimited summaries</li>
                  <li>Audio transcription</li>
                  <li>Shareable recaps</li>
                </ul>
                <a href="#signup" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#7CC79F] px-4 py-2 text-white font-semibold hover:brightness-95">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App
