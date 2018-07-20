import navsConfig from '../lib/nav.config.yml'

console.log(navsConfig)

const data = navsConfig['zh']['components']

export default data[0].items.map((item) => {
  console.log(item)
  return require(`../markdown/zh/${item.name.toLowerCase()}.md`)
})
