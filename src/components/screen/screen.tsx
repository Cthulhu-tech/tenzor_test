import screen from '../../assets/screen/screen.png'
import { Image } from '../image/image'
import './screen.scss'

export const Screen = () => {

    return <section className='screen'>
        <div className='screen-wrapper'>
            <Image {...{src: screen, alt: 'screen'}}/>
        </div>
    </section>
}
