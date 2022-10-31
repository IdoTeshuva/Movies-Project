import { useState } from "react";
import "./trailer.css"

const Trailer = (props) =>{
   const [player, setPlayer] = useState (false)

 return (
 <>
    <button onClick={() => setPlayer(!player)} className="PlayerBTN"> Watch Trailer</button>

    {player && (
        <div className="player">
            <div className="playerContent">
            <h2>Trailer</h2>
            <div className="iframe">{props.frame}</div>
            <br />
            <button className="closePlayer" onClick={() => setPlayer(!player)}>Close</button>
            </div>
        </div>
    )}
 </>
 )
}

export default Trailer