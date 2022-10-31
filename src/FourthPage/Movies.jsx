import { useState } from "react";
import "./movies.css"
import RatingCounter from "../components/RatingCounter";
import Trailer from "../components/Trailer";
import MovieForm from "../components/MovieForm";

const Movies = () =>{
    const [movies, setMovies] = useState ([])
    const [image, setImage] = useState ("")
    const [trailer, setTrailer] = useState ("")
    const [name, setName] = useState ("")

    const [movie, setMovie] = useState ({})

    
    const updateMoviesList = () => {
        const moviesList = [...movies]
        const movie = {
            image,
            trailer,
            name
        }

        setMovie(movie)

        moviesList.push(movie)
        setMovies(moviesList)
}
    const DeleteMovie = (i) => {
        const deletemovie = [...movies]
        deletemovie.splice(i,1)
        setMovies(deletemovie)
    }
    return(
        <div className="movieMain">
            <div className="Netflix"></div>
            <h1 className="Header">My Favourite Movies</h1>
            <br />
            <MovieForm updateMoviesList = {updateMoviesList} setName = {setName} setImage ={setImage} setTrailer = {setTrailer}/>

            <div className="div1">
                         <table className="table">
                    <tr>
                        <th>Image</th>
                        <th>Trailer</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>close</th>
                    </tr>

                    <tr>
                        <td><img src="https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg" className="img" alt=""></img></td>
                        <td><Trailer frame = {<iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} /></td>
                        <td><span>The Dark Knight</span></td>
                        <td><RatingCounter /></td>
                        <td><button className="closeMovie">X</button></td>
                    </tr>
                    <tr>
                        <td><img src="https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg" className="img" alt=""></img></td>
                        <td><Trailer frame = {<iframe width="560" height="315" src="https://www.youtube.com/embed/1bq0qff4iF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} /></td>
                        <td><span>Harry Potter and the Chamber of Secrets</span></td>
                        <td><RatingCounter /></td>
                        <td><button className="closeMovie">X</button></td>
                    </tr>
                    <tr>
                        <td><img src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" className="img" alt=""></img></td>
                        <td><Trailer frame = {<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}m/></td>
                        <td><span>Interstellar</span></td>
                        <td><RatingCounter /></td>
                    <td><button className="closeMovie">X</button></td>
                    </tr>
                    <tr className="movieLine"> {movies.map ((moviesList,index) => {return(
                        <tr>
                            <td><img src={movie.image} className="img" alt=""></img></td>
                            <td><Trailer frame = {movie.trailer} /></td>
                            <td>{movie.name}</td>
                            <td><RatingCounter /></td>
                            <td><button onClick={() => DeleteMovie} className="closeMovie">X</button></td>
                        </tr>
                    )})}
                    </tr>
                    </table>
             </div>
         </div>

        
    )
}

export default Movies