import { Height } from '@material-ui/icons';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Iframe from 'react-iframe'







function More() {
    const { id } = useParams()
    console.log('my id',id);
    const [mouvie, setmouvie] = useState([
        {
            iden:1,
            title:'le Parrin',
            description:'Produit par les studios Paramount, le film est une adaptation du roman du même nom de Mario Puzo. Lhistoire se déroule de 1945 à 1955 et est centrée sur les Corleone, une des plus grandes familles de la Mafia américaine. Le film aborde le sujet de la succession du patriarche de la famille, Vito Corleone dit le Parrain (Marlon Brando), et de lascension de son plus jeune fils, Michael (Al Pacino), qui initialement souhaite rester en dehors des activités criminelles de la famille. Mais, à cause dun enchaînement de circonstances tragiques, Michael finit par en devenir le membre le plus impitoyable. Le Parrain est considéré comme lun des plus grands films du cinéma mondial1 et lun des plus influents, spécialement dans le genre des films de gangsters2. Il est classé à la deuxième place des meilleurs films du cinéma nord-américain par lAmerican Film Institute (AFI) (derrière Citizen Kane)3. En 1990, le film est sélectionné par Le National Film Registry pour être conservé à la Bibliothèque du Congrès des États-Unis pour son « importance culturelle, historique ou esthétique »4. Francis Ford Coppola réalisa deux suites à ce film : Le Parrain, 2e partie en 1974 et Le Parrain, 3e partie en 1990 Le film remporta trois Oscars : celui du meilleur film, du meilleur acteur (Marlon Brando) et du meilleur scénario adapté pour Puzo et Coppola. Il reçut aussi sept nominations dans dautres catégories incluant Al Pacino, James Caan et Robert Duvall pour lOscar du meilleur acteur dans un second rôle et Francis Ford Coppola pour celle de meilleur réalisateur.',
            posterUrl:'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg',
            rate:1,
            site:"https://www.youtube.com/embed/2MOox1v0DL",
        },
        {
            iden:2,
            title:'Focus',
            description:'Nicky est passé maître dans lart de lescroquerie ; il en connaît toutes les ficelles. Alors quand il croise le chemin de la jolie Jess, apprentie arnaqueuse, il déjoue immédiatement le piège grossier quelle lui tend et décide de lui apprendre les rudiments du métier. Cependant lorsquelle commence à tomber sous son charme, Nicky préfère couper les ponts.',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigKWtq-z9HZf53mNw-Rn_DvAHdx_0jG4n3Yy0v6hqcufquEH0',
            site:'https://www.youtube.com/embed/MxCRgtdAuBo',
            rate:2
        },
        
        {
            iden:3,
            title:'Mission impossible',
            description:'Mission impossible (Mission: Impossible; « Mission : Limpossible »)note 1 est une série cinématographique américaine, inspirée de la série télévisée éponyme mettant en vedette depuis 1996 Tom Cruise (également producteur) dans le rôle de Ethan Hunt ainsi que des personnages récurrents tels Simon Pegg (Benji Dunn) ou Ving Rhames (Luther Stickell). Cette série rencontre un succès critique et commercial, ayant rapporté à ce jour 3,4 milliards de dollars dans le monde1. Le sixième film de la saga, Mission impossible : Fallout , sorti en juillet 2018 est celui qui a rencontré le plus grand succès dans le monde. Deux suites sont annoncées en janvier 2019, toujours réalisées par Christopher McQuarrie, avec un tournage simultané et des sorties prévues pour les étés 2021 et 20222.',
            posterUrl:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg',
            rate:3,
            site:'https://www.youtube.com/embed/8y5oSx3pB-s',
        },
        {
            iden:4,
            title:'Joker',
            description:'Joker est un thriller psychologique américain, coécrit et réalisé par Todd Phillips, sorti en 2019.Il raconte, dans une histoire originale, la transformation dArthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.Véritable triomphe au box-office mondial (plus dun milliard de dollars de recettes) et bénéficiant de critiques élogieuses, il crée toutefois une polémique, notamment aux États-Unis, du fait de reproches d’apologie de la violence, laquelle demeure contestée par le réalisateur.Le film est présenté en compétition officielle à la Mostra de Venise 2019 où il reçoit le Lion dor et est ovationné. Il est ensuite nommé près dune trentaine de fois pour différentes catégories de récompenses (Oscars, Golden Globes, British Academy Film Awards, César du meilleur film étranger, etc.). Le jeu dacteur de Joaquin Phoenix est particulièrement salué, cette performance lui valant de nombreuses récompenses dont le Golden Globe du meilleur acteur dans un film dramatique et lOscar du meilleur acteur. La compositrice Hildur Guðnadóttir reçoit également plusieurs prix, dont le Golden Globe et lOscar de la meilleure musique de film.',
            posterUrl:'https://images-na.ssl-images-amazon.com/images/I/71YrVzXizzL._AC_SL1200_.jpg',
            site:'https://www.youtube.com/embed/zAGVQLHvwOY',
            rate:4,
        },
        {
            iden:5,
            title:'Fast and Furious', 
            description:'Fast and Furious ou Rapides et Dangereux au Québec est une série de films américains daction dont le premier est sorti en 2001. Elle comprend neuf longs métrages (sortis) ainsi que deux courts métrages. Le premier film est basé sur un article intitulé Racer X, écrit par le journaliste Ken Li et publié dans Vibe, parlant de courses-poursuites et de différents vols dans les rues de New-York (le film se déroule cependant à Los Angeles).',
            posterUrl:'https://fr.web.img3.acsta.net/pictures/20/01/31/09/46/1825827.jpg',
            rate:5,            site:'https://www.youtube.com/embed/bXgaPCyfO4U',

        }]
        );
    
    return (
        <div className="more">
            <div className="moreDesc">
            {mouvie.filter((el)=>el.iden==id).map((el)=>
            ( 
            <img src={el.posterUrl} style={{width:'500px', height:'780px' ,margin:'50px'}}/>  
            ) 

            )}  
            {mouvie.filter((el)=>el.iden==id).map((el)=>
            ( 
            <p className="descrp" style={{ width:"1100px", margin:'50px'}} >{el.description}</p>  
            ) 

            )}  
            </div >
            <h2>Bande Annonce</h2>
            {mouvie.filter((el)=>el.iden==id).map((el)=>
            ( 
                <Iframe url={el.site}
                width="1725" height="720" className="video"

              />
            ) 

            )}  

        
        </div>
    )
}

export default More
