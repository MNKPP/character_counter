import LogoLight from '../assets/images/logo-light-theme.svg'
import LogoDark from '../assets/images/logo-dark-theme.svg'

function Header({ isDarkMode }) {

    const logoSrc = isDarkMode ?  LogoDark : LogoLight;
    const alt = isDarkMode ? 'Logo dark' : 'Logo light';

    return <img src={logoSrc} alt={alt}/>
}

export default Header