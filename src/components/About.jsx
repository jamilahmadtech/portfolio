function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_0.6fr]">

          <div className="space-y-6">
            <p className="text-lg leading-8 text-gray-300">
              I am a Full-Stack Developer interested in building modern,
              responsive, and user-focused web applications. I enjoy working
              across both frontend and backend development, from designing
              intuitive interfaces to developing server-side functionality
              and working with databases.
            </p>

            <p className="text-lg leading-8 text-gray-300">
              My approach to development focuses on writing clean,
              maintainable code and creating applications that are reliable,
              responsive, and easy to use. I continuously work on improving
              my technical skills and learning new technologies to solve
              development problems effectively.
            </p>

            <p className="text-lg leading-8 text-gray-300">
              I am particularly interested in projects where I can combine
              frontend development, backend programming, database management,
              and modern development tools to build complete solutions.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white">
              Development Focus
            </h3>

            <div className="mt-6 space-y-5">

              <div className="border-l-2 border-blue-500 pl-4">
                <p className="font-semibold text-white">
                  Frontend Development
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Responsive and user-focused interfaces.
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <p className="font-semibold text-white">
                  Backend Development
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Server-side applications and APIs.
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <p className="font-semibold text-white">
                  Database Development
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Structured data and database integration.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About