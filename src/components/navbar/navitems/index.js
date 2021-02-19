import { Link } from 'react-router-dom';
import './navitems.css';

const Navitems = () => {
    return(
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Categor&iacute;as
                </a>
                <div className='dropdown-menu py-0' aria-labelledby='navbarDropdown'>
                    <Link to={`/category/mouse`} className='dropdown-item'>Mouse</Link>
                    <Link to={`/category/keyboards`} className='dropdown-item'>Keyboards</Link>
                    <Link to={`/category/webcams`} className='dropdown-item'>Webcams</Link>
                    <Link to={`/category/monitor`} className='dropdown-item'>Monitores</Link>
                </div>
            </li>
        </ul>     
    );
}

export default Navitems;