import CounterBlock from "../components/CounterBlock.jsx";

function TextCounter() {
    return (
        <div className="text-counter">
            <CounterBlock
                src="./src/assets/images/pattern-character-count.svg"
                alt="Pattern character count"
                variant="purple"
            />
            <CounterBlock
                src="./src/assets/images/pattern-word-count.svg"
                alt="Pattern word count"
                variant="yellow"
            />
            <CounterBlock
                src="./src/assets/images/pattern-sentence-count.svg"
                alt="Pattern sentence count"
                variant="orange"
            />
        </div>
    )
}

export default TextCounter;