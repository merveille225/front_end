import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function ModifBilan() {
  let history = useHistory();
  const [Id_bilan, setId_bilan] = useState(null);
  const [bilan, setBilan] = useState('');
  const [Id_employe, setId_employe] = useState(null);

  useEffect(() => {
    setId_bilan(localStorage.getItem('Id_bilan'));
    setBilan(localStorage.getItem('bilan_générale'));
    setId_employe(localStorage.getItem('Id_employe'));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:8000/bilans/${Id_bilan}`, {
        Id_bilan,
        bilan_générale: bilan,
        Id_employe
      })
      .then(() => {
        history.push('/ListBilan');
      });
  };

  return (
    <div>
      <Form className="create-form">
      <Form.Field>
                <label>Bilan Général:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setBilan(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='First Name' onChange={(e) => setId_employe(e.target.value)}/>
                </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  );
}