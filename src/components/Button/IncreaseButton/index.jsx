import './IncreaseButton.css'

function IncreaseButton () {
    return (
        <button
            className='IncreaseButton'
            onClick={() => {console.log("increase")}}
        >+</button>
    
    )
}

export { IncreaseButton }