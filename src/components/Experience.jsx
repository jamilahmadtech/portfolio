const experience = [
  {
    period: '2025 — Present',
    title: 'Full-Stack Development',
    organization: 'Personal & Academic Projects',
    description:
      'Developing full-stack web applications using modern frontend and backend technologies, with a focus on responsive interfaces, server-side development, and database integration.',
  },
  {
    period: '2025',
    title: 'Web Development Projects',
    organization: 'Academic Projects',
    description:
      'Designed and developed web-based applications while applying frontend development, backend programming, database management, and software development principles.',
  },
]

const education = [
  {
    period: 'University',
    title: 'Bachelor’s Degree',
    organization: 'Computer Science / Software Engineering',
    description:
      'Studied software development, programming, databases, web technologies, and other areas of computer science.',
  },
]

function TimelineItem({ item }) {
  return (
    <article className="relative pl-10">

      <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-gray-900 bg-blue-500" />
      <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5">

        <p className="text-sm font-semibold text-blue-500">
          {item.period}
        </p>

        <h4 className="mt-2 text-xl font-bold text-white">
          {item.title}
        </h4>

        <p className="mt-1 font-medium text-gray-400">
          {item.organization}
        </p>

        <p className="mt-4 leading-7 text-gray-400">
          {item.description}
        </p>

      </div>
    </article>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-gray-900 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            My background
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Experience & Education
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-400">
            My academic background and development experience.
          </p>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-800" />

            <h3 className="text-xl font-bold text-white">
              Experience
            </h3>

            <div className="h-px flex-1 bg-gray-800" />
          </div>

          <div className="relative space-y-8 border-l-2 border-gray-800 ml-2">

            {experience.map((item) => (
              <TimelineItem
                key={`${item.period}-${item.title}`}
                item={item}
              />
            ))}

          </div>
        </div>

        <div className="mt-20">

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-800" />

            <h3 className="text-xl font-bold text-white">
              Education
            </h3>

            <div className="h-px flex-1 bg-gray-800" />
          </div>

          <div className="relative space-y-8 border-l-2 border-gray-800 ml-2">

            {education.map((item) => (
              <TimelineItem
                key={`${item.period}-${item.title}`}
                item={item}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience