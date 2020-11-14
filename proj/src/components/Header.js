export default function(clazz) {
  const header = document.createElement('h1')
  header.innerText = 'Hello Webpack'
  header.classList.add('bg-graph')
  if (typeof clazz === 'string' && clazz) {
    header.classList.add(clazz)
  }
  return header
}