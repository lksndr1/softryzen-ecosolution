import { ReactComponent as LearnMore } from '../../img/learn-more.svg';
import './mainsec.css';
import ogImage from '../../img/wind-turbine-clean-energy.png';

const Mainsec = () => {

    const scrollToCases = (e) => {
        e.preventDefault();
        const casesSection = document.getElementById('cases');
        if (casesSection) {
            casesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="main" className="mainsec">
            <div className="container mainsec-wrapper">
                <div className="heading-wrapper">
                    <h1 className='main-heading'>RENEWABLE ENERGY For any task</h1>
                    <div className="description-wrapper">
                        <p>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                        <div className="learn-more-wrapper">
                            <button className="learn-more-btn" onClick={scrollToCases}>
                                <LearnMore className="learn-more-icon"/>
                            </button>
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