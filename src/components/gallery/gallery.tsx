import { Image } from '../image/image'
import './gellery.scss'

import img1 from '../../assets/gallery/img1.png'
import img2 from '../../assets/gallery/img2.png'
import img3 from '../../assets/gallery/img3.png'

export const Gallery = () => {

    return <section className="gallery" id='booking'>
        <div className="img-wapper_small">
            <Image {...{src: img1, alt: ''}}/>
        </div>
        <div className="img-wapper_small">
            <Image {...{src: img2, alt: ''}}/>
        </div>
        <div className="img-wapper_big">
            <Image {...{src: img3, alt: ''}}/>
        </div>
    </section>
}