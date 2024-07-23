import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function ModifAmelioration() {
  let history = useHistory();
  const [Id_amelioration, setId_amelioration] = useState(null);
  const [point_amelioration, setPointAmelioration] = useState('');
  const [Id_employe, setIdEmploye] = useState(null);

  useEffect(() => {
    setId_amelioration(localStorage.getItem('Id_amélioration'));
    setPointAmelioration(localStorage.getItem('point_amélioration'));
    setIdEmploye(localStorage.getItem('Id_employe'));
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:8000/pointameliorations/${Id_amelioration}`, {
      Id_amelioration,
      point_amelioration,
      Id_employe,
    }).then(() => {
      history.push('/listpointamelioration');
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Point d'amélioration :</label>
          <input placeholder="Point d'amélioration" value={point_amelioration} onChange={(e) => setPointAmelioration(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Id de l'employé :</label>
          <input placeholder="Id de l'employé" value={Id_employe} onChange={(e) => setIdEmploye(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  );
}