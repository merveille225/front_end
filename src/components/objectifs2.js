import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
//import { Link } from 'react-router-dom';

export default function Objectifsfutur() {
    const [objectif1, setObjectif1] = useState('');
    const [objectif2, setObjectif2] = useState('');
    const [objectif3, setObjectif3] = useState('');
    const [IDemploye, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/objectifsfuturs`, {
            objectif1,
            objectif2,
            objectif3,
            IDemploye,
        }).then(() => {
            setObjectif1('');
            setObjectif2('');
            setObjectif3('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        history.push('/competences');
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Objectifs futur 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif1(e.target.value)} value={objectif1} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Objectifs futur 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif2(e.target.value)} value={objectif2} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Objectifs futur 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif3(e.target.value)} value={objectif3} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='ID Employe' onChange={(e) => setIDemploye(e.target.value)} value={IDemploye} />
                </Form.Field>
                <Button onClick={postData} type='button'>Enregistrer</Button>
                <Button onClick={handleSuivantClick}>Suivant</Button>
            </Form>
        </div>
    )
}



// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// export default function Objectifsfutur() {
//     let history = useHistory();
//     const [objectiffutur1, setObjectifFutur1] = useState('');
//     const [objectiffutur2, setObjectifFutur2] = useState('');
//     const [objectiffutur3, setObjectifFutur3] = useState('');
  
//     const [IDemploye, setIDemploye] = useState('');
   

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/objectifsfuturs`, {
//             objectiffutur1,
//             objectiffutur2,
//             objectiffutur3,
         
//             IDemploye,
//         }).then(() => {
//             history.push('/competences')
//         })
//     }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                 <label>Objectifs 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur1(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Objectifs 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur2(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Objectifs 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur3(e.target.value)} /></label>
//                 </Form.Field>
 
//                 <Form.Field>
//                     <label>ID Employe</label>
//                     <input placeholder='First Name' onChange={(e) => setIDemploye(e.target.value)}/>
//                 </Form.Field>
//                 <Button onClick={postData} type='submit'>Suivant</Button>
//                 <Link to="/accueilsite"><Button>Accueil </Button> </Link>
//             </Form>
//         </div>
//     )
// }