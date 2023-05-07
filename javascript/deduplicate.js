const list = [
  'Astro',
  'CSS',
  'Docusaurus',
  'Gatsby',
  'HTML',
  'JavaScript',
  'Naive UI',
  'Next.js',
  'Node.js',
  'Nuxt.js',
  'PostgreSQL',
  'Prisma',
  'React',
  'SCSS',
  'TailwindCSS',
  'TypeScript',
  'Vite',
  'Vue',
  'Astro',
  'Front-end Engineering',
  'Git',
  'JavaScript',
  'PC',
  'SVG',
  'TypeScript',
  'Vite'
]

const filteredList = [...new Set(list)]

console.log(filteredList.sort((a, b) => a.localeCompare(b)))
