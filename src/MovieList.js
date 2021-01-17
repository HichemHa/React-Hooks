import React from 'react'
import MovieCard from './MovieCard';
import { Row, Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import { Rating } from '@material-ui/lab/Rating';





function MovieList({filtredText,R}) {
    
        const { register, handleSubmit } = useForm();
        const newData = data => {setmouvie(el=>[...el,data]);setShow(false)};
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    const [mouvie, setmouvie] = useState([
        {
            id:1,
            title:'le Parrin',
            description:'Le Parrain est un film américain de Francis Ford Coppola, sorti en 1972.',
            posterUrl:'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg',
            rate:1
        },
        {
            id:2,
            title:'Focus',
            description:'Nicky est passé maître dans lart de lescroquerie ; il en connaît toutes les ficelles. Alors quand il croise le chemin de la jolie Jess, apprentie arnaqueuse, il déjoue immédiatement le piège grossier quelle lui tend et décide de lui apprendre les rudiments du métier. Cependant lorsquelle commence à tomber sous son charme, Nicky préfère couper les ponts.',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigKWtq-z9HZf53mNw-Rn_DvAHdx_0jG4n3Yy0v6hqcufquEH0',
            rate:2
        },
        
        {
            id:3,
            title:'Mission impossible',
            description:'Mission impossible est une série cinématographique américaine.',
            posterUrl:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg',
            rate:3,
        },
        {
            id:4,
            title:'Joker',
            description:'Mission impossible est une série cinématographique américaine.',
            posterUrl:'https://images-na.ssl-images-amazon.com/images/I/71YrVzXizzL._AC_SL1200_.jpg',
            rate:4,
        },
        {
            id:5,
            title:'Fast and Furious', 
            description:'Fast & Furious est une franchise médiatique centrée sur une série de films daction.',
            posterUrl:'https://fr.web.img3.acsta.net/pictures/20/01/31/09/46/1825827.jpg',
            rate:5,
        }]
        );
    
  
    
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
                            {/* {console.log("newdata=",newData)} */}
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
                     {mouvie.filter((el,i)=> el.rate >= R && el.title.toLowerCase().includes(filtredText.toLowerCase()) ).map(el=>(<MovieCard id={el.id} titre={el.title} desc={el.description} imgUrl={el.posterUrl} afficherate={el.rate} />)) } 
                </div>   
        </div>
    )
}

export default MovieList
