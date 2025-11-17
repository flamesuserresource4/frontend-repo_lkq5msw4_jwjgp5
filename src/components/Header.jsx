import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Login', href: '#login' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-[#E4F5EC] flex items-center justify-center ring-1 ring-[#7CC79F]/30">
              <div className="h-4 w-4 rounded-sm bg-[#7CC79F]"></div>
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-[#1A3C34] group-hover:opacity-90">Coach Recap</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#1A3C34] transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="ml-2 inline-flex items-center rounded-full bg-[#7CC79F] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#7CC79F]/20 hover:brightness-95 transition"
            >
              Create Account
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-lg border border-gray-200 p-2 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#signup"
                className="rounded-md px-3 py-2 bg-[#7CC79F] text-white text-center font-medium"
                onClick={() => setOpen(false)}
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
