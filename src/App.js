import './App.css';
import NavBar from './component/NavBar';
import MovieList from './MovieList';
import React,{ useState } from 'react';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom'
import More from './component/More';



function App() {
  const [filtredText , setFiltredText] = useState('');
  const [R,setR]=useState(0);

    return (
      <BrowserRouter>
    <div className="App" > 
     
          <NavBar setFiltredText={setFiltredText} setR={setR}/>
    
        
        <Route exact path='/' render={()=>(<MovieList filtredText={filtredText} R={R} />)} /> 
         <Route path='/More/:id' component={More} />
         <Footer/>
         {console.log(filtredText)}

    </div>
    </BrowserRouter>
  );
}

export default App;
