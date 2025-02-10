import s from './DisplayCounterBlock.module.scss';
import CounterBlock from "./CounterBlock.jsx";

function DisplayCounterBlock({src, alt, variant}) {

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
            <CounterBlock />
            <img src={src} alt={alt}/>
        </div>
    )
}

export default DisplayCounterBlock;