export default function(onclick) {
  const button = document.createElement('button')
  button.innerText = 'Click Me'
  button.setAttribute('type', 'button')
  if (typeof onclick === 'function') {
    button.onclick = onclick
  } else {
    button.addEventListener('click', () => {
      alert('Welcome to Webpack!')
    })
  }
  return button
}