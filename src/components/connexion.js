import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8000/employes');
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        // Connexion réussie
        history.push('/listEmployes');
      } else {
        setErrorMessage('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreurs lors de la récupération des utilisateurs', error);
      // Gérer les erreurs ici
    }
  };

  return (
    <div>
      <Form className="login-form" onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Email:</label>
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
