import {useState} from "react";

function DarkMode({isDarkMode, onDarkMode}) {

    return (
        <button onClick={() => onDarkMode()}>
            Sun Icon
            <img src="" alt=""/>
        </button>
    )
}

export default DarkMode;