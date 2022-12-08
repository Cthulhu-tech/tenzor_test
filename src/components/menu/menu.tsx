import { ClassNameChange } from '../../utils/classNameChange'
import { ChangeElements } from '../../utils/deleteElements'
import { renderToStaticMarkup } from "react-dom/server"
import { Image } from '../image/image'
import { useEffect } from 'react'
import './menu.scss'

export const Menu = () => {

    const [state] = ClassNameChange(['button', 'button-selected', 'position'])

    useEffect(() => {
        const output = document.createElement("div")
        output.className = "image-wrapper"
        output.innerHTML = `${renderToStaticMarkup(<Image {...{src: 'https://cataas.com/cat?height=1036?width=' + (700 + state), alt: 'cat ' + state}}/>)}`
        ChangeElements('.menu__info', output)
    }, [state])

    return <section className="menu" id="menu">
        <div className='menu__menu-switch'>
            <h2 className='menu__title'>
                Menu
            </h2>
            <p className='menu__content'>
                We change our menu every season. 
                Here is what we are currently
                dishing up.
            </p>
            <div className='menu__button-wrapper'>
                <button className='button button-selected'>Food Menu</button>
                <button className='button'>Drinks Menu</button>
                <button className='button'>Takeaway Menu</button>
            </div>
        </div>
        <div className='menu__info'>
        </div>
    </section>
}