const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building modern and responsive user interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    description: 'Developing server-side applications and APIs.',
    skills: [
      'Python',
      'Django',
      'REST APIs',
    ],
  },
  {
    title: 'Database',
    description: 'Working with structured data and database systems.',
    skills: [
      'MySQL',
      'Database Design',
      'SQL',
    ],
  },
  {
    title: 'Tools & Other',
    description: 'Development tools and additional technologies.',
    skills: [
      'Git',
      'GitHub',
      'Responsive Design',
      'Flutter',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-gray-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            What I work with
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-400">
            Technologies and tools I use to design, develop, and build
            complete software solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-gray-700 bg-gray-800 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500" />

                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>
              </div>

              <p className="mt-4 min-h-\[\48px] text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-300"
                  >
                    <span className="mr-3 text-blue-500">
                      ▹
                    </span>

                    <span className="transition-colors duration-200 group-hover:text-gray-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills