import s from './CheckboxSetting.module.scss'

function CheckboxSetting({label}) {
    return (
        <div className={s.checkboxSetting}>
            <label htmlFor="input">
                <span className={s.checkboxStyle}></span>
                <input type="checkbox" name="input"/>
                {label}
            </label>
        </div>
    )
}

export default CheckboxSetting