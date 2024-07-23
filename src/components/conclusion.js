import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function CreerConclusion() {
    const [conclusion, setConclusion] = useState('');
    const [IDemploye, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/conclusions`, {
            conclusion,
            IDemploye,
        }).then(() => {
            setConclusion('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        history.push('/accueilsite'); // Redirection vers '/listEmployes'
    }

    return (
        <div>
            <Form className="conclusion-form">
                <Form.Field>
                    <label>Conclusion:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setConclusion(e.target.value)} value={conclusion} /></label>
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

// export default function CreerConclusion() {
//     let history = useHistory();




//     const [conclusion, setConclusion] = useState('');
//     const [IDemploye, setIDemploye] = useState('');

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/conclusions`, {
//             conclusion,
//             IDemploye,
//         }).then(() => {
//             history.push('/listEmployes')
//         })
//     }
//     return (
//         <div>
//             <Form className="conclusion-form">
//                 <Form.Field>
//                 <label>Conclusion:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setConclusion(e.target.value)} /></label>
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