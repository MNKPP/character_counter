import './App.scss';
import Header from "./containers/Header.jsx";
import TextArea from "./containers/TextArea.jsx";
import TextCounter from "./containers/TextCounter.jsx";
import TextDensity from "./containers/TextDensity.jsx";
import DarkMode from "./components/DarkMode.jsx";
import {useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [valueTextArea, setValueTextArea] = useState('');

    function handleClickDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    function handleChange(event) {
        setValueTextArea(event.target.value)
    }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="header">
            <Header isDarkMode={isDarkMode}/>
            <DarkMode isDarkMode={isDarkMode} onDarkMode={handleClickDarkMode}/>
        </div>
        <h1>Analyze your text in real-time.</h1>
        <TextArea onTextAreaChange={handleChange} valueTextArea={valueTextArea}/>
        <TextCounter valueTextArea={valueTextArea}/>
        <TextDensity />
    </div>
  )
}

export default App
