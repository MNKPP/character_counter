import TextInput from "../components/TextInput.jsx";
import CheckboxSetting from "../components/CheckboxSetting.jsx";

function TextArea() {
    return (
        <div className="text-area">
            <TextInput />
            <div className="settings">
                <CheckboxSetting label="Exclude Spaces"/>
                <CheckboxSetting label="Set Character Limit"/>
                <p>Approx. reading time: 1 minute</p>
            </div>
        </div>
    )
}

export default TextArea