import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function CreerBilan() {
    const [bilangenerale, setBilanGenerale] = useState('');
    const [IDemploye, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/bilans`, {
            bilangenerale,
            IDemploye
        }).then(() => {
            setBilanGenerale('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        history.push('/objectifsfixes');
    }

    return (
        <div>
            <Form className="bilan-form">
                <Form.Field>
                    <label>Bilan Général:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setBilanGenerale(e.target.value)} value={bilangenerale} /></label>
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


// 1

// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// export default function CreerBilan() {
//     let history = useHistory();
//     const [bilangenerale, setBilanGenerale] = useState('');
//     const [IDemploye, setIDemploye] = useState('');

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/bilans`, {
//             bilangenerale,
//             IDemploye,
//         }).then(() => {
//             history.push('/objectiffixes')
//         })
//     }
//     return (
//         <div>
//             <Form className="bilan-form">
//                 <Form.Field>
//                 <label>Bilan Général:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setBilanGenerale(e.target.value)} /></label>
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


// 2

// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// export default function CreerBilan() {
//     let history = useHistory();
//     const [bilangenerale, setBilanGenerale] = useState('');
//     const [IDemploye, setIDemploye] = useState('');
//     const [afficherBilan, setAfficherBilan] = useState(false); // Ajout de l'état pour afficher le bilan

//     const postData = () => {
//         axios.post(`http://localhost:8000/bilans`, {
//             bilangenerale,
//             IDemploye,
//         }).then(() => {
//             // Après la soumission, vous pouvez choisir d'afficher le bilan
//             setAfficherBilan(true);
//         });
//     }

//     return (
//         <div>
//             <Form className="bilan-form">
//                 <Form.Field>
//                     <label>Bilan Général:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setBilanGenerale(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>ID Employe</label>
//                     <input placeholder='First Name' onChange={(e) => setIDemploye(e.target.value)} />
//                 </Form.Field>
//                 <Button onClick={postData} type='submit'>Suivant</Button>
//             </Form>

//             {afficherBilan && (
//                 <div>
//                     <h3>Bilan Saisi :</h3>
//                     <p>{bilangenerale}</p>
//                     <p>ID Employe : {IDemploye}</p>
//                 </div>
//             )}

//             <Link to="/accueilsite"><Button>Accueil</Button></Link>
//         </div>
//     )
// }
