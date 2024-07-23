import React from 'react';
import { Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useHistory } from 'react-router';

// import BilanGenerale from './bilangenerale';
// import ObjectifsFixe from './objectif';
// import PointAmeloration from './pointamelioration';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
 import { Link } from 'react-router-dom';

function Accueil() {
    return (
       <div>
        <Form className="create-form">
        <div >
            <ul>
              <li class="nav-item1">
                <Link class="nav-link1" to="/bilans">Bilan Générale </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/objectifsfixes">Objectifs Fixés </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/pointameliorations">Point d'Améloration </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/savoirs">Evaluation des savoir-faire et savoir-être </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/projets">Projet professionnel et perspectives </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/objectifsfuturs">Objectifs Futurs </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/competences">Cartographie des compétences </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/conclusions">Conclusion </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/creerEmployes">Création d'employes</Link>
              </li>
            </ul>
          </div>
        </Form>
      </div>
    );
  }
  
  export default Accueil;
  