// import React from 'react'
// import {useForm} from 'react-hook-form';
// import { Modal,Button } from 'react-bootstrap';
// import { useState } from 'react';


// function Forms() {

//     const { register, handleSubmit } = useForm();
    
//     // const onSubmit = data => {setmouvie(el=>[...el,data]);setShow(false)};

//     const [newForm, setNewForm]=useState('');
//     const [show, setShow] = useState(false);


//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const data =(el)=>setNewForm(el);
//     return (
//         <div>
//              <>
//              {    }
//                 <Button  onClick={handleShow}>
//                 Add New Movie
//                 </Button>
        
//                 <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                         <form onSubmit={handleSubmit(data)}>
//                             <label>
//                                 titre de film 
//                                 <input type="text" name="title" ref={register}/>
//                             </label>
//                             <label>
//                                 description
//                                 <input type="text" name="description" ref={register}/>
//                             </label>
//                             <label>
//                                 poster link
//                                 <input type="text" name="posterUrl" ref={register}/>
//                             </label>
//                             <br/>   
//                             <label>
//                                 rate
//                                 <input type="text" name="rate" ref={register} />
//                             </label>
                            
//                             <br/>
//                             <input type="submit" value="Envoyer" /> 
        
//                         </form>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                     Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                     Save Changes
//                     </Button>
//                 </Modal.Footer>
//                 </Modal>
//             </>
//         </div>
//     )
// }

// export default Forms
