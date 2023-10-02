import React from 'react';
import { useParams } from 'react-router-dom';

const Movedatail = () => {
    const {genre_ids}=useParams()
    console.log(genre_ids)
    return (
        <div>
            {genre_ids}
        </div>
    );
}

export default Movedatail;
