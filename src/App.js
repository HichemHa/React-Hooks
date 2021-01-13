import './App.css';
import NavBar from './component/NavBar';
import MovieList from './MovieList';

import React,{ useState } from 'react';

import ScreenOrientationReact from 'screen-orientation-react';
import Footer from './Footer';



function App() {
  const [filtredText , setFiltredText] = useState('');
  const [R,setR]=useState(0);
  // setRaing = (e) => console.log(e);

    return (
     
    <div className="App" > 
   
        <NavBar setFiltredText={setFiltredText} setR={setR}/>
        <MovieList filtredText={filtredText} R={R} />

       <Footer/>
    </div>
  );
}

export default App;
