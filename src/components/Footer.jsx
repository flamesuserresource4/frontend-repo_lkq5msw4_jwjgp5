export default function Footer() {
  return (
    <footer className="bg-[#F9FAF9]" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-[#E4F5EC] flex items-center justify-center ring-1 ring-[#29B475]/30">
                <div className="h-3.5 w-3.5 rounded-sm bg-[#29B475]"></div>
              </div>
              <span className="font-semibold text-[#1A3C34]">Coach Recap</span>
            </div>
            <p className="mt-3 text-[#6B7280] max-w-xs">AI-powered summaries so coaches can focus on people, not paperwork.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A3C34]">Product</h4>
            <ul className="mt-3 space-y-2 text-[#6B7280]">
              <li><a className="hover:text-[#1A3C34]" href="#features">Features</a></li>
              <li><a className="hover:text-[#1A3C34]" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-[#1A3C34]" href="#privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A3C34]">Company</h4>
            <ul className="mt-3 space-y-2 text-[#6B7280]">
              <li><a className="hover:text-[#1A3C34]" href="#contact">Contact</a></li>
              <li><a className="hover:text-[#1A3C34]" href="#">Blog</a></li>
              <li><a className="hover:text-[#1A3C34]" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A3C34]">Legal</h4>
            <ul className="mt-3 space-y-2 text-[#6B7280]">
              <li><a className="hover:text-[#1A3C34]" href="#">Terms</a></li>
              <li><a className="hover:text-[#1A3C34]" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-xs text-[#6B7280]">
          <p>© 2024 Devolve Studios. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1A3C34]">Twitter</a>
            <a href="#" className="hover:text-[#1A3C34]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
