import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function PointAmelioration() {
    const [point_amélioration, setPoint_amélioration] = useState('');
    const [IDemploye, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/pointameliorations`, {
            point_amélioration: point_amélioration,
            Id_employe: IDemploye
        }).then(() => {
            // Réinitialiser les champs après l'enregistrement
            setPoint_amélioration('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        // Redirection vers '/savoirs'
        history.push('/savoirs');
    }

    return (
        <div>
            <Form className="pointamelioration-form">
                <Form.Field>
                    <label>Point d'amélioration:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setPoint_amélioration(e.target.value)} value={point_amélioration} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='ID Employe' onChange={(e) => setIDemploye(e.target.value)} value={IDemploye} />
                </Form.Field>
                <Segment style={{ background: 'transparent', border: 'none' }}>
                    <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Button onClick={postData} type='button'>Enregistrer</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button onClick={handleSuivantClick}>Suivant</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Form>
        </div>
    )
}



// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// export default function PointAmeloration() {
//     let history = useHistory();
//     const [pointamelioration, setPointAmelioration] = useState('');
//     const [IDemploye, setIDemploye] = useState('');


    
//     const postData = () => {
//         axios.post(`http://localhost:8000/améliorations`, {
//             pointamelioration,
//             IDemploye,
//         }).then(() => {
//             history.push('/Savoir')
//         })
//     }
//     return (
//         <div>
//             <Form className="pointamélioration-form">
//                 <Form.Field>
//                 <label>Point d'amélioration:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setPointAmelioration(e.target.value)} /></label>
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