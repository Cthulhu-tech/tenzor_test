import { useEffect } from 'react'
import './image.scss'

export const Image = (props: {src: string, alt: string}) => {

    useEffect(() => {},[props])

    return <img className='image' src={props.src} alt={props.alt}/>
}