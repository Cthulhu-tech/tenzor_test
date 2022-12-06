import mail from '../../assets/header/mail.svg'
import face from "../../assets/header/face.svg"
import inst from "../../assets/header/inst.svg"
import './header.scss'

export const Header = () => {

    return <header className="header">
        <ul className="header__link">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#info">Info</a>
            <a href="#booking">Booking</a>
        </ul>
        <h1 className="header__title">
            LATTE CAFE
        </h1>
        <div className="header__link header__link-image">
            <a href="#">
                <img src={mail} alt="mail" />
            </a>
            <a href="#">
                <img src={face} alt="face" />
            </a>
            <a href="#">
                <img src={inst} alt="inst" />
            </a>
        </div>
    </header>
}
