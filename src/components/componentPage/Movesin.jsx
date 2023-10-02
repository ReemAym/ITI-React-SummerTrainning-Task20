import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const imgPath = "https://image.tmdb.org/t/p/w500/";
const Movesin = () => {

    const [moves, setMoves] = useState(null);


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then(res => res.json())
            .then(json => { setMoves(json.results); })
    }, [])
    // console.log(moves)
    return (

        <div style={{textAlign:"center"}}>
            {Array.isArray(moves) ? (moves.map((i) => (
                <div key={i.id} style={{ margin: "15px" }}>
                    <img src={imgPath + i.poster_path} alt={i.title} style={{ width: "200px" }} />
                    <h3>{i.title}</h3>
                    <Link to={`/allmoves/${i.genre_ids}`}>
                        <button style={{padding:"5px",backgroundColor:"rgb(150,190,255)",border:"none",color:"white"}}>Show genre_id</button>
                    </Link>
                    <hr></hr>
                </div>
            ))) : (<div>Loooading....</div>)}

        </div>
    );
}

export default Movesin;
