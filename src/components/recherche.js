
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function ListEmployes() {
    const [APIData, setAPIData] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/recherches`).then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);


    const getData = (e) => {
        axios.get(`http://localhost:8000/recherches?q=${e}`).then((getData) => {
                setAPIData(getData.data);
            });
    };


    return (
    
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button type="sublimt" onSelect={getData(searchTxt)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

        </div>
    )     

}

// import React from 'react';
// import { Card, Divider, Header, List } from 'semantic-ui-react';

// const employeDetails = ({ employe }) => {
//   const {
//     Id_employe,
//     Nom_employe,
//     Prenom_employe,
//     Email_employe,
//     Mdp_employe,
//     date,
//     Id_bilan,
//     bilan_générale,
//     Id_objectiffixé,
//     objectif1,
//     objectif2,
//     objectif3,
//     Id_objectiffutur,
//     Id_objectifvalidation,
//     objectif4,
//     objectif5,
//     Id_amélioration,
//     point_amélioration,
//     Id_savoir,
//     Performance,
//     coopération,
//     Orientation_client,
//     Fiabilité,
//     Engagement,
//     Automonie,
//     Investissement,
//     Autres_qualités,
//     Id_projet,
//     Id_cartographie,
//     compétence1,
//     compétence2,
//     compétence3,
//     compétence4,
//     compétence5,
//     compétence6,
//     compétence7,
//     Id_conclusion,
//     conclusion
//   } = employe;

//   return (
//     <Card fluid>
//       <Card.Content>
//         <Header as="h2">{`${Nom_employe} ${Prenom_employe}`}</Header>
//         <Divider />

//         <List>
//           <List.Item>
//             <List.Header>ID Employé</List.Header>
//             {Id_employe}
//           </List.Item>
//           <List.Item>
//             <List.Header>Nom Employé</List.Header>
//             {Nom_employe}
//           </List.Item>
//           <List.Item>
//             <List.Header>Prénom Employé</List.Header>
//             {Prenom_employe}
//           </List.Item>
//           <List.Item>
//             <List.Header>Email Employé</List.Header>
//             {Email_employe}
//           </List.Item>
//           {/* Ajoutez les autres champs de la même manière */}
//         </List>

//         {/* Affichez les autres détails de l'employé */}
//       </Card.Content>
//     </Card>
//   );
// };

// const employeList = ({ employes }) => {
//   return (
//     <div>
//       {employes.map((employe, index) => (
//         <employeDetails key={index} employe={employe} />
//       ))}
//     </div>
//   );
// };


// const App = () => {
//     const employesData = [
//         // ... les autres employés
      
//         {
//           Id_employe: 4,
//           Nom_employe: 'Amroun',
//           Prenom_employe: 'Sarah',
//           Email_employe: 'undefined',
//           Mdp_employe: null,
//           date: null,
//           Id_bilan: 4,
//           bilan_générale: 'Nécessite une amélioration dans la communication',
//           Id_objectiffixé: 4,
//           objectif1: 'Objectif 1 pour employé 4',
//           objectif2: 'Objectif 2 pour employé 4',
//           objectif3: 'Objectif 3 pour employé 4',
//           Id_objectiffutur: 4,
//           Id_objectifvalidation: 4,
//           objectif4: 'Validé',
//           objectif5: 'Validé',
//           Id_amélioration: 4,
//           point_amélioration: 'Renforcer les compétences en résolution de problèmes',
//           Id_savoir: 4,
//           Performance: 'Très bonne',
//           coopération: 'Très bonne',
//           Orientation_client: 'Excellente',
//           Fiabilité: 'Fiable',
//           Engagement: 'Engagé',
//           Automonie: 'Autonome',
//           Investissement: 'Investi',
//           Autres_qualités: 'Créatif',
//           Id_projet: 4,
//           Id_cartographie: 4,
//           compétence1: 'Compétence D1',
//           compétence2: 'Compétence D2',
//           compétence3: 'Compétence D3',
//           compétence4: 'Compétence D4',
//         },
      
//         // ... les autres employés
//       ];
      
// };


// export default App;


