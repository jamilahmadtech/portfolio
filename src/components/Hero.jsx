function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gray-900 px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

        
        <div>
          <p className="mb-4 text-lg font-medium text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Jamil Ahmad
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, responsive, and scalable web applications
            with a focus on clean code, user experience, and reliable
            software solutions.
          </p>

          
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full border border-gray-700 bg-gray-800 shadow-2xl shadow-blue-500/5 md:h-96 md:w-96">
            <span className="text-6xl font-bold text-blue-500 md:text-8xl">
              Jamil
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero