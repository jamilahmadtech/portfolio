function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gray-800 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-400">
            Interested in working together? Feel free to get in touch.
            I am always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-8">

            <h3 className="text-2xl font-bold text-white">
              Let's work together
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Whether you have a project in mind, a job opportunity,
              or simply want to connect, you can reach me through
              the contact information below.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:jamilahmadx@gmail.com"
                  className="mt-1 inline-block text-gray-200 transition hover:text-blue-500"
                >
                  jamilahmadx@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Phone
                </p>

                <a
                  href="#"
                  className="mt-1 inline-block text-gray-200 transition hover:text-blue-500"
                >
                  +963933187031
                </a>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-gray-700 bg-gray-900 p-8">

            <div className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/10 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact