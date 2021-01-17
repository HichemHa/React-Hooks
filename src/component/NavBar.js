import React,{useSate} from 'react';
import { Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from '@material-ui/lab';
import { Link }   from 'react-router-dom'


function NavBar({setFiltredText,setR}) {   
    
    return (
        <div>
            
            <Navbar style={{size:'30px;'}} bg="primary" variant="dark">
            <Link to={'/'}>
                <Navbar.Brand href="#home">Film</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">     
                </Nav>
                
                <Form style = {{borderColor:'white !important'}} inline>
                    Filter by rate : 

   
                <Rating
                    max={5}
                    onChange={(e)=>setR(e.target.value)}
                    />
                or
                <FormControl type="text" placeholder="Search" className="mr-sm-2"
                onChange={(e)=>setFiltredText(e.target.value)}
                />
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
