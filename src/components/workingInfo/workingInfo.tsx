import './workingInfo.scss'

export const WorkingInfo = () => {

    return <section className="working-info" id="info">
        <article className='wrapper_info'>
            <p className="working-info__title">Location</p>
            <p className="working-info__content">101 Cuba St,</p>
            <p className="working-info__content">Te Aro, Wellington</p>
        </article>
        <article className='wrapper_info'>
            <p className="working-info__title">Hours</p>
                <div className='sub-wrapper_info'>
                    <p className="working-info__content">Tuesday to Friday</p>
                    <p className="working-info__content">7AM - 3PM</p>
                </div>
                <div className='sub-wrapper_info'>
                    <p className="working-info__content">Saturday to Sunday</p>
                    <p className="working-info__content">8AM - 3PM</p>
                </div>
        </article>
        <article className='wrapper_info'>
            <p className="working-info__title">Mondays?</p>
            <p className="working-info__content">We  are  closed  on  Mondays</p>
            <p className="working-info__content">to reflect and refuel</p>
        </article>
    </section>
}