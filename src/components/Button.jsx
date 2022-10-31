
const Button = (props) => {
    return(
    <button className={`button ${props.color}`} onClick = {() => {props.setColor (props.color)}}>{props.color}</button>
    )
}

export default Button
