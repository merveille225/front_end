import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
//import { Link } from 'react-router-dom';

export default function ObjectifsFixe() {
    const [objectif1, setObjectif1] = useState('');
    const [objectif2, setObjectif2] = useState('');
    const [objectif3, setObjectif3] = useState('');
    const [Id_employe, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/objectifsfixes`, {
            objectif1,
            objectif2,
            objectif3,
            Id_employe,
        }).then(() => {
            // Réinitialiser les champs après l'enregistrement
            setObjectif1('');
            setObjectif2('');
            setObjectif3('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        // Redirection vers la page suivante
        history.push('/pointameliorations');
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Objectif fixé 1:<textarea name="postContent1" rows={4} cols={40} onChange={(e) => setObjectif1(e.target.value)} value={objectif1} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Objectif fixé 2:<textarea name="postContent2" rows={4} cols={40} onChange={(e) => setObjectif2(e.target.value)} value={objectif2} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Objectif fixé 3:<textarea name="postContent3" rows={4} cols={40} onChange={(e) => setObjectif3(e.target.value)} value={objectif3} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe:</label>
                    <input placeholder='Id Employe' onChange={(e) => setIDemploye(e.target.value)} value={Id_employe} />
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

// export default function ObjectifsFixe() {
//     let history = useHistory();
//     const [objectiffixé1, setObjectifFixé1] = useState('');
//     const [objectiffixé2, setObjectifFixé2] = useState('');
//     const [objectiffixé3, setObjectifFixé3] = useState('');

//     const [commentaireglobal, setCommentaireGlobal] = useState('');
//     const [IDemploye, setIDemploye] = useState('');
   

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/objectifs`, {
//             objectiffixé1,
//             objectiffixé2,
//             objectiffixé3,
        
//             commentaireglobal,
//             IDemploye,
//         }).then(() => {
//             history.push('/pointameliorations')
//         })
//     }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                 <label>Objectifs 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé1(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Objectifs 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé2(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Objectifs 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé3(e.target.value)} /></label>
//                 </Form.Field>
            
//                 <Form.Field>
//                 <label>Commentaire Global:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCommentaireGlobal(e.target.value)} /></label>
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