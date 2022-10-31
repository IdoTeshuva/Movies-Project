import RatingCounter from "../components/RatingCounter";
import Trailer from "../components/Trailer";
import ".././FourthPage/movies.css"


const MovieLine =(props) => {

    return(
        <div className="table">
        <tr>
        <td><div className="img"></div></td>
        <td><Trailer frame = {<iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} /></td>
        <td><span>The Dark Knight</span></td>
        <td><RatingCounter /></td>
        <td><button className="closeMovie">X</button></td>
        </tr>
        </div>
    )
}

export default MovieLine