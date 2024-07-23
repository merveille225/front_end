import './App.css';

import Connexion from './components/connexion';

import CreerEmployes from './components/creerEmployes';
import ListEmployes from './components/listEmployes';
import ModifEmployes from './components/modifEmployes';

import Accueilsite from './components/accueilsite';
import Recherche from './components/recherche';

import BilanGenerale from './components/bilangenerale';
//import BilanGenerale from './components/bilans';
import ListBilan from './components/listBilan';
//import ModifBilan from './components/modifbilans';

import ObjectifsFixe from './components/objectif';
//import ObjectifsFixe from './components/objectifsfixes';
import ListObjectifFixe from './components/listobjectifsfixes';
//import ModifObjectifsfixes from './components/modifobjectifsfixes';

import PointAmeloration from './components/pointamelioration';
//import PointAmeloration from './components/pointameliorations';
import ListPointamelioration from './components/listpointamelioration';
//import ModifPointameliorations from './components/modifpointameliorations';

import EvalSavoir from './components/Savoir';
//import EvalSavoir from './components/savoirs';
import ListSavoir from './components/listsavoirs';

import Projetpers from './components/Projet'; 
//import CreerProjet from './components/projets';
import ListProjet from './components/listprojets';

import ObjectifsFutur from './components/objectifs2';
//import ObjectifsFutur from './components/objectifsfuturs';
import ListObjectifFutur from './components/listobjectifsfuturs';


import Compétence from './components/cartographie';
//import Compétence from './components/competences';
import ListCompetence from './components/listcompetences';
import ModifCompetence from './components/modifcompetence';

import Conclusion from './components/conclusion';
//import Conclusion from './components/conclusions';
import ListConclusion from './components/listconclusion';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() { 
  return ( 
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid justify-content-center">
          <Link class="nav-link" to="/connexion">Connexion <i class="fa-solid fa-house"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" to="/accueilsite">Accueil <i class="fa-solid fa-house"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listEmployes">Employes <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ListBilan">Bilans <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listobjectifsfixes">Objectifs Fixes <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listpointamelioration">Point d'améliorations <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listsavoirs">Savoirs <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listprojets">Projets <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listobjectifsfuturs">Objectifs Futurs <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listcompetences">Competences <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listconclusion">Conclusions <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/recherches">Recherche<i class="fa-solid fa-house"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main">
        <h1 className="main-header"> <i class="fa-solid fa-feather"></i> ESTIAM RH <i class="fa-solid fa-feather"></i></h1>

        <div>
          <Route exact path='/connexion' component={Connexion} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/accueilsite' component={Accueilsite} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/recherches' component={Recherche} />
        </div>

        <div>
          <Route exact path='/creerEmployes' component={CreerEmployes} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listEmployes' component={ListEmployes} />
        </div>
        <div>
        <Route path='/modifEmployes' component={ModifEmployes} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path='/bilans' component={BilanGenerale} />
        </div> 
        <div style={{ marginTop: 20 }}>
          <Route exact path='/ListBilan' component={ListBilan} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path='/objectifsfixes' component={ObjectifsFixe} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listobjectifsfixes' component={ListObjectifFixe} />
        </div>
        


        <div style={{ marginTop: 20 }}>
          <Route exact path='/pointameliorations' component={PointAmeloration} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listpointamelioration' component={ListPointamelioration} />
        </div>


        <div style={{ marginTop: 20 }}>
          <Route exact path='/savoirs' component={EvalSavoir} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listsavoirs' component={ListSavoir} />
        </div>


        <div style={{ marginTop: 20 }}>
          <Route exact path='/projets' component={Projetpers} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listprojets' component={ListProjet} />
        </div>
        


        <div style={{ marginTop: 20 }}>
          <Route exact path='/objectifsfuturs' component={ObjectifsFutur} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listobjectifsfuturs' component={ListObjectifFutur} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path='/competences' component={Compétence} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listcompetences' component={ListCompetence} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path='/conclusions' component={Conclusion} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listconclusion' component={ListConclusion} />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
