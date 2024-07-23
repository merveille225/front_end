import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function ModifCartographie() {
  let history = useHistory();
  const [Idcartographie, setIdcartographie] = useState(null);
  const [competence1, setCompetence1] = useState('');
  const [competence2, setCompetence2] = useState('');
  const [competence3, setCompetence3] = useState('');
  const [Idemploye, setIdemploye] = useState(null);

useEffect(() => {
    setIdcartographie(localStorage.getItem('ID'));
    setCompetence1(localStorage.getItem('Competence1'));
    setCompetence2(localStorage.getItem('Competence2'));
    setCompetence3(localStorage.getItem('Competence3'));
    setIdemploye(localStorage.getItem('Idemploye'));
  }, []);

const updateAPIData = () => { axios.put(`http://localhost:8000/competences/${Idcartographie}`, { Idcartographie, competence1, competence2, competence3, Idemploye }).then(() => { history.push('/listcompetences'); }); }

return (
    <div>
      <Form className="create-form">
      <Form.Field>
                <label>Compétence 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence1(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence2(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompetence3(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='First Name' onChange={(e) => setIdemploye(e.target.value)}/>
                </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  )
}