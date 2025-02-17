import s from './DisplayCounterBlock.module.scss';
import CounterBlock from './CounterBlock.jsx';

function DisplayCounterBlock({ src, alt, variant, countType }) {

    const variantClass = s[variant] || '';

    function getCount() {
        switch (countType) {
            case 'character':
                return 278;
            case 'word':
                return 100;
            case 'sentence':
                return 10;
            default:
                return 0;
        }
    }

    return (
        <div className={`${s.counterBlock} ${variantClass}`}>
            <CounterBlock counter={getCount()} text={countType} />
            <img src={src} alt={alt} />
        </div>
    );
}

export default DisplayCounterBlock;