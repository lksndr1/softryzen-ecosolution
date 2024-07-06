import React, { useState, useEffect } from 'react';
import './electricity.css';

const Electricity = () => {
    const [counter, setCounter] = useState(1134147814); // start value can be changed on, for example today year-day-hour-minute-seconds. it be imitate true value production for multiple visit web-site

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num) => {
        return new Intl.NumberFormat('de-DE').format(num);
    };

    return (
        <section className="electricity">
            <div className="container">
                <div className="heading">
                    <h2>Electricity we produced<br />for all time</h2>
                </div>
                <div className="electricity-line"></div>
                <div className='counter'>
                    <p className='numbers'>{formatNumber(counter)}</p>
                    <p className='kWh'>kWh</p>
                </div>
            </div>
        </section>
    );
}

export default Electricity;
