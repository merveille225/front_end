import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
//import { Link } from 'react-router-dom';

export default function CreerProjet() {
    const [perspectivesProjet, setPerspectivesProjet] = useState('');
    const [Id_employe, setId_employe] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/projets`, {
            perspectivesProjet,
            Id_employe,
        }).then(() => {
            // Réinitialiser les champs après l'enregistrement
            setPerspectivesProjet('');
            setId_employe('');
        });
    }

    const handleSuivantClick = () => {
        // Redirection vers la page suivante
        history.push('/objectifsfuturs');
    }

    return (
        <div>
            <Form className="projet-form">
                <Form.Field>
                    <label>Projet professionnel et perspectives:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setPerspectivesProjet(e.target.value)} value={perspectivesProjet} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='First Name' onChange={(e) => setId_employe(e.target.value)} value={Id_employe} />
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

// export default function CreerProjet() {
//     let history = useHistory();
//     const [projetpers, setProjetpers] = useState('');
//     const [IDemploye, setIDemploye] = useState('');
   

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/projets`, {
//             projetpers,
//             IDemploye,
//         }).then(() => {
//             history.push('/objectifsfixes')
//         })
//     }
//     return (
//         <div>
//             <Form className="projet-form">
//                 <Form.Field>
//                 <label>Projet professionnel et perspectives:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setProjetpers(e.target.value)} /></label>
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