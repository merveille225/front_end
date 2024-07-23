import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListObjectifFixe() {
  const [objectifData, setObjectifData] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/objectifsfixes').then((response) => {
      console.log(response.data);
      setObjectifData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { Id_objectifsfixes, objectif1, objectif2, objectif3, Id_employe } = data;
    localStorage.setItem('ID Competence', Id_objectifsfixes);
    localStorage.setItem('objectif 1', objectif1);
    localStorage.setItem('objectif 2', objectif2);
    localStorage.setItem('objectif 3', objectif3);
    localStorage.setItem('ID Employe', Id_employe);

  }

const onDelete = (Id_objectiffixé) => { 
  axios.delete(`http://localhost:8000/objectifsfixes/${Id_objectiffixé}`).then(() => { 
    getObjectifData(); 
  }); 
};

const getObjectifData = () => {
    axios.get('http://localhost:8000/objectifsfixes').then((getResponse) => {
      setObjectifData(getResponse.data);
    });
  };

return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Objectif 1</Table.HeaderCell>
            <Table.HeaderCell>Objectif 2</Table.HeaderCell>
            <Table.HeaderCell>Objectif 3</Table.HeaderCell>
            <Table.HeaderCell>Employee ID</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

    <Table.Body>
      {objectifData.map((data) => {
        return (
          <Table.Row>
            <Table.Cell>{data.objectif1}</Table.Cell>
            <Table.Cell>{data.objectif2}</Table.Cell>
            <Table.Cell>{data.objectif3}</Table.Cell>
            <Table.Cell>{data.Id_employe}</Table.Cell>
            <Link to='/modifobjectifsfixes'>
                <Table.Cell>
                        <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                </Table.Cell>
            </Link>
            <Table.Cell>
              <Button onClick={() => onDelete(data.Id_objectiffixé)}> <i className="fa-solid fa-trash"></i> </Button>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
</div>
);
}