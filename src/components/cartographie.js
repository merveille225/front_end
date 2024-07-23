import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Compétence() {
    const [compétence1, setCompétence1] = useState('');
    const [compétence2, setCompétence2] = useState('');
    const [compétence3, setCompétence3] = useState('');
    const [compétence4, setCompétence4] = useState('');
    const [IDemploye, setIDemploye] = useState('');
    const history = useHistory();

    const postData = () => {
        axios.post(`http://localhost:8000/competences`, {
            compétence1,
            compétence2,
            compétence3,
            compétence4,
            IDemploye,
        }).then(() => {
            setCompétence1('');
            setCompétence2('');
            setCompétence3('');
            setCompétence4('');
            setIDemploye('');
        });
    }

    const handleSuivantClick = () => {
        history.push('/conclusions');
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Compétence 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence1(e.target.value)} value={compétence1} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Compétence 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence2(e.target.value)} value={compétence2} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Compétence 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence3(e.target.value)} value={compétence3} /></label>
                </Form.Field>
                <Form.Field>
                    <label>Compétence 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence4(e.target.value)} value={compétence4} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employé</label>
                    <input placeholder='First Name' onChange={(e) => setIDemploye(e.target.value)} value={IDemploye} />
                </Form.Field>
                <Button onClick={postData} type='button'>Enregistrer</Button>
                <Button onClick={handleSuivantClick}>Suivant</Button>
            </Form>
        </div>
    )
}




// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// export default function Compétence() {
//          const [compétence1, setCompétence1] = useState('');
//          const [compétence2, setCompétence2] = useState('');
//          const [compétence3, setCompétence3] = useState('');
//          const [compétence4, setCompétence4] = useState('');
//     const [IDemploye, setIDemploye] = useState('');
//     const history = useHistory();

//     const postData = () => {
//         axios.post(`http://localhost:8000/competences`, {
//             compétence1,
//             compétence2,
//             compétence3,
//             compétence4,
//             IDemploye,
//         }).then(() => {
//             setCompétence1('');
//             setCompétence2('');
//             setCompétence3('');
//             setCompétence4('');
//             setIDemploye('');
//         });
//     }

//     const handleSuivantClick = () => {
//         history.push('/conclusion');
//     }

//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>Competence 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence1(e.target.value)} value={competence1} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Competence 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence2(e.target.value)} value={competence2} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Competence 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence3(e.target.value)} value={competence3} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Competence 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence4(e.target.value)} value={competence4} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>ID Employe</label>
//                     <input placeholder='First Name' onChange={(e) => setIDemploye(e.target.value)} value={IDemploye} />
//                 </Form.Field>
//                 <Button onClick={postData} type='button'>Enregistrer</Button>
//                 <Button onClick={handleSuivantClick}>Suivant</Button>
//             </Form>
//         </div>
//     )
// }


// 1
// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// export default function Compétence() {
//     let history = useHistory();
//     const [compétence1, setCompétence1] = useState('');
//     const [compétence2, setCompétence2] = useState('');
//     const [compétence3, setCompétence3] = useState('');
//     const [compétence4, setCompétence4] = useState('');

//     const [IDemploye, setIDemploye] = useState('');
   

    
//     const postData = () => {
//         axios.post(`http://localhost:8000/competences`, {
//             compétence1,
//             compétence2,
//             compétence3,
//             compétence4,
//             IDemploye,
//         }).then(() => {
//             history.push('/conclusion')
//         })
//     }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                 <label>Compétence 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence1(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Compétence 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence2(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Compétence 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence3(e.target.value)} /></label>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Compétence 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence4(e.target.value)} /></label>
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