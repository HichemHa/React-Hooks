import React from 'react'
import MovieCard from './MovieCard';
import { Row, Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import { Rating } from '@material-ui/lab/Rating';





function MovieList({filtredText,R}) {
    // //form
        const { register, handleSubmit } = useForm();
        const newData = data => {setmouvie(el=>[...el,data]);setShow(false)};
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

       
        
        // console.log(R);

    //list movies
    const [mouvie, setmouvie] = useState([
        {
            id:0,
            title:'le Parrin',
            description:'Le Parrain est un film américain de Francis Ford Coppola, sorti en 1972.',
            posterUrl:'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg',
            rate:1
        },
        {
            id:0,
            title:'le Parrin',
            description:'Le Parrain est un film américain de Francis Ford Coppola, sorti en 1972.',
            posterUrl:'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg',
            rate:2
        },
        
        {
            id:1,
            title:'Mission impossible',
            description:'Mission impossible est une série cinématographique américaine.',
            posterUrl:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg',
            rate:3,
        },
        {
            id:1,
            title:'Mission impossible',
            description:'Mission impossible est une série cinématographique américaine.',
            posterUrl:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg',
            rate:4,
        },
        {
            id:2,
            title:'Fast and Furious', 
            description:'Fast & Furious est une franchise médiatique centrée sur une série de films daction.',
            posterUrl:'https://fr.web.img3.acsta.net/pictures/20/01/31/09/46/1825827.jpg',
            rate:5,
        }]
        );
        
        // let x=mouvie.filter(e => e.title === filtredText);
        // console.log(x);
        
    // const addNewFilm =(film)=>{
    //   setmouvie(el=>[...el,film])
    // }
  
    
    return (
        <div className="sectionMl">
              <Button  onClick={handleShow}>
                Add New Movie
                </Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form onSubmit={handleSubmit(newData)} >
                            {console.log("newdata=",newData)}
                            <label >
                                titre de film 
                                <input type="text" name="title" ref={register}/>
                            </label>
                            <label>
                                description
                                <input type="text" name="description" ref={register}/>
                            </label>
                            <label>
                                poster link
                                <input type="text" name="posterUrl" ref={register} />
                            </label>
                            <br/>   
                            <label>
                                rate
                            <input type="Number" name="rate" ref={register} />
                            </label >                          
                            <br/>
                            <input type="submit" value="Envoyer" />       
                        </form>
                </Modal.Body>
                <Modal.Footer>
                   
                    <Button variant="primary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>

            
                <div className="mouvilists">
                    
             {mouvie.filter((el,i)=> el.rate >= R && el.title.toLowerCase().includes(filtredText.toLowerCase()) ).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) } 
                  
                {/* {
                    filtredText ? mouvie.filter(el => el.title.toString().toLowerCase().includes(filtredText.toString().toLowerCase())).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                    : mouvie.map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                }   */}

                {/* {   
                    !filtredText ? mouvie.map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                    :  mouvie.filter(el => el.title.toString().toLowerCase().includes(filtredText.toString().toLowerCase())).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                }  */}
                    {/* if (R) { 
                        mouvie.filter(el=>el.rate==R).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />))
                    } else if (filtredText){
                        mouvie.filter(el => el.title.toString().toLowerCase().includes(filtredText.toString().toLowerCase())).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                    } else {
                         mouvie.map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />))
                    }     */}

                 {/* {   R  ? mouvie.filter(el=>el.rate==R).map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                    : mouvie.map(el=>(<MovieCard titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) 
                }  
               */}

           
                </div>

           
        </div>
    )
}

export default MovieList
