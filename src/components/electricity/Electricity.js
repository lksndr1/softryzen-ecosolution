import './electricity.css';

const Electricity = () => {
    return (
        <section className="electricity">
            <div className="container">
                <div className="heading">
                    <h2>Electricity we produced<br/>for all time</h2>
                </div>
                <div className="electricity-line"></div>
                <div className='counter'>
                    <p className='numbers'>1.134.147.814</p>
                    <p className='kWh'>kWh</p>
                </div>
            </div>
        </section>
    );
}
 
export default Electricity;