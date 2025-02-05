import s from './TextInput.module.scss';

function TextInput({ onTextAreaChange, value }) {


    return (
        <textarea className={s.textInput} onChange={onTextAreaChange} value={value}></textarea>
    )
}

export default TextInput