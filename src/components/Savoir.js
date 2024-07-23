import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function EvalSavoir() {
    const [Performance, setPerformance] = useState('');
    const [coopération, setCoopération] = useState('');
    const [Orientation_client, setOrientation_client] = useState('');
    const [Fiabilité, setFiabilité] = useState('');
    const [Engagement, setEngagement] = useState('');
    const [Autonomie, setAutonomie] = useState('');
    const [Investissement, setInvestissement] = useState('');
    const [Autres_qualités, setAutres_qualités] = useState('');
    const [Id_employe, setId_employe] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const postData = () => {
        axios.post(`http://localhost:8000/savoirs`, {
            Performance,
            coopération,
            Orientation_client,
            Fiabilité,
            Engagement,
            Autonomie,
            Investissement,
            Autres_qualités,
            Id_employe,
        }).then(() => {
            // Réinitialiser les champs après l'enregistrement
            setPerformance('');
            setCoopération('');
            setOrientation_client('');
            setFiabilité('');
            setEngagement('');
            setAutonomie('');
            setInvestissement('');
            setAutres_qualités('');
            setId_employe('');
        });
    }

    const history = useHistory();

    const handleSuivantClick = () => {
        // Redirection vers la page suivante
        history.push('/projets');
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Performance dans son poste:</label>
                    <input type='text' placeholder='' onChange={(e) => setPerformance(e.target.value)} value={Performance} />
                </Form.Field>
                <Form.Field>
                    <label>Sens du collectif et coopération:</label>
                    <input type='text' placeholder='' onChange={(e) => setCoopération(e.target.value)} value={coopération} />
                </Form.Field>
                
                <Form.Field>
    <label>Orientation client:</label>
    <input type='text' placeholder='' onChange={(e) => setOrientation_client(e.target.value)} value={Orientation_client} />
</Form.Field>
<Form.Field>
    <label>Fiabilité:</label>
    <input type='text' placeholder='' onChange={(e) => setFiabilité(e.target.value)} value={Fiabilité} />
</Form.Field>
<Form.Field>
    <label>Engagement dans ses missions:</label>
    <input type='text' placeholder='' onChange={(e) => setEngagement(e.target.value)} value={Engagement} />
</Form.Field>
<Form.Field>
    <label>Autonomie:</label>
    <input type='text' placeholder='' onChange={(e) => setAutonomie(e.target.value)} value={Autonomie} />
</Form.Field>
<Form.Field>
    <label>Investissement dans l'entreprise:</label>
    <input type='text' placeholder='' onChange={(e) => setInvestissement(e.target.value)} value={Investissement} />
</Form.Field>
                
                <Form.Field>
                    <label>Autres qualités personnelles :</label>
                    <input type='text' placeholder='' onChange={(e) => setAutres_qualités(e.target.value)} value={Autres_qualités} />
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

// export default function EvalSavoir() {
//     let history = useHistory();
//     const [Performance, setPerformance] = useState('');
//     const [coopération, setcoopération] = useState('');
//     const [Orientation_client, setOrientation_client] = useState('');
//     const [Fiabilité, setFiabilité] = useState('');
//     const [Engagement, setEngagement] = useState('');
//     const [Autonomie, setAutonomie] = useState('');
//     const [Investissement, setInvestissement] = useState('');
//     const [Autres_qualités, setAutres_qualités] = useState('');
//     const [Id_employe, setId_employe] = useState('');
   

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/savoirs`, {
//             Performance,
//             coopération,
//             Orientation_client,
//             Fiabilité,
//             Engagement,
//             Autonomie,
//             Investissement,
//             Autres_qualités,
//             Id_employe,
//         }).then(() => {
//             history.push('/projets')
//         })
//     }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                 <label>Performance dans son poste:</label>
//                 <input type='email' placeholder='' onChange={(e) => setPerformance(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Sens du collectif et coopération:</label>
//                 <input type='email' placeholder='' onChange={(e) => setcoopération(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Orientation client:</label>
//                 <input type='email' placeholder='' onChange={(e) => setOrientation_client(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Fiabilité:</label>
//                 <input type='email' placeholder='' onChange={(e) => setFiabilité(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Engagement dans ses missions:</label>
//                 <input type='email' placeholder='' onChange={(e) => setEngagement(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Automonie:</label>
//                 <input type='email' placeholder='' onChange={(e) => setAutonomie(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Investissement dans l'entreprise:</label>
//                 <input type='email' placeholder='' onChange={(e) => setInvestissement(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Autres qualités personnelles :</label>
//                 <input type='email' placeholder='' onChange={(e) => setAutres_qualités(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>ID Employe</label>
//                     <input placeholder='First Name' onChange={(e) => setId_employe(e.target.value)}/>
//                 </Form.Field>
//                 <Button onClick={postData} type='submit'>Suivant</Button>
//                 <Link to="/accueilsite"><Button>Accueil </Button> </Link>
//             </Form>
//         </div>
//     )
// }