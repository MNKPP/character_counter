import s from './DarkMode.module.scss';
import IconSun from '../assets/images/icon-sun.svg';
import IconMoon from '../assets/images/icon-moon.svg';

function DarkMode({isDarkMode, onDarkMode}) {

    const iconSrc = isDarkMode ? IconMoon : IconSun;
    const alt = isDarkMode ? 'Icon Moon' : 'Icon Sun';

    return (
        <button className={`${isDarkMode ? s.darkModeSwitchLight : s.darkModeSwitchDark} ${s.darkModeSwitch}`}
                onClick={() => onDarkMode()}>
            <img src={iconSrc} alt={alt}/>
        </button>
    )
}

export default DarkMode;