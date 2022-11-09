//Libraries
import { Link as LinkRouter } from 'react-router-dom';

//styles
import '../styles/header.css'


export default function Header() {

    return (
        <header>
            <nav className='navbar-header'>
                <img className='redflix-logo' src="https://i.ibb.co/2kTSjDk/redflix.png" alt="redflix" />
                <ul className='ul-header'>
                    <li>
                        <LinkRouter className='a-navbar' to="/">Home</LinkRouter>
                    </li>
                    <li>
                        <LinkRouter className='a-navbar' to="/movies">Movies</LinkRouter>
                    </li>
                    <li>
                        <LinkRouter className='a-navbar' to="/contact">Contact</LinkRouter>
                    </li>
                </ul>
                <section>
                    <LinkRouter to='/login' className='btn-navbar'>Login</LinkRouter>
                </section>
            </nav>
        </header>
    )
}