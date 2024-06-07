

const g = (name, link, title) => {
  const card = {}
  card.name = name
  card.link = link
  card.title = title
  cards.push(card)
}

const makeTable = () => {
  const titles = cards.reduce((acc, card) => acc + `${card.name}|`, "|")
  const spaces = cards.reduce((acc, card) => acc + `-|`, "|")
  const links = cards.reduce((acc, card) => acc + `<img ${card.link} title="${card.title ?  card.title : card.name}" width="80" height="80"/>|`, "|")
  return `${titles}\n${spaces}\n${links}`
}

g("Java", "")
g("Javascript", "")
g("TypeScript", "")
g("Python", "")
g("C++", "")
g("Processing", "")
g("GoLang", "")

g("AWS", "")
g("GCP", "")
g("Docker", "")
g("Prefect", "")
g(":octocat: Actions", "", "Github Actions")

g("Node", "")
g("Spring", "")
g("FastApi", "")
g("Express", "")

g("Firebase", "")
g("MongoDB", "")
g("PostgreSQL", "")
g("MySQL", "")
