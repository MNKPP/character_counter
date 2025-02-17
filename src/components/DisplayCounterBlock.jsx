import s from './DisplayCounterBlock.module.scss';
import CounterBlock from './CounterBlock.jsx';
import { countCharacter, countWord, countSentence } from "../utils/counterFunctions.js";

function DisplayCounterBlock({ valueTextArea, src, alt, variant, countType, text }) {

    const variantClass = s[variant] || '';

    function getCount() {
        switch (countType) {
            case 'character':
                return countCharacter(valueTextArea) || 0;
            case 'word':
                return countWord(valueTextArea) || 0;
            case 'sentence':
                return countSentence(valueTextArea) || 0;
            default:
                return 0;
        }
    }

    return (
        <div className={`${s.counterBlock} ${variantClass}`}>
            <CounterBlock counter={getCount()} text={text} />
            <img src={src} alt={alt} />
        </div>
    );
}

export default DisplayCounterBlock;