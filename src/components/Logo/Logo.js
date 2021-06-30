import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return(
        <div>
            <Tilt className="Tilt br2 shadow-2 pa3 ma6 mt0" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                <img style={{paddingTop: '5px'}} alt='logo' src={brain}/> 
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;