import './footer.scss'

export const Footer = () => {

    return <footer className="footer">
        <div className='footer__link-wrapper'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Info</a>
            <a href="#">Contact</a>
            <a href="#">Bookings</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Style Guide</a>
            <a href="#">Licenses</a>
            <a href="#">Instructions</a>
            <a href="#">Changlog</a>
            <a href="#">Password</a>
            <a href="#">404</a>
        </div>
        <div className='footer__created-wrapper'>
            <p className='footer__content'>© Latte Cafe 2022.</p>
            <p className='footer__content'>Built by Nikolai Bain</p>
            <p className='footer__content'>Powered by Webflow</p>
        </div>
    </footer>
}