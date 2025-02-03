import s from './CheckboxSetting.module.scss'

function CheckboxSetting({label}) {
    return (
        <div className={s.checkboxSetting}>
            <input type="checkbox" name="input"/>
            <label htmlFor="input">{label}</label>
        </div>
    )
}

export default CheckboxSetting