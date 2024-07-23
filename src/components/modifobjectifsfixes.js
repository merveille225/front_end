import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function ModifObjectiffs() {
    let history = useHistory();
    const [Id_objectiffixe, setId_objectiffixe] = useState(null);
    const [objectif1, setObjectif1] = useState('');
    const [objectif2, setObjectif2] = useState('');
    const [objectif3, setObjectif3] = useState('');
    const [Id_employe, setId_employe] = useState(null);

    useEffect(() => {
        setId_objectiffixe(localStorage.getItem('ID_objectiffixe'));
        setObjectif1(localStorage.getItem('objectif1'));
        setObjectif2(localStorage.getItem('objectif2'));
        setObjectif3(localStorage.getItem('objectif3'));
        setId_employe(localStorage.getItem('Id_employe'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8000/objectifsfixes/${Id_objectiffixe}`, {
            Id_objectiffixe,
            objectif1,
            objectif2,
            objectif3,
            Id_employe
        }).then(() => {
            history.push('/listObjectifsfixes')
        })
    }

    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                <label>Objectifs 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif1(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif2(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectif3(e.target.value)} /></label>
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