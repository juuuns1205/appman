import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [jman, setJman] = useState([]);

    const getMovie = async() => {
    try{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setJman(json.data.movie);
    }
       catch{
        console.log("error");   
       }
    }
     useEffect(() => {
                getMovie();
                setLoading(false);
                
                
    }, []);

    return <h1>{loading ? "loading": jman.rating}</h1>
}

export default Detail;