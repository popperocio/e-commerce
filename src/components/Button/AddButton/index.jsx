import './AddButton.css'

function AddButton ({onClick}) {
    
    return (
        <button
            className='AddButton'
            onClick={onClick}
        >Add</button>
    
    )
}

export { AddButton }