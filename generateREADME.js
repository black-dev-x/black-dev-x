let cards = []
let output = ""

const g = (name, link, title) => {
  const card = {}
  card.name = name
  card.link = link
  card.title = title
  cards.push(card)
}

const h3 = (text) => {
  output += `### ${text}\n`
}

const link = (text, link) => {
  output += `- [${text}](${link})\n`
}

const makeTable = () => {
  const titles = cards.reduce((acc, card) => acc + `${card.name}|`, "|")
  const spaces = cards.reduce((acc, card) => acc + `-|`, "|")
  const links = cards.reduce((acc, card) => acc + `<img href="${card.link}" title="${card.title ?  card.title : card.name}" width="80" height="80"/>|`, "|")
  cards = []
  output += `${titles}\n${spaces}\n${links}\n`
}

g("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg")
g("Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")
g("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")
g("Python", "ttps://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg")
g("C++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg")
g("Processing", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/processing/processing-original-wordmark.svg")
g("GoLang", "")
makeTable()

g("AWS", "")
g("GCP", "")
g("Docker", "")
g("Prefect", "")
g(":octocat: Actions", "", "Github Actions")
makeTable()

g("Node", "")
g("Spring", "")
g("FastApi", "")
g("Express", "")
makeTable()

g("Firebase", "")
g("MongoDB", "")
g("PostgreSQL", "")
g("MySQL", "")
makeTable()

g("React", "")
g("Angular", "")
g("Vue", "")
g("Axios", "")
g("Electron", "")
makeTable()

g("HTML", "")
g("CSS", "")
g("Less", "")
g("Sass", "")
g("Bootstrap", "")
g("JQuery", "")
g("Figma", "")
makeTable()

g("Git", "")
g("Github", "")
g("Gitlab", "")
g("Bitbucket", "")
makeTable()

g("Raylib", "")
g("Biopython", "")
g("Streamlit", "")
makeTable()

g("VSCode", "")
g("Anaconda", "")
g("Eclipse", "")
g("Chrome", "")
g("Insomnia", "")
g("Jupyter", "")
makeTable()

g("Jest", "")
g("Junit", "")
makeTable()

h3("Some Links")
link("Alura", "https://cursos.alura.com.br/user/thauroo")
link("Pluralsight", "https://app.pluralsight.com/profile/black-devx")
link("Codewars", "https://www.codewars.com/users/Devxgen")
link("Udemy", "https://www.udemy.com/user/thiago-rodrigues-52/")
link("LinkedIn", "https://www.linkedin.com/in/thiago-dx/")

console.log(output)
