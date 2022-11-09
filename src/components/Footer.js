//styles
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className='ul-footer'>
                    <li><a href="https://instagram.com" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://github.com" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </nav>
            <img className='redflix-logo' src='https://i.ibb.co/2kTSjDk/redflix.png' alt='redflixfooter' />
            <p>Copyright Alkemy Challenge</p>
        </footer>
    )
}