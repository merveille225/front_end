import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CartographieTable() {
  
      const [APIData, setAPIData] = useState([]);

        useEffect(() => {
        axios.get('http://localhost:8000/competences').then((response) => {
        console.log(response.data);
        setAPIData(response.data);});}, []);

  const setData = (data) => {
    let { Id_cartographie, compétence1, compétence2, compétence3, compétence4, Id_employe } = data;
    localStorage.setItem('ID Competence', Id_cartographie);
    localStorage.setItem('Competence 1', compétence1);
    localStorage.setItem('Competence 2', compétence2);
    localStorage.setItem('Competence 3', compétence3);
    localStorage.setItem('Competence 4', compétence4);
    localStorage.setItem('ID Employe', Id_employe);

  }

  const onDelete = (Id_cartographie) => {
    axios.delete(`http://localhost:8000/competences/${Id_cartographie}`).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get('http://localhost:8000/competences').then((response) => {
      setAPIData(response.data);
    });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Compétence 1</Table.HeaderCell>
            <Table.HeaderCell>Compétence 2</Table.HeaderCell>
            <Table.HeaderCell>Compétence 3</Table.HeaderCell>
            <Table.HeaderCell>Compétence 4</Table.HeaderCell>
            <Table.HeaderCell>Employé</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.Id_cartographie}>
                <Table.Cell>{data.compétence1}</Table.Cell>
                <Table.Cell>{data.compétence2}</Table.Cell>
                <Table.Cell>{data.compétence3}</Table.Cell>
                <Table.Cell>{data.compétence4}</Table.Cell>
                <Table.Cell>{data.Id_employe}</Table.Cell>
                <Link to='/modifcompetence'>
                <Table.Cell>
                        <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                    </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.Id_cartographie)}>
                  <i className="fa-solid fa-trash"></i>
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}