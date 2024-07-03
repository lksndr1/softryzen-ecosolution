import './mainsec.css';
import learnMore from '../../img/learn-more.svg';
import learnMoreHover from '../../img/learn-more-hover.svg';
import ogImage from '../../img/wind-turbine-clean-energy.png';

const Mainsec = () => {
    return (
        <section className="mainsec">
            <div className="container mainsec-wrapper">
                <div className="heading-wrapper">
                    <h1 className='main-heading'>RENEWABLE ENERGY For any task</h1>
                    <div className="description-wrapper">
                        <p>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                        <div className="learn-more-wrapper">
                            <a href="#" className="learn-more-btn">
                                <img className="learn-more-icon" src={learnMore} alt="Learn-more-button" />
                                <img className="learn-more-icon-hover" src={learnMoreHover} alt="Learn-more-button" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="green-line"></div>
                <div className="address-wrapper">
                    <p className="post-address">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    <div className='email-copyright-wrapper'>
                        <p className="email-address">office@ecosolution.com</p>
                        <p className="main-copyright">ecosolution &copy; 2023</p>
                    </div>
                    
                </div>
                <div className="ogImage">
                    <img src={ogImage} alt="wind generator" />
                </div>
            </div>
        </section>
    );
}

export default Mainsec;