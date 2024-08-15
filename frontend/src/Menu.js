import react from 'react';
import './Menu.css';
import {Link, useNavigate} from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()

    return (
        <div className='menu-bar'>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/contact')}>Contact</button>         
        </div>
    );
}
export default Menu;