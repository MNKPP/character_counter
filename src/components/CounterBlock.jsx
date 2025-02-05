import s from './CounterBlock.module.scss';

function CounterBlock({src, alt, variant}) {

    function variantColor() {
        switch (variant) {
            case 'purple':
                return s.purple;
            case 'orange':
                return s.orange;
            case 'yellow':
                return s.yellow;
        }
    }

    return (
        <div className={`${s.counterBlock} ${variantColor()}`}>
            <div>
                <span>278</span>
                <p>Total Characters</p>
            </div>
            <img src={src} alt="alt"/>
        </div>
    )
}

export default CounterBlock;