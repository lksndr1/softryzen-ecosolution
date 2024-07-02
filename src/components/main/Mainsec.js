import './mainsec.css';
import learnMore from '../../img/learn-more.svg';
import ogImage from '../../img/wind-turbine-clean-energy.png';

const Mainsec = () => {
    return (
        <section className="mainsec">
            <div className="container mainsec-wrapper">
                <div className="heading-wrapper">
                    <h1 className='mainHeading'>RENEWABLE ENERGY For any task</h1>
                    <div className="description-wrapper">
                        <p>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                        <div className="learnMore-wrapper">
                            <a href="#" className="learnMore-btn">
                                <img src={learnMore} alt="Learn-more-button" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="green-line"></div>
                <div className="address-wrapper">
                    <p className="post-address">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    <p className="email-address">office@ecosolution.com</p>
                </div>
                <div className="ogImage">
                    <img src={ogImage} alt="wind generator" />
                </div>
            </div>
        </section>
    );
}

export default Mainsec;