import DisplayCounterBlock from "../components/DisplayCounterBlock.jsx";

function TextCounter({ valueTextArea }) {

    return (
        <div className="text-counter">
            <DisplayCounterBlock
                valueTextArea={valueTextArea}
                src="./src/assets/images/pattern-character-count.svg"
                alt="Pattern character count"
                variant="purple"
                countType="character"
                text="Total Characters"
            />
            <DisplayCounterBlock
                valueTextArea={valueTextArea}
                src="./src/assets/images/pattern-word-count.svg"
                alt="Pattern word count"
                variant="yellow"
                countType="word"
                text="Words Count"
            />
            <DisplayCounterBlock
                valueTextArea={valueTextArea}
                src="./src/assets/images/pattern-sentence-count.svg"
                alt="Pattern sentence count"
                variant="orange"
                countType="sentence"
                text="Sentence count"
            />
        </div>
    )
}

export default TextCounter;