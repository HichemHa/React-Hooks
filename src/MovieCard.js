import React from 'react';
import { Col } from 'react-bootstrap';
// import ReactStars from "react-rating-stars-component";
// import StarRatings from 'react-star-ratings';
import { Rating } from '@material-ui/lab';



function MovieCard({titre,desc,imgUrl,afficherate}) {
    return (
       
       
            <div className="Card" style = {{borderRadius: '100px!important'}}>
                {/* <a href="#" className="ff" > */}
                <img src={imgUrl} alt="movie" width={396} height={502} />
                <div className="prop">
                    <h1 style={{color: "red"}}> {titre} </h1>
                    <p> {desc} </p>
         
                    <Rating
                        value={afficherate}
                        max={5}
                        disabled={true}
                    />
    
                   
                </div>
                </div>
            
               
    )
}

export default MovieCard
