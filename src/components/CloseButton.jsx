import "./closeButton.css"

const CloseButton = (props) =>{
    return(
    <button onClick={(i) => props.DeletMovies(i)} className="closeMovie">X</button>
    )
}

export default CloseButton