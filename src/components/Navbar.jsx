import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Jamil<span className="text-blue-500">Ahmad</span>
        </a>

        
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-blue-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700"
          >
            Let's Talk
          </a>
        </div>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-2xl text-gray-200 transition hover:bg-gray-800 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      
      <div
        className={`border-t border-gray-800 bg-gray-950 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-gray-800 py-4 text-gray-300 transition-colors hover:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar