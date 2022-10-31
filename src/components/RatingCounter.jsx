import { useState } from "react";
import "./ratingCounter.css"
const RatingCounter = () => {
    const [likes,setLikes] = useState(0);
    return(
        <div className="Likes">
            <p>{likes}</p>
        <button className="likeBtn" onClick={() => setLikes(likes + 1)}>👍</button>
        <button className="likeBtn" onClick={() => setLikes(likes - 1)}>👎</button>
        </div>
    )
    }
    export default RatingCounter