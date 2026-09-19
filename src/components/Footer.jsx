function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-gray-500">
          © 2026 Jamil Ahmad. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#about"
                className="text-sm text-gray-500 transition hover:text-blue-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-sm text-gray-500 transition hover:text-blue-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm text-gray-500 transition hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  )
}

export default Footer