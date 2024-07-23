import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListSavoir() {

const [APIData, setAPIData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

useEffect(() => {
    axios.get('http://localhost:8000/savoirs').then((response) => {
      console.log(response.data)
      setAPIData(response.data);
    })
  }, []);

const setData = (data) => { let { Idsavoir, Performance, coopération, Orientationclient, Fiabilité, Engagement, Automonie, Investissement, Autresqualités, Idemploye } = data; localStorage.setItem('ID Savoir', Idsavoir); localStorage.setItem('Performance', Performance); localStorage.setItem('Coopération', coopération); localStorage.setItem('Orientation Client', Orientationclient); localStorage.setItem('Fiabilité', Fiabilité); localStorage.setItem('Engagement', Engagement); localStorage.setItem('Autonomie', Automonie); localStorage.setItem('Investissement', Investissement); localStorage.setItem('Autres Qualités', Autresqualités); localStorage.setItem('ID Employé', Idemploye); }

const getData = (e) => { axios.get(`http://localhost:8000/savoirs?q=${e}`).then((getData) => { setAPIData(getData.data); }); };

const onDelete = (Id_savoir) => { axios.delete(`http://localhost:8000/savoirs/${Id_savoir}`).then(() => { getData(); }) }

const like = (data) => { data.like += 1; axios.put(`http://localhost:8000/savoirs/${data.Id_savoir}`, data) }

const dislike = (data) => { data.dislike += 1; axios.put(`http://localhost:8000/savoirs/${data.Id_savoir}`, data) }

return (

<div>
  <input
    type="text"
    placeholder="Search"
    value={searchTxt}
    onChange={(e) => setSearchTxt(e.target.value)}
  />
  <button type="sublimt" onSelect={getData(searchTxt)}>
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>

  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id Savoir</Table.HeaderCell>
        <Table.HeaderCell>Performance</Table.HeaderCell>
        <Table.HeaderCell>Coopération</Table.HeaderCell>
        <Table.HeaderCell>Orientation Client</Table.HeaderCell>
        <Table.HeaderCell>Fiabilité</Table.HeaderCell>
        <Table.HeaderCell>Engagement</Table.HeaderCell>
        <Table.HeaderCell>Autonomie</Table.HeaderCell>
        <Table.HeaderCell>Investissement</Table.HeaderCell>
        <Table.HeaderCell>Autres Qualités</Table.HeaderCell>
        <Table.HeaderCell>Id Employé</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        <Table.HeaderCell>Like / Dislike</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {APIData.map((data) => {
        return (
          <Table.Row key={data.Id_savoir}>
            <Table.Cell>{data.Id_savoir}</Table.Cell>
            <Table.Cell>{data.Performance}</Table.Cell>
            <Table.Cell>{data.coopération}</Table.Cell>
            <Table.Cell>{data.Orientation_client}</Table.Cell>
            <Table.Cell>{data.Fiabilité}</Table.Cell>
            <Table.Cell>{data.Engagement}</Table.Cell>
            <Table.Cell>{data.Autonomie}</Table.Cell>
            <Table.Cell>{data.Investissement}</Table.Cell>
            <Table.Cell>{data.Autres_qualités}</Table.Cell>
            <Table.Cell>{data.Id_employe}</Table.Cell>
            <Link to='/modifsavoirs'>
              <Table.Cell>
                <Button onClick={() => setData(data)}><i className="fa-solid fa-pen"></i></Button>
              </Table.Cell>
            </Link>
            <Table.Cell>
              <Button onClick={() => onDelete(data.Id_savoir)}><i className="fa-solid fa-trash"></i></Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => like(data)}> <i className="fa-solid fa-thumbs-up"></i> {data.like}</Button>
              <Button onClick={() => dislike(data)}> <i className="fa-solid fa-thumbs-down"></i> {data.dislike}</Button>
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
</div>
)
}