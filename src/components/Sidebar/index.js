import {Link} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Logo-s-png'



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='Logo' to ='/'>
            <img srr={LogoS} alt="Logo" />
            <img srr={LogoS} alt="Logo" />
        </Link>
    </div>
)

export default Sidebar