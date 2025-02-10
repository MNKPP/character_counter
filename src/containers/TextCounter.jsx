import DisplayCounterBlock from "../components/DisplayCounterBlock.jsx";

function TextCounter() {
    return (
        <div className="text-counter">
            <DisplayCounterBlock
                src="./src/assets/images/pattern-character-count.svg"
                alt="Pattern character count"
                variant="purple"
            />
            <DisplayCounterBlock
                src="./src/assets/images/pattern-word-count.svg"
                alt="Pattern word count"
                variant="yellow"
            />
            <DisplayCounterBlock
                src="./src/assets/images/pattern-sentence-count.svg"
                alt="Pattern sentence count"
                variant="orange"
            />
        </div>
    )
}

export default TextCounter;