import { useState } from "react";
import "./movieForm.css"

const MovieForm = (props) => {
    const [modal,setModal] = useState (false)

    return(
        <>
        <button onClick={() => setModal(!modal)} className="movieBtn">Add New Movie </button>

        {modal && (
            <div className="modal">
                <div className="modalContent">
                    <h2 className="letsadd">Let's add you next movie!</h2>
                    <span>Movie's Image </span><input type="text" placeholder="Movie Image" onChange={(e) => props.setImage(e.target.value)} />
                    <br />
                    <br />
                    <span>Movie's Trailer </span><input type="text" placeholder="Movie Trailer" onChange={(e) => props.setTrailer(e.target.value)} />
                    <br />
                    <br />
                    <span>Movie's Name </span><input type="text" placeholder="Movie Name" onChange={(e) => props.setName(e.target.value) } />
                    <br />
                    <br />
                    <button onClick={() => props.updateMoviesList()} className="submitModal">Submit</button>
                    <button onClick={() => setModal (!modal)} className="closeModal">Close</button>
                </div>
            </div>
        )}
        </>
    )
}

export default MovieForm
