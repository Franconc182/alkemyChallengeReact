import {Link as LinkRouter} from 'react-router-dom';


export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <LinkRouter to="/">Home</LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to="/movies">Movies</LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to="/contact">Contact</LinkRouter>
                    </li>
                </ul>
            </nav>
        </header>
    )
}