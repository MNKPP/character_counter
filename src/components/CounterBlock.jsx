import s from './CounterBlock.module.scss';

function CounterBlock() {
    return (
        <div className={s.counterBlock}>
            <div>
                <span>278</span>
                <p>Total Characters</p>
            </div>
            <img src="./src/assets/images/pattern-character-count.svg" alt="pattern"/>
        </div>
    )
}

export default CounterBlock;