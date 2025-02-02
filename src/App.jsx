import './App.css';
import Header from "./containers/Header.jsx";
import TextArea from "./containers/TextArea.jsx";
import TextCounter from "./containers/TextCounter.jsx";
import TextDensity from "./containers/TextDensity.jsx";
import DarkMode from "./components/DarkMode.jsx";
import {useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleClickDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div>
            <Header />
            <DarkMode isDarkMode={isDarkMode} onDarkMode={handleClickDarkMode}/>
        </div>
        <TextArea />
        <TextCounter />
        <TextDensity />
    </div>
  )
}

export default App
