import logo from '../../img/logo.svg';
import burger from '../../img/burger.svg';
import getInT from '../../img/get-in-t.svg';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div claccName="logo">
                        <img src={logo} alt="Logo" className="header-logo" />
                    </div>
                    <div className="header-menu">
                        <img src={burger} alt="burger-icon" className="burger-icon" />
                        <img src={getInT} alt="Get In Touch" className="getInTouch" />
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;