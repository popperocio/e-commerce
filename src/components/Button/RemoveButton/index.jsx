import './RemoveButton.css'

function RemoveButton ({onClick}) {
    return (
        <button
            className='RemoveButton'
            onClick={onClick}
        >x</button>
    
    )
}

export { RemoveButton }