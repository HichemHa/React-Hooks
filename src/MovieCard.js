import React from 'react';
import { Rating } from '@material-ui/lab';
import { Link }   from 'react-router-dom'
import More from './component/More'
import { useParams } from 'react-router-dom';


function MovieCard({titre,desc,imgUrl,afficherate,id}) {
    return (
      
       
        <Link to={`/more/${id}`}>
            <div className="Card" style = {{borderRadius: '100px!important'}}>
                <img src={imgUrl} alt="movie" width={396} height={502} />
                <div className="prop">
                    <h1 key={id} style={{color: "red"}}> {titre} </h1>
                    <Rating
                        value={afficherate}
                        max={5}
                        disabled={true}
                    />
                </div>
            </div>
                
        </Link>

    );
}

export default MovieCard
