import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListObjectifFutur() {

const [APIData, setAPIData] = useState([]);
const [searchTxt, setSearchTxt] = useState("");
useEffect(() => {
    axios.get('http://localhost:8000/objectifsfuturs').then((response) => {
        console.log(response.data)
        setAPIData(response.data); }) }, []);

const setData = (data) => {
let { Id_objectiffutur, objectif1, objectif2, objectif3, objectif4,
objectif5, Id_employe } = data;
localStorage.setItem('ID Objectif Futur', Id_objectiffutur);
localStorage.setItem('Objectif 1', objectif1);
localStorage.setItem('Objectif 2', objectif2);
localStorage.setItem('Objectif 3', objectif3);
localStorage.setItem('Objectif 4', objectif4);
localStorage.setItem('Objectif 5', objectif5);
localStorage.setItem('ID Employe', Id_employe);
}

const getData = (e) => { 
    axios.get(`http://localhost:8000/objectifsfuturs?q=${e}`).then((getData) => { 
        setAPIData(getData.data); 
    });
 };

const onDelete = (Id_objectiffutur) => { 
    axios.delete(`http://localhost:8000/objectifsfuturs/${Id_objectiffutur}`).then(() => { 
        getData(); 
    }) 
}

return (

<div>
    <input type="text" placeholder="Search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />

  <button type="sublimt" onSelect={getData(searchTxt)}>
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>

    <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id Objectif Futur</Table.HeaderCell>
                <Table.HeaderCell>Objectif 1</Table.HeaderCell>
                <Table.HeaderCell>Objectif 2</Table.HeaderCell>
                <Table.HeaderCell>Objectif 3</Table.HeaderCell>
                <Table.HeaderCell>Id Employé</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {APIData.map((data) => {
                return (
                    <Table.Row>
                        <Table.Cell>{data.Id_objectiffutur}</Table.Cell>
                        <Table.Cell>{data.objectif1}</Table.Cell>
                        <Table.Cell>{data.objectif2}</Table.Cell>
                        <Table.Cell>{data.objectif3}</Table.Cell>
                        <Table.Cell>{data.Id_employe}</Table.Cell>
                        <Link to='/modifObjectifsFuturs'>
                            <Table.Cell>
                                <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell>
                            <Button onClick={() => onDelete(data.Id_objectiffutur)}><i class="fa-solid fa-trash"></i></Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>
    </div>
)
}