import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListAmelioration() {

const [APIData, setAPIData] = useState([]);
const [searchTxt, setSearchTxt] = useState("");
useEffect(() => {
    axios.get('http://localhost:8000/pointameliorations').then((response) => {
        console.log(response.data)
        setAPIData(response.data); }) }, []);

const setData = (data) => {
    let { Id_amélioration, point_amélioration, Id_employe } = data;
    localStorage.setItem('ID Amélioration', Id_amélioration);
    localStorage.setItem('Point Amélioration', point_amélioration);
    localStorage.setItem('ID Employe', Id_employe);
}

const getData = (e) => {
    axios.get(`http://localhost:8000/pointameliorations?q=${e}`).then((getData) => {
            setAPIData(getData.data);
        });
};

const onDelete = (Id_amélioration) => {
    axios.delete(`http://localhost:8000/pointameliorations/${Id_amélioration}`).then(() => {
        getData();
    })
}

const like = (data) => {
    data.like += 1;
    axios.put(`http://localhost:8000/pointameliorations/${data.Id_amélioration}`, data)
}

const dislike = (data) => {
    data.dislike += 1;
    axios.put(`http://localhost:8000/pointameliorations/${data.Id_amélioration}`, data)
}

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
                    <Table.HeaderCell>Id Amélioration</Table.HeaderCell>
                    <Table.HeaderCell>Point Amélioration</Table.HeaderCell>
                    <Table.HeaderCell>Id Employé</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell>Like  /  Dislike</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.Id_amélioration}</Table.Cell>
                            <Table.Cell>{data.point_amélioration}</Table.Cell>
                            <Table.Cell>{data.Id_employe}</Table.Cell>
                            <Link to='/modifpointameliorations'>
                                <Table.Cell>
                                    <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                                </Table.Cell>
                            </Link>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.Id_amélioration)}><i class="fa-solid fa-trash"></i></Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => like(data)}> <i class="fa-solid fa-thumbs-up"></i> {data.like}</Button>
                                <Button onClick={() => dislike(data)}> <i class="fa-solid fa-thumbs-down"></i> {data.dislike}</Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    </div>
)
}