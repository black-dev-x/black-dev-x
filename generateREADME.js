const fs = require('fs')

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
  const spaces = cards.reduce((acc, _) => acc + `-|`, "|")
  const links = cards.reduce((acc, card) => acc + `<img src="${card.link}" title="${card.title ?  card.title : card.name}" width="80" height="80"/>|`, "|")
  cards = []
  output += `${titles}\n${spaces}\n${links}\n\n`
}

h3("Languages")
g("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg")
g("Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")
g("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")
g("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg")
g("C++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg")
g("Processing", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/processing/processing-original-wordmark.svg")
g("GoLang", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg")
makeTable()

h3("DevOps")
g("AWS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg")
g("GCP", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg")
g("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg")
g("Prefect", "https://raw.githubusercontent.com/PrefectHQ/prefect/main/ui/src/assets/logos/prefect-logo-mark-gradient.svg")
g(":octocat: Actions", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", "Github Actions")
makeTable()

h3("Backend")
g("Node", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg")
g("Spring", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg")
g("FastApi", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg")
g("Express", "https://icon.icepanel.io/Technology/png-shadow-512/Express.png")
makeTable()

h3("Databases")
g("Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg")
g("MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg")
g("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg")
g("MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg")
makeTable()

h3("Frontend")
g("React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg")
g("Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg")
g("Vue", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg")
g("Axios", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg")
g("Electron", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg")
g("Vuex", "https://cdn.worldvectorlogo.com/logos/vuex-1.svg")
g("Redux", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg")
makeTable()

g("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg")
g("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg")
g("Less", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg")
g("Sass", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg")
g("Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg")
g("JQuery", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg")
g("Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg")
makeTable()

g("Router", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg")
makeTable()

h3("Versioning")
g("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg")
g("Github", "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png")
g("Gitlab", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg")
g("Bitbucket", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg")
makeTable()

h3("Tools")
g("VSCode", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg")
g("Anaconda", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg")
g("Eclipse", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg")
g("Chrome", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg")
g("Insomnia", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg")
g("Jupyter", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg")
makeTable()

h3("Testing")
g("Jest", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg")
g("Junit", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg")
makeTable()


h3("Others")
g("Kafka", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVa3Oi4m4gM8IrnBU-Ct0PwsXgCRe6cfLMhiLytNWjiL6B918z7OHnGrN3nshGU18WV3s&usqp=CAU")
g("Raylib", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Raylib_logo.png")
g("Biopython", "https://biopython.org/assets/images/biopython_logo_white.png")
g("Streamlit", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg")
makeTable()

h3("Some Links")
link("Alura", "https://cursos.alura.com.br/user/thauroo")
link("Pluralsight", "https://app.pluralsight.com/profile/black-devx")
link("Codewars", "https://www.codewars.com/users/Devxgen")
link("Udemy", "https://www.udemy.com/user/thiago-rodrigues-52/")
link("LinkedIn", "https://www.linkedin.com/in/thiago-dx/")

fs.writeFileSync('./README.md', output)
