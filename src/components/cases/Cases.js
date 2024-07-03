import './cases.css';

const Cases = () => {
    return (
        <section className="cases">
            <div className="container">
                <div className="cases-flex-container">
                    <h2 className="cases-heading">Successful cases of our company</h2>
                    <div className="cases-line"></div>
                    <div className="slider-nav">
                        <div className="number-photos">
                            <p>01 /05</p>
                        </div>
                        <div className="arrows">
                            <div className="arrow-left">
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="arrow-right">
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-img">

                </div>
            </div>
        </section>
    );
}
 
export default Cases;