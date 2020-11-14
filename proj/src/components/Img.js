import logo from '../assets/imgs/logo.png'
export default function(src) {
    const container = document.createElement('div')
    const img = document.createElement('img')
    img.src = logo
    if (typeof src === 'string' && src) {
      img.src = src
    }
    container.append(img)
    container.classList.add('wd-100')
    return container
}