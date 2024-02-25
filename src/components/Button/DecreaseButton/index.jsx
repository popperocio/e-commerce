import './DecreaseButton.css'

function DecreaseButton () {
    return (
        <button
            className='DecreaseButton'
            onClick={() => {console.log("decrease")}}
        >-</button>
    
    )
}

export { DecreaseButton }