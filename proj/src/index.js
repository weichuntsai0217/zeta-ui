import Header from './components/Header'
import Button from './components/Button'
import Img from './components/Img'
import Fonticon from './components/Fonticon'
import printme from './utils/printme'
import gear from './assets/imgs/gear.svg'
import outline from './assets/imgs/outline.gif'
import './assets/styles/main.css'

document.body.prepend(Button())
document.body.prepend(Header('cl-red'))
document.body.prepend(Img())
document.body.prepend(Img(gear))
document.body.prepend(Img(outline))
document.body.prepend(Fonticon())
printme()
